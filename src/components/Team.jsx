import React from 'react';
import aboutImg from "../assets/aboutsal.jpg";
import rehanImg from "../assets/rehanpfp.jpg";
import { motion } from "framer-motion";



const Team = () => {
    return (
      <div className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-4xl font-bold text-gray-800"
        >
          Meet the <span className="text-indigo-600">Tutors</span>
        </motion.h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Salman's Profile */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              <img
                className="rounded-2xl shadow-lg max-w-[300px] transition-transform duration-300 group-hover:scale-105"
                src={aboutImg}
                alt="Salman Mallick"
              />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-800">
              Salman Mallick
            </h2>
            <p className="mt-4 text-center max-w-md text-gray-600">
              Salman is a Data Science major at the University of Michigan, scoring a 1450 on the SAT. 
              He has taken Calculus I, II, III, and Linear Algebra and has been tutoring students since 2020. 
              He primarily focuses on upper high-school Math and English with a focus on SAT.
            </p>
          </motion.div>
  
          {/* Rehan's Profile */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              <img
                className="rounded-2xl shadow-lg max-w-[300px] transition-transform duration-300 group-hover:scale-105"
                src={rehanImg}
                alt="Rehan Mallick"
              />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-800">
              Rehan Mallick
            </h2>
            <p className="mt-4 text-center max-w-md text-gray-600">
              Rehan, the founder of AIMES Learning, holds a Master's degree in Computer Science from Wayne State University. 
              Since establishing AIMES in 2017, he has dedicated himself to helping students succeed in elementary and 
              middle school Math and English. Over the years, Rehan has tutored more than 300 students, empowering them 
              to excel both academically and personally.
            </p>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Team;

