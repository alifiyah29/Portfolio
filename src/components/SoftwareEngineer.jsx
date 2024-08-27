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
                src="https://images.pexels.com/photos/7688361/pexels-photo-7688361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              Software Developer, LMS Solutions Pvt. Ltd., India
            </motion.h2>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>Oct 2021 – Jun 2022</strong>
            </motion.p>
            <motion.div
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>During my tenure at LMS Solutions Pvt. Ltd., I played a pivotal role in developing a comprehensive Employee Management System (EMS) designed to manage and streamline the HR processes for over 500 users. My responsibilities included:</p>

              <ul className="list-disc list-inside">
                <li>
                  <strong>Employee Management System Development:</strong> 
                  I was instrumental in building the EMS from the ground up, leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js) to create a robust and scalable solution. My contributions included:
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      <strong>Frontend Development:</strong> 
                      Designed and developed a dynamic, responsive user interface using React.js. I employed advanced optimization techniques such as code splitting, lazy loading, and component-level caching, which collectively improved user engagement and reduced page load times by 30%. These enhancements ensured a smooth and efficient user experience, even as the application scaled to accommodate hundreds of users.
                    </li>
                    <li>
                      <strong>Backend Functionality:</strong> 
                      Enhanced backend functionality using Express.js and MongoDB, ensuring that the system was not only scalable but also optimized for high performance. This involved designing efficient data schemas in MongoDB, implementing RESTful APIs with Express.js, and ensuring secure and reliable data transactions.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Continuous Integration/Continuous Deployment (CI/CD):</strong> 
                  Implemented CI/CD pipelines using Jenkins and GitHub Actions to automate the deployment process. This automation reduced manual deployment efforts by 97%, allowing for faster, more reliable updates and deployments. The pipelines included automated testing, code quality checks, and seamless deployment processes.
                </li>

                <li>
                  <strong>API Testing:</strong> 
                  Conducted comprehensive API testing using Postman to ensure system reliability and accurate response handling for all user interactions. This testing was crucial in identifying and resolving potential issues before they could impact the end-users, leading to a more stable and reliable system.
                </li>

                <li>
                  <strong>Technologies Used:</strong> 
                  Node.js, React.js, MongoDB, Express.js, HTML, CSS, Jenkins, GitHub, Postman
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareEngineer;
