"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Ach1",
      desc: "Developed a secure, real-time chat app using ReactJS (client-side), NodeJS & ExpressJS (server-side), and MongoDB (database) for 100+ concurrent users. It facilitates 20% faster information exchange and 30% faster messaging than similar apps, fostering seamless communication.",
      img: "https://images.pexels.com/photos/6636906/pexels-photo-6636906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/Chatify",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Ach2",
      desc: "Built a hybrid database solution using MySQL and MongoDB to analyze player behavior. MySQL handled core game data for efficient querying, while MongoDB, integrated with Apache Kafka, captured real-time player activity. Tableau dashboards transformed this data into actionable insights on playtime trends and genre preferences.",
      img: "https://images.pexels.com/photos/8259595/pexels-photo-8259595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/GameGenreAnalysis",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Ach3",
      desc: "Innovated an IoT system using Arduino to monitor air quality across 5 districts, providing real-time data for environmental research. This project's contributions led to a published research paper and highlighted expertise in leveraging technology for environmental monitoring.",
      img: "https://media.istockphoto.com/id/1863993839/photo/asian-man-using-a-smartphone-scanning-the-weather-over-smog-city-from-pm2-5-dust-view-of.jpg?s=2048x2048&w=is&k=20&c=XY_e225aNxWcgX_5MQw4VjdNrIIfK_DefbYi9hji1I0=",
      link: "/AirQualityMonitoringSystem",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Ach4",
      desc: "•	Led the development of a MERN-based blogging platform attracting 1,000+ active users within 6 months. Implemented custom features like user accounts, comment sections, and content moderation tools, boosting user engagement by 30% and content creation by 45%. This user-centric design fostered a vibrant online community for writers and readers, exceeding initial user growth targets by 20%.",
      img: "https://media.istockphoto.com/id/1247171756/photo/working-home-concept.jpg?s=2048x2048&w=is&k=20&c=otZMlecH0NmiMoWumPyuXZOFE6i5oHDMS0EiZ3RedJY=",
      link: "/LetUsWriteOnline",
    },
  ];

const Achievements = () => {
  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center bg-gray-100"
      initial={{ y: "100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex w-full h-full">
        {items.map((item) => (
          <div
            className={`w-1/4 h-full flex flex-col items-center justify-center bg-gradient-to-r ${item.color}`}
            key={item.id}
          >
            <h1 className="text-xl font-bold text-center md:text-4xl lg:text-6xl xl:text-8xl text-white mb-4">
              {item.title}
            </h1>
            <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mb-4">
              <Image src={item.img} alt="" fill />
            </div>
            <p className="text-center text-white text-sm md:text-lg lg:text-xl xl:text-2xl px-4">
              {item.desc}
            </p>
            <Link href={item.link}>
              <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold mt-4 rounded">
                Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
