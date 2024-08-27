"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Chatify",
    desc: "Full-Stack Chat App",
    img: [
      "https://images.pexels.com/photos/3868767/pexels-photo-3868767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6636906/pexels-photo-6636906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "/Chatify.jpg",
    ],
    details: [
      "Built a real-time chat app using MVC architecture with Next.js and Socket.io, handling over 10,000 messages daily.",
      "Implemented responsive UI with server-side rendering for performance and SEO improvements.",
      "Managed user data and chat histories using MongoDB, ensuring scalable data storage.",
      "Deployed on AWS, reducing deployment time by 50%.",
    ],
    url: "https://github.com/alifiyah29/Chatify",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Task-Alchemy",
    desc: "Ticketing App",
    img: [
      "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7163353/pexels-photo-7163353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    details: [
      "Developed a ticketing system with Next.js, ensuring smooth user experience and secure task management.",
      "Utilized Redux for consistent state management and backend API for reliable data handling.",
    ],
    url: "https://github.com/alifiyah29/ToDo-App",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Game Genre Analysis",
    desc: "Insightful Database Solution",
    img: [
      "https://images.pexels.com/photos/7862655/pexels-photo-7862655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7915225/pexels-photo-7915225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "/GameGenre.png",
    ],
    details: [
      "Created a hybrid database combining MySQL and MongoDB for player behavior analysis.",
      "Used Apache Kafka for real-time data processing and Tableau for actionable insights.",
      "Enhanced decision-making through interactive dashboards visualizing player trends.",
    ],
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "AQMS",
    desc: "Air Quality Monitoring System",
    img: [
      "https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "/AirQuality.png",
    ],
    details: [
      "Developed an Arduino-based system to monitor air quality in real-time.",
      "Built a web platform with interactive charts for data visualization.",
      "Analyzed patterns and published findings for air quality management.",
    ],
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Let Us Write Online",
    desc: "Blogging Website",
    img: [
      "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    details: [
      "Built a comprehensive blogging platform using the MERN stack.",
      "Implemented user engagement features, boosting platform growth.",
      "Led development and deployment, ensuring a scalable solution.",
    ],
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleDetails = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div
          className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center bg-cover bg-center relative"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="relative text-white bg-black bg-opacity-60 p-4 rounded-lg">
            Code Creations and Digital Revelations
          </h1>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white items-center px-4 md:px-8 lg:px-12">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
                    {item.img.map((src, index) => (
                      <motion.div
                        key={index}
                        className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src={src}
                          alt=""
                          fill="fill"
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h1 className="w-full font-bold text-2xl md:text-3xl lg:text-4xl text-center">
                      {item.desc}
                    </h1>
                    {(item.id === 1 || item.id === 2) && (
                      <motion.a
                        href={item.url}
                        target="_blank"
                        className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Learn More
                      </motion.a>
                    )}
                  </div>
                  <motion.div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedItem === item.id ? "max-h-[300px]" : "max-h-0"
                    }`}
                  >
                    <div className="mt-4 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg text-sm sm:text-lg">
                      <ul className="list-disc list-inside">
                        {item.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  <motion.button
                    onClick={() => toggleDetails(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-50 rounded-lg text-sm sm:text-lg"
                  >
                    Details <FaChevronDown />
                  </motion.button>
                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-6xl lg:text-8xl">
          Have a project? Let&apos;s turn that dream into a digital reality!
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
