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
    img: [
      "https://images.pexels.com/photos/7862655/pexels-photo-7862655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7915225/pexels-photo-7915225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "/GameGenre.png",
    ],
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
    img: [
      "https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "/AirQuality.png",
    ],
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
    img: [
      "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
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
                <div className="flex flex-col gap-8 text-white items-center">
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
                          layout="fill"
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <h1 className="w-full md:w-3/4 lg:w-1/2 xl:w-1/2 font-bold text-2xl md:text-3xl lg:text-4xl">
                    {item.desc}
                    <button
                      className="ml-2 text-lg text-yellow-400 hover:text-yellow-300"
                      onClick={() => toggleDetails(item.id)}
                    >
                      <FaChevronDown />
                    </button>
                  </h1>
                  <motion.div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      expandedItem === item.id ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <ul className="list-disc list-inside space-y-2 px-4 md:px-8 lg:px-12 text-left text-lg md:text-xl lg:text-2xl">
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
