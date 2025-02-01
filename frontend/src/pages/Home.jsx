import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="./video/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay with Motion */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center p-6 text-center text-white"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to Quiz Master
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Challenge yourself with engaging quizzes and test your knowledge in a fun and interactive way!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <Link to="/quiz">
            <Button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg md:text-xl rounded-lg shadow-lg transition-all">
              Start Quiz
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
