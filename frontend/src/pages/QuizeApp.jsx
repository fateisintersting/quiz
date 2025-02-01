import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import Navbar from "../component/Navbar";
import Rules from "../component/Rules";
import Scoreboard from "../component/Scoreboard";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [started, setStarted] = useState(false);
  const [timePerQuestion, setTimePerQuestion] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  useEffect(() => {
    axios.get("http://localhost:5000/api/quiz")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
      });
  }, []);

  useEffect(() => {
    if (started && timeLeft > 0 && !quizOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setQuizOver(true);
    }
  }, [timeLeft, quizOver, started]);

  const handleAnswer = (isCorrect) => {
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    setTimePerQuestion([...timePerQuestion, timeTaken]);
    setQuestionStartTime(Date.now());

    if (isCorrect) setScore(score + 4);
    else setScore(score - 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizOver(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-amber-50">
        {!started ? (
          <Rules startQuiz={() => setStarted(true)} />
        ) : quizOver ? (
          <Scoreboard score={score} timeTaken={600 - timeLeft} timePerQuestion={timePerQuestion} />
        ) : questions.length > 0 ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-96"
          >
            <Card>
              <p className="mt-4 font-extrabold text-lg">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
              <CardContent>
                <h2 className="text-xl font-semibold">
                  {questions[currentQuestion].description}
                </h2>
                <div className="mt-4 ">
                  {questions[currentQuestion].options.map((option) => (
                    <Button
                      key={option.id}
                      className="w-full hover:bg-green-400 my-2"
                      onClick={() => handleAnswer(option.is_correct)}
                    >
                      {option.description}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <p className="text-2xl">Loading 👻 quiz...</p>
        )}
      </div>
    </>
  );
};

export default QuizApp;
