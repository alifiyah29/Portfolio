"use client";

import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "@/components/Brain";
import EducationAndExperience from "@/components/EducationAndExperience";
import Hobbies from "@/components/Hobbies";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Signature from "@/components/Signature";

const AboutPage = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-16 md:gap-20 lg:gap-24 xl:gap-28 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-8 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/myPic.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Alifiyah Shahid is a versatile software engineer and full-stack
              developer with a Master&apos;s in Information Technology from
              Arizona State University. Over the past two years, she has turned
              complex challenges into streamlined solutions, from developing
              custom Employee Management Systems at LMS Solutions to enhancing
              lead capture at OneHash Technologies. Her passion for building
              robust applications and solving intricate problems is evident in
              her innovative approach and dedication to continuous improvement.
              When not immersed in code, Alifiyah is always brainstorming the
              next groundbreaking project.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Turning ideas into digital magic, one line of code at a time.
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <Signature />

            {/* ACHIEVEMENTS BUTTON */}
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black transition duration-300"
              onClick={() => setShowAchievements(true)}
            >
              View My Achievements
            </button>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <Skills />

          {/* EDUCATION AND EXPERIENCE */}
          <div className="mb-4">
            <EducationAndExperience />
          </div>
          {/* HOBBIES */}
          <div className="mb-4">
            <Hobbies />
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
      {/* ACHIEVEMENTS MODAL */}
      {showAchievements && (
        <Achievements setShowAchievements={setShowAchievements} />
      )}
    </motion.div>
  );
};

export default AboutPage;