"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Experience = () => {
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <div
      className="flex flex-col gap-12 justify-center pb-48"
      ref={experienceRef}
    >
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        EXPERIENCE
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        className=""
      >
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3 ">
            {/* JOB TITLE - Software Engineer*/}
            <button className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              <Link href="/SoftwareEngineer">Software Engineer</Link>
            </button>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">
              Developed a custom Employee Management System using JavaScript and
              the MERN stack, gaining experience in CRUD operations, CI/CD
              integration, and API testing.{" "}
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              2021 - 2022
            </div>
            {/* JOB COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              LMS Solutions Pvt. Ltd.
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
        {/* EXPERIENCE LIST ITEM */}
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
            {/* JOB TITLE - Software Developer Intern */}
            <button className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              <Link href="/SoftwareDeveloperIntern">Software Developer Intern</Link>
            </button>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">
              Developed and automated lead capture and nurturing by integrating
              Salesforce and Mailchimp APIs with JavaScript, enhancing front-end
              functionality and data handling.{" "}
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              2020 - 2021{" "}
            </div>
            {/* JOB COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              OneHash Technologies Pvt. Ltd
            </div>
          </div>
        </div>
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3 "></div>
          {/* CENTER */}
          <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative"></div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 "></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
