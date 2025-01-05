import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adds a delay between children
        when: "beforeChildren", // Ensure children animate after the parent
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Slightly longer duration
        ease: [0.25, 0.8, 0.25, 1], // Smooth cubic-bezier easing
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-4 text-gray-800"
          variants={headingVariants}
        >
          Simple, Transparent Pricing
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-center text-gray-600 mb-12"
          variants={fadeIn}
        >
          Choose the plan that works best for your needs
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Single Subject Plan */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Single Subject
            </h2>
            <div className="text-4xl font-bold text-indigo-600 mb-4">
              $80<span className="text-lg font-normal text-gray-600">/month</span>
            </div>
            <ul className="text-gray-600 space-y-3 mb-6">
              <li>✓ One subject of your choice</li>
              <li>✓ One session per week</li>
              <li>✓ Personalized attention</li>
              <li>✓ Progress tracking</li>
            </ul>
          </motion.div>

          {/* Two Subjects Plan */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-600 relative"
          >
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
              Most Popular
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Two Subjects
            </h2>
            <div className="text-4xl font-bold text-indigo-600 mb-4">
              $150<span className="text-lg font-normal text-gray-600">/month</span>
            </div>
            <ul className="text-gray-600 space-y-3 mb-6">
              <li>✓ Two subjects of your choice</li>
              <li>✓ One session per week</li>
              <li>✓ Personalized attention</li>
              <li>✓ Progress tracking</li>
            </ul>
          </motion.div>

          {/* Additional Sessions Plan */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Additional Sessions
            </h2>
            <div className="text-4xl font-bold text-indigo-600 mb-4">
              +$20<span className="text-lg font-normal text-gray-600">/per session</span>
            </div>
            <ul className="text-gray-600 space-y-3 mb-6">
              <li>✓ Per additional day per week</li>
              <li>✓ Flexible scheduling</li>
              <li>✓ Same great quality</li>
              <li>✓ Enhanced progress</li>
            </ul>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          className="text-center text-gray-600 mt-12"
          variants={fadeIn}
        >
          All plans include personalized attention and progress tracking
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Pricing;
