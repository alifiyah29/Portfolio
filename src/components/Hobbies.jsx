"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const HobbiesData = [
  {
    title: "Motor-Bike Riding",
    imgSrc: "https://images.pexels.com/photos/1715183/pexels-photo-1715183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    width: 750,
    height: 1260
  },
  {
    title: "Reading",
    imgSrc: "https://images.pexels.com/photos/5427199/pexels-photo-5427199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    width: 750,
    height: 1260
  },
  {
    title: "Hiking",
    imgSrc: "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    width: 750,
    height: 1260
  }
];

const Hobbies = () => {
  const hobbyRef = useRef();
  const isHobbyRefInView = useInView(hobbyRef, { margin: "-100px" });

  return (
    <div className="flex flex-col gap-12" ref={hobbyRef}>
      {/* HOBBY TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isHobbyRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl text-left px-10"
      >
        HOBBIES
      </motion.h1>
      {/* HOBBIES IMAGES */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isHobbyRefInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="flex gap-6 flex-wrap px-10"  // Ensure this padding aligns with title
      >
        {HobbiesData.map((hobby, index) => (
          <motion.div
            key={index}
            className="relative w-64 h-96 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={hobby.imgSrc}
              alt={hobby.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
              {hobby.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hobbies;
