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
    img: "https://images.pexels.com/photos/6636906/pexels-photo-6636906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Built a real-time chat application utilizing ReactJS for the frontend, NodeJS and ExpressJS for the backend, and MongoDB for data storage.",
      "Implemented a Model-View-Controller structure to enhance code organization, maintainability, and scalability.",
      "Deployed the application on AWS to provide a robust and accessible platform for users.",
      "Gained hands-on experience with modern web development technologies and cloud infrastructure.",
    ],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Game Genre Analysis",
    desc: "Insightful Database Solution",
    img: "https://images.pexels.com/photos/8259595/pexels-photo-8259595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Designed and implemented a combined MySQL and MongoDB database to efficiently store and analyze structured and unstructured gaming data.",
      "Utilized Apache Kafka to capture and process player behavior data in real-time, enabling rapid insights.",
      "Created interactive Tableau dashboards to present complex player data in a clear and actionable format.",
      "Optimized the database system for handling large volumes of gaming data and ensuring efficient query performance.",
    ],
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Air Quality Monitoring System",
    desc: "IoT Based System",
    img: "https://media.istockphoto.com/id/1863993839/photo/asian-man-using-a-smartphone-scanning-the-weather-over-smog-city-from-pm2-5-dust-view-of.jpg?s=2048x2048&w=is&k=20&c=XY_e225aNxWcgX_5MQw4VjdNrIIfK_DefbYi9hji1I0=",
    details: [
      "Designed and built Arduino-based sensors to collect air quality data from multiple locations.",
      "Created a web platform to visualize real-time air quality data, including interactive charts and graphs.",
      "Processed and analyzed collected air quality data to identify trends and patterns.",
      "Published a research paper detailing the project's methodology, findings, and implications for air quality management.",
    ],
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Let Us Write Online",
    desc: "Blogging Website",
    img: "https://media.istockphoto.com/id/1247171756/photo/working-home-concept.jpg?s=2048x2048&w=is&k=20&c=otZMlecH0NmiMoWumPyuXZOFE6i5oHDMS0EiZ3RedJY=",
    details: [
      "Constructed a blogging platform using MongoDB, Express.js, React.js, and Node.js technologies.",
      "Implemented features like user accounts, comment sections, and content moderation to enhance user experience.",
      "Achieved significant user growth and increased content creation through effective user engagement strategies.",
      "Led the development process, ensuring timely delivery and successful platform launch.",
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
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[350px] mb-4">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                    <button
                      className="ml-2 text-lg text-yellow-400 hover:text-yellow-300"
                      onClick={() => toggleDetails(item.id)}
                    >
                      <FaChevronDown />
                    </button>
                  </p>
                  <motion.div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      expandedItem === item.id ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <ul className="list-disc list-inside space-y-2 px-2 text-base md:text-lg lg:text-xl">
                      {item.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: expandedItem === item.id ? 1 : 0,
                            y: expandedItem === item.id ? 0 : 20,
                          }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
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
