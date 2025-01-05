import React from "react";
import { motion } from "framer-motion";

const Tutoring = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-8">
      <motion.h1
        className="text-center text-4xl font-bold mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tutoring Services
      </motion.h1>

      {/* Three Column Layout */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Subjects Section */}
        <div className="w-full lg:w-1/3 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Subjects</h2>
          <p className="text-gray-700">We offer tutoring in the following subjects:</p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Math</li>
            <li>English</li>
            <li>Science</li>
          </ul>
        </div>

        {/* Levels Section */}
        <div className="w-full lg:w-1/3 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Levels</h2>
          <p className="text-gray-700">
            Our tutoring services cover the following levels:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>K-12 Math and English</li>
            <li>SAT Tutoring</li>
            <li>Calculus I</li>
            <li>College Applications</li>
          </ul>
        </div>

        {/* Tutoring Options Section */}
        <div className="w-full lg:w-1/3 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Tutoring Options
          </h2>
          <p className="text-gray-700">
            We provide two convenient tutoring options:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              <strong>In-Person:</strong> Visit us in Rochester Hills, MI.
            </li>
            <li>
              <strong>Online:</strong> Flexible virtual tutoring sessions.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Tutoring;