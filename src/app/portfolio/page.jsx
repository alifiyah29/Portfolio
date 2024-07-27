"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Chatify - Full-Stack Chat App",
    desc: "Developed a secure, real-time chat app using ReactJS (client-side), NodeJS & ExpressJS (server-side), and MongoDB (database) for 100+ concurrent users. It facilitates 20% faster information exchange and 30% faster messaging than similar apps, fostering seamless communication.",
    img: "https://images.pexels.com/photos/6636906/pexels-photo-6636906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/Chatify",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Game Genre Analysis - Insightful Database Solution",
    desc: "Built a hybrid database solution using MySQL and MongoDB to analyze player behavior. MySQL handled core game data for efficient querying, while MongoDB, integrated with Apache Kafka, captured real-time player activity. Tableau dashboards transformed this data into actionable insights on playtime trends and genre preferences.",
    img: "https://images.pexels.com/photos/8259595/pexels-photo-8259595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/GameGenreAnalysis",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Air Quality Monitoring System —IoT Based System",
    desc: "Innovated an IoT system using Arduino to monitor air quality across 5 districts, providing real-time data for environmental research. This project's contributions led to a published research paper and highlighted expertise in leveraging technology for environmental monitoring.",
    img: "https://media.istockphoto.com/id/1863993839/photo/asian-man-using-a-smartphone-scanning-the-weather-over-smog-city-from-pm2-5-dust-view-of.jpg?s=2048x2048&w=is&k=20&c=XY_e225aNxWcgX_5MQw4VjdNrIIfK_DefbYi9hji1I0=",
    link: "/AirQualityMonitoringSystem",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Let Us Write Online — Blogging Website",
    desc: "•	Led the development of a MERN-based blogging platform attracting 1,000+ active users within 6 months. Implemented custom features like user accounts, comment sections, and content moderation tools, boosting user engagement by 30% and content creation by 45%. This user-centric design fostered a vibrant online community for writers and readers, exceeding initial user growth targets by 20%.",
    img: "https://media.istockphoto.com/id/1247171756/photo/working-home-concept.jpg?s=2048x2048&w=is&k=20&c=otZMlecH0NmiMoWumPyuXZOFE6i5oHDMS0EiZ3RedJY=",
    link: "/LetUsWriteOnline",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Code Creations and Digital Revelations
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      Detail
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">
          Have a project? Let us turn that dream into a digital reality!
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
              Full-Stack Dev & Cloud Enthusiast
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
