"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SoftwareEngineer from "@/components/SoftwareEngineer";
import SoftwareDeveloperIntern from "@/components/SoftwareDeveloperIntern";
import Link from "next/link";

const EducationAndExperience = () => {
  const sectionRef = useRef();
  const isSectionRefInView = useInView(sectionRef, { margin: "-100px" });
  const [showSoftwareEngineerPrompt, setShowSoftwareEngineerPrompt] =
    useState(false);
  const [
    showSoftwareDeveloperInternPrompt,
    setShowSoftwareDeveloperInternPrompt,
  ] = useState(false);

  return (
    <div className="flex flex-col gap-12 justify-center pb-48" ref={sectionRef}>
      {/* TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isSectionRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        EDUCATION & EXPERIENCE
      </motion.h1>

      <motion.div
        initial={{ x: "-300px" }}
        animate={isSectionRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.4 }}
        className=""
      >
        {/* Masters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionRefInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-between h-48"
        >
          <div className="w-1/3">
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              Master of Science in Information Technology
            </div>
            <div className="p-3 text-lg">Arizona State University</div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              2022 - 2024
            </div>
          </div>
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-1/3"></div>
        </motion.div>

        {/* Software Engineer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionRefInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-between h-48 relative"
        >
          <div className="w-1/3"></div>
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-1/3">
            <button
              className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg relative"
              onClick={() => setShowSoftwareEngineerPrompt(true)}
            >
              Software Engineer
            </button>
            <div className="p-3 text-sm italic">
              Developed a custom Employee Management System using JavaScript and
              the MERN stack, gaining experience in CRUD operations, CI/CD
              integration, and API testing.
            </div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              2021 - 2022
            </div>
            <button className="p-1 rounded bg-white text-sm font-semibold w-fit">
              <Link href='https://www.lmsin.com/'>LMS Solutions Pvt. Ltd.</Link>
            </button>
          </div>
        </motion.div>

        {/* Software Developer Intern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionRefInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="flex justify-between h-48"
        >
          <div className="w-1/3">
            <button
              className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg"
              onClick={() => setShowSoftwareDeveloperInternPrompt(true)}
            >
              Software Developer Intern
            </button>
            <div className="p-3 text-sm italic">
              Developed and automated lead capture and nurturing by integrating
              Salesforce and Mailchimp APIs with JavaScript, enhancing front-end
              functionality and data handling.
            </div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              2020 - 2021
            </div>
            <button className="p-1 rounded bg-white text-sm font-semibold w-fit">
              <Link href="https://www.onehash.ai/">OneHash Technologies Pvt. Ltd.</Link>
            </button>
          </div>
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-1/3"></div>
        </motion.div>

        {/* Bachelors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionRefInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="flex justify-between h-48"
        >
          <div className="w-1/3"></div>
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              Bachelor of Technology in Computer Science
            </div>
            <div className="p-3 text-lg">Rajiv Gandhi Technical University</div>
            <div className="p-3 text-red-400 text-sm font-semibold">
              2017 - 2021
            </div>
          </div>
        </motion.div>
      </motion.div>

      {showSoftwareEngineerPrompt && (
        <SoftwareEngineer setShowPrompt={setShowSoftwareEngineerPrompt} />
      )}
      {showSoftwareDeveloperInternPrompt && (
        <SoftwareDeveloperIntern
          setShowPrompt={setShowSoftwareDeveloperInternPrompt}
        />
      )}

      {/* HOBBIES SCROLL SVG */}
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

export default EducationAndExperience;
