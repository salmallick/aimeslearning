import React from "react";
import profilePic from "../assets/aimeslogo.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-8">
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12"
        >
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 lg:text-7xl">
              AIMES Learning
            </h1>
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-2xl font-medium tracking-tight text-transparent lg:text-4xl">
              AIME for Excellence
            </span>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-6/12"
        >
          <div className="flex justify-center lg:justify-end">
            <img
              src={profilePic}
              alt="AIMES Logo"
              className="w-full max-w-[300px] lg:max-w-[400px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
