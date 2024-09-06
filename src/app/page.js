"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen relative"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        className="object-cover"
        style={{ filter: "blur(5px)" }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative min-h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12 overflow-auto">
        {/* IMAGE CONTAINER */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start mb-8 lg:mb-0"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/coverPage.png"
              alt="My Picture"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center text-white">
          {/* TITLE */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Innovating Solutions, Empowering Growth.
          </motion.h1>

          {/* DESC */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Welcome to my digital playground! I am Alifiyah Shahid, a software
            engineer and full-stack wizard. From taming wild code to crafting
            dynamic interfaces, I bring both skill and a touch of magic to every
            project. Dive into my portfolio to see my spellbinding work and let
            us conjure up something amazing together!
          </motion.p>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              className="p-4 rounded-lg ring-1 ring-white text-white hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/portfolio">My Work</Link>
            </motion.button>
            <motion.button
              className="p-4 rounded-lg ring-1 ring-white text-white hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">Contact Me</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
