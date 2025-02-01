import React from "react";
import { Button } from "@/components/ui/button";

const Rules = ({ startQuiz }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-3xl font-bold mb-6">Quiz Rules</h2>
      <ul className="text-lg mb-6 space-y-2">
        <li>✅ You have 10 minutes to complete the quiz.</li>
        <li>✅ Each correct answer gives +4 points.</li>
        <li>✅ Each incorrect answer deducts -1 point.</li>
        <li>✅ You cannot go back once you select an answer.</li>
        <li>✅ The timer will keep running, even if you leave the page.</li>
      </ul>
      <Button onClick={startQuiz} className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition-all">
        I Understand, Start Quiz
      </Button>
    </div>
  );
};

export default Rules;
