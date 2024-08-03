// app/page.js or wherever your Homepage component is defined
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Achievements from "@/components/Achievements";

const Homepage = () => {
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-scroll">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/coverPage.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Innovating Solutions, Empowering Growth.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital playground! I am Alifiyah Shahid, a software
            engineer and full-stack wizard. From taming wild code to crafting dynamic interfaces, I
            bring both skill and a touch of magic to every project. Dive into my
            portfolio to see my spellbinding work and let us conjure up
            something amazing together!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
              onClick={() => setShowAchievements(true)}
            >
              My Achievements
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
      {showAchievements && (
        <Achievements setShowAchievements={setShowAchievements} />
      )}
    </motion.div>
  );
};

export default Homepage;