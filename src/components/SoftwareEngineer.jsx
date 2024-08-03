import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SoftwareEngineer = ({ setShowPrompt }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg relative max-w-screen-xl w-full max-h-[70vh] overflow-auto">
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setShowPrompt(false)}
        >
          &times;
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 flex flex-col items-center md:items-start mb-4 md:mb-0">
            <motion.div
              className="w-full mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Employee Management System"
                layout="responsive"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Additional Image"
                layout="responsive"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center md:ml-4">
            <motion.h2
              className="text-lg md:text-xl lg:text-2xl font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Software Engineer, LMS Solutions Pvt. Ltd., Indore, MP, India
            </motion.h2>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>Oct’21 – Jun’22</strong>
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <strong>
                Developed Employee Management System Functionalities (JavaScript
                & MERN Stack):
              </strong>{" "}
              At LMS Solutions, I contributed to building a custom Employee
              Management System (EMS) using JavaScript. As the primary front-end
              language, JavaScript enabled me to create the user interface and
              handle functionalities like data entry forms and user
              interactions. I focused on implementing core functionalities for
              managing employee information (adding, viewing, updating) for over
              500 users. This experience provided practical knowledge of CRUD
              operations (Create, Read, Update, Delete) within a web development
              project.
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <strong>
                Learned and Applied MERN Stack Technologies and CI/CD
                Integration:
              </strong>{" "}
              Collaborating with senior developers, I solidified my skills in
              both front-end (JavaScript) and back-end development (MERN stack:
              MongoDB, ExpressJS). I played a key role in building a custom
              Employee Management System using JavaScript for the user interface
              and CRUD operations. Furthermore, I gained experience with
              MongoDB&apos;s scalability for efficient data management and
              ExpressJS for server-side logic. This project not only
              strengthened my full-stack development capabilities but also
              introduced me to CI/CD pipelines. By leveraging CI/CD tools, I
              learned to automate code building, testing, and deployment,
              ensuring a streamlined and reliable delivery process for the
              Employee Management System.
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <strong>
                Enhanced Problem-Solving through Collaboration and API Testing:
              </strong>{" "}
              Working alongside experienced developers fostered my
              problem-solving skills and ability to collaborate effectively in a
              software development environment. Furthermore, I gained hands-on
              experience with API testing using Postman. This involved sending
              test requests that simulated user interactions with the EMS
              backend (built with the MERN stack) using Postman. By verifying
              the responses from the backend, I contributed to ensuring the
              system functioned correctly.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareEngineer;
