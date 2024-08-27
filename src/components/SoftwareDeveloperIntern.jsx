import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SoftwareDeveloperIntern = ({ setShowPrompt }) => {
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
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="CRM and ERP"
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
                src="https://images.pexels.com/photos/6592676/pexels-photo-6592676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Sales Pipeline"
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
              Software Developer Intern, OneHash Technologies Pvt. Ltd., Indore, MP, India
            </motion.h2>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>Integration of Customer Feedback Portal into OneHash CRM:</strong> 
              I collaborated with the frontend development team to integrate a React.js-based feedback portal directly into the OneHash CRM. This portal allowed users to submit feedback and rate services, significantly improving user engagement within the CRM by 40%. My work involved:
              <ul className="list-disc list-inside mt-2">
                <li><strong>React.js Development:</strong> Utilized React Hooks and the react-responsive library to create a dynamic and responsive user interface. The use of React Hooks enabled efficient state management and component reusability, while the react-responsive library ensured that the portal was fully optimized for various screen sizes, enhancing overall user experience.</li>
                <li><strong>API Integration:</strong> Implemented seamless API integration using Axios to connect the frontend with backend services, facilitating real-time feedback submissions and data retrieval. This integration ensured smooth data flow and improved the responsiveness of the portal, contributing to its effectiveness.</li>
              </ul>
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <strong>Design and Implementation of Role-Based Access Control (RBAC) System:</strong> 
              I played a key role in the design and implementation of a React.js and React Router-powered RBAC system within the CRM. This system provided secure and tailored access to different user roles (admins, customers, staff), ensuring that each user could only access the functionalities relevant to their role. This enhanced the security and usability of the CRM, making it more adaptable to the needs of different users.
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <strong>Mobile Performance Optimization:</strong> 
              Worked on optimizing the feedback portal for mobile devices by enhancing image assets and implementing performance optimizations, such as code splitting and lazy loading. These efforts resulted in a 30% reduction in load times, ensuring smooth accessibility and a better user experience on mobile platforms.
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <strong>Technologies Used:</strong> JavaScript, React.js, React Router, Axios, Frappe Framework, MariaDB, Salesforce, AWS.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareDeveloperIntern;
