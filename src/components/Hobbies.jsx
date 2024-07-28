"use client";

import { useRef} from "react";
import { motion, useInView } from "framer-motion";

const HobbiesData = {
  hobbies: [
    "Motor-Bike Riding",
    "Reading",
    "Hiking",
  ],
};

const Hobbies = () => {
  const hobbyRef = useRef();
  const isHobbyRefInView = useInView(hobbyRef, { margin: "-100px" });
  return (
    <div className="flex flex-col gap-12 justify-center" ref={hobbyRef}>
      {/* HOBBY TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isHobbyRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        Hobbies
      </motion.h1>
      {/* HOBBIES LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isHobbyRefInView ? { x: 0 } : {}}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4 flex-wrap">
          {HobbiesData.hobbies.map((hobby, index) => (
            <div
              key={index}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
            >
              {hobby}
            </div>
          ))}
        </div>
      </motion.div>
      {/* ACHIEVEMENTS SCROLL SVG */}
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

export default Hobbies;