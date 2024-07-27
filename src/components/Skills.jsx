"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillsData = {
  technical: [
    {
      category: "Languages/Markup",
      skills: "JavaScript, Python, XML, Typescript, C, C++, Java, Visual Basic",
    },
    {
      category: "Cloud Technologies",
      skills: "Azure, AWS, Kubernetes",
    },
    {
      category: " Web",
      skills:
        "HTML, CSS, Node.js, React.js, Express.js, RESTful APIs, JSON, Next.js, AngularJS",
    },
    {
      category: "Data Warehousing/Management",
      skills: "Redshift, BigQuery, Snowflake, ETL, ORM",
    },
    {
      category: "Databases",
      skills:
        "MongoDB, MySQL, Capella, Apache Spark, PostgreSQL, DynamoDB, S3, Oracle, Cassandra",
    },
    {
      category: "Scripting",
      skills: "jQuery, Shell Scripting",
    },
    {
      category: "Operating Systems",
      skills: "Windows, Linux/Unix",
    },
    {
      category: "Development Tools",
      skills: "Visual Studio Code, AWS Lambda",
    },
    {
      category: "Microsoft office Suite",
      skills: "Word, Excel, PowerPoint, Outlook",
    },
    {
      category: "Tools/Framework",
      skills:
        "Frappe, Git, GitHub, Databricks, Tableau, Kafka, Web2Py, WordPress, Drupal, Django, Vue.js, Jira, Jenkins",
    },
  ],
  soft: [
    "Leadership",
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Adaptability",
  ],
};

const Skills = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const [hoveredSkill, setHoveredSkill] = useState();
  return (
    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
      {/* SKILL TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        SKILLS
      </motion.h1>
      {/* TECHNICAL SKILLS */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        className="flex flex-col gap-4"
      >
        <h2 className="font-bold text-xl">Technical Skills</h2>
        <div className="flex gap-4 flex-wrap">
          {skillsData.technical.map((item, index) => (
            <div
              key={index}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black "
              onMouseEnter={() => setHoveredSkill(item)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {item.category}
            </div>
          ))}
        </div>
        {hoveredSkill && (
          <div className="rounded p-2 text-sm cursor-pointer bg-white text-black w-28">
            <p>{hoveredSkill.skills}</p>
          </div>
        )}
      </motion.div>
      {/* SOFT SKILLS */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        className="flex flex-col gap-4"
      >
        <h2 className="font-bold text-xl">Soft Skills</h2>
        <div className="flex gap-4 flex-wrap">
          {skillsData.soft.map((skill, index) => (
            <div
              key={index}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
      {/* SKILL SCROLL SVG */}
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

export default Skills;
