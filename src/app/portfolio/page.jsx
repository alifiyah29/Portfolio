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
      "Developed Chatify a sophisticated real-time chat application employing the MVC (Model-View-Controller) architecture to ensure clear separation of concerns. The Model layer utilizes MongoDB for scalable and flexible data storage, where user profiles and chat messages are organized in distinct collections. The View layer is built using ReactJS, providing a dynamic and responsive user interface with reusable components that streamline the development process and improve maintainability. The Controller layer, powered by NodeJS and ExpressJS, handles server-side logic, user authentication, and message routing, facilitating efficient communication between the front end and the database.",
      "Implemented robust real-time communication features using WebSockets in conjunction with NodeJS and ExpressJS. This integration ensures that users receive instant updates and notifications as messages are sent and received. The application’s real-time capabilities are crucial for maintaining an interactive and engaging user experience, which is essential for any modern chat application.",
      "Successfully deployed the Chatify application on AWS, leveraging cloud services to ensure a robust, scalable, and accessible platform for users. Configured and managed AWS resources to handle varying loads and provide high availability, allowing the application to scale efficiently and maintain performance under different usage scenarios. This experience enhanced my proficiency in cloud infrastructure and deployment strategies.",
      "Gained comprehensive hands-on experience with a suite of modern web development technologies. By building and deploying Chatify, I deepened my understanding of ReactJS for front-end development, NodeJS and ExpressJS for backend services, and MongoDB for data storage. This project not only improved my technical skills but also provided practical insights into integrating these technologies to create a cohesive and scalable web application.",
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
      "Designed and implemented a hybrid database solution combining MySQL and MongoDB to analyze player behavior. MySQL was used to store structured game data such as genres and ratings, enabling efficient querying. MongoDB, integrated with Apache Kafka, captured real-time player activity data, including playtime and preferences, allowing for flexible and scalable data storage.",
      "Utilized Apache Kafka to handle real-time data capture and processing, which facilitated immediate insights into player behavior. This setup allowed for rapid data ingestion and analysis, providing actionable insights through interactive Tableau dashboards that revealed trends such as playtime patterns and genre preferences.",
      "Created interactive Tableau dashboards to transform complex gaming data into actionable insights. The dashboards enabled users to visualize player behavior trends and genre preferences, enhancing the ability to make informed decisions based on real-time data analysis.",
      "The project solidified skills in designing and implementing scalable hybrid database architectures, combining MySQL’s efficiency with MongoDB’s flexibility. It also provided valuable experience in translating complex data into actionable insights through Tableau, essential for data-driven decision-making in the gaming industry.",
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
      "Designed and built an Air Quality Monitoring System using Arduino-based sensors to collect air quality data from multiple locations. The system provided real-time monitoring of air pollution levels, allowing for timely responses to environmental changes.",
      "Developed a web platform to visualize air quality data in real-time, featuring interactive charts and graphs for easy interpretation. The platform enabled users to monitor air quality across different districts and track trends over time.",
      "Analyzed the collected air quality data to identify patterns and trends, contributing to a better understanding of local air quality conditions. This analysis helped in making data-driven decisions for improving environmental health.",
      "Published a research paper detailing the project's methodology, findings, and implications for air quality management. The paper highlighted the project's contribution to understanding and managing air pollution through innovative technology and data analysis.",
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
      "Built Let Us Write Online, a blogging platform utilizing MongoDB, Express.js, React.js, and Node.js to provide a comprehensive solution for content creation and management. The platform includes features for user accounts, content creation, and moderation.",
      "Implemented user accounts and comment sections to enhance user engagement and interaction. The platform supports various content types and allows for community participation through features like comments and moderation.",
      "Achieved significant user growth and increased content creation by developing effective user engagement strategies. These strategies included interactive features and user-friendly design elements to attract and retain users.",
      "Led the development process from inception to launch, ensuring timely delivery and successful platform deployment. This experience demonstrated project management skills and the ability to deliver a fully functional and scalable blogging solution.",
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
                  <h1 className="w-full font-bold text-2xl md:text-3xl lg:text-4xl text-center">
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
                      expandedItem === item.id ? "max-h-[800px]" : "max-h-0"
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
