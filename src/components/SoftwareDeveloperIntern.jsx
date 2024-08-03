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
              Software Developer Intern, OneHash Technologies Pvt. Ltd., Indore,
              MP, India
            </motion.h2>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>
                Enhanced Lead Capture and Nurturing with JavaScript & APIs
                (Front-End Development):
              </strong>{" "}
              Designed and developed custom user interfaces (UIs) with
              JavaScript to seamlessly integrate lead generators like Salesforce
              Leads and Mailchimp into OneHash&aposs CRM. I leveraged these APIs
              to understand data structures and establish a smooth flow of lead
              information between platforms. This streamlined lead capture for
              clients, eliminating the need to switch platforms, and automated
              data transfer to OneHash&aposs database, improving lead nurturing
              efficiency.
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <strong>Automated Data Transfer with JavaScript:</strong>{" "}
              Implemented functionalities within the custom UI to automatically
              transfer captured lead data to OneHash&aposs secure database using
              JavaScript. This involved writing code to handle data manipulation
              and API calls to the database. By automating data transfer, I
              eliminated manual entry for clients and improved the lead
              nurturing process. This solidified my front-end development
              skills, requiring proficiency in data handling and API
              interaction.
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <strong>
                Expanded Technical Understanding through API Integration:
              </strong>{" "}
              Through in-depth work with lead generation APIs like Salesforce
              Leads and Mailchimp, I gained valuable experience in understanding
              data structures and communication protocols used by external
              applications. This broadened my technical knowledge beyond UI
              development and prepared me for future integrations with various
              external services.
            </motion.p>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <strong>Skills Acquired:</strong> JavaScript, Salesforce API,
              Mailchimp API, UI/UX Design, CRM Integration.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareDeveloperIntern;