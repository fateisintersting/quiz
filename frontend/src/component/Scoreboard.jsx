import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Navbar from "./Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Scoreboard = ({ score, timeTaken, timePerQuestion }) => {
  const chartData = {
    labels: timePerQuestion.map((_, index) => `Q${index + 1}`),
    datasets: [
      {
        label: "Time per Question (sec)",
        data: timePerQuestion,
        backgroundColor: "#FF5733",
        borderColor: "#FF5733",
        borderWidth: 1,
      },
    ],
  };

  const scoreData = {
    labels: ["Total Score", "Time Taken (sec)"],
    datasets: [
      {
        label: "Performance",
        data: [score, timeTaken],
        backgroundColor: ["#4CAF50", "#FF5733"],
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-12">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Scoreboard</h1>
          <p className="text-lg font-bold">Total Score: {score}</p>
          <p className="text-lg font-bold">
            Time Taken: {Math.floor(timeTaken / 60)}:
            {(timeTaken % 60).toString().padStart(2, "0")}
          </p>
        </div>
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-center mb-4">
            Score Summary
          </h2>
          <Bar data={scoreData} />
        </div>
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-center mb-4">
            Time Analysis
          </h2>
          <Line data={chartData} />
        </div>
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-center mb-4">
            Performance Distribution
          </h2>
          <Pie
            data={{
              labels: chartData.labels,
              datasets: [
                {
                  ...chartData.datasets[0],
                  backgroundColor: [
                    "rgba(255, 87, 51, 0.9)",  // Red - Dark
                    "rgba(255, 87, 51, 0.6)",  // Red - Medium
                    "rgba(255, 87, 51, 0.3)",  // Red - Light
                    "rgba(54, 162, 235, 0.9)", // Blue - Dark
                    "rgba(54, 162, 235, 0.6)", // Blue - Medium
                    "rgba(54, 162, 235, 0.3)", // Blue - Light
                    "rgba(76, 175, 80, 0.9)",  // Green - Dark
                    "rgba(76, 175, 80, 0.6)",  // Green - Medium
                    "rgba(76, 175, 80, 0.3)",  // Green - Light
                  ],
                },
              ],
            }}
          />
        </div>
        <Link to="/">
          <Button className="mt-6 hover:bg-amber-600">Back to Home</Button>
        </Link>
      </div>
    </>
  );
};

export default Scoreboard;
