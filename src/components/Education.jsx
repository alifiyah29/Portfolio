"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Education = () => {
  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });
  return (
    <div
      className="flex flex-col gap-12 justify-center pb-48"
      ref={educationRef}
    >
      {/* EDUCATION TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isEducationRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        EDUCATION
      </motion.h1>
      {/* EDUCATION LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isEducationRefInView ? { x: "0" } : {}}
        className=""
      >
        {/* EDUCATION LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3 ">
            {/* EDUCATION TITLE - Master's*/}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              Master of Science in Information Technology
            </div>
            {/* EDUCATION DESC */}
            <div className="p-3 text-lg">Arizona State University </div>
            {/* EDUCATION DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              2022 - 2024
            </div>
          </div>
          {/* CENTER */}
          <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 "></div>
        </div>
        {/* Education LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3 "></div>
          {/* CENTER */}
          <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 ">
            {/* EDUCATION TITLE - Software Developer Intern */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              Bachelor of Technology in Computer Science
            </div>
            {/* EDUCATION DESC */}
            <div className="p-3 text-lg">
              Rajiv Gandhi Technical University{" "}
            </div>
            {/* EDUCATION DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              2017 - 2021{" "}
            </div>
          </div>
        </div>
      </motion.div>
      {/* EXPERIENCE SCROLL SVG */}
      <motion.svg
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: "10px" }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
        <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
      </motion.svg>
    </div>
  );
};

export default Education;
