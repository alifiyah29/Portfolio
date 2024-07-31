// components/Achievements.js
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Achievements = ({ setShowAchievements }) => {
  const achievements = [
    {
      title: 'Participated in Various Motorbike Rallies',
      description: 'I actively participated in numerous motorbike rallies, demonstrating my passion for adventure and dedication to the biking community. These events were great opportunities to enhance my riding skills and meet fellow enthusiasts.',
      img: 'https://images.pexels.com/photos/2885429/pexels-photo-2885429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Chairman\'s Scholarship Award for Full Attendance',
      description: 'Awarded the Chairman\'s Scholarship for maintaining perfect attendance throughout the academic year. This achievement highlights my commitment, discipline, and reliability in my educational pursuits.',
      img: 'https://images.pexels.com/photos/6532373/pexels-photo-6532373.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Top Event Organizer in Tech Fest',
      description: 'Won the award for the best event organizer at the university\'s tech fest. Successfully managed and coordinated various technical events, showcasing my organizational and leadership skills.',
      img: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Best Intern Award at LMS',
      description: 'Received the Best Intern Award at LMS for exceptional performance and contributions during my internship. This recognition reflects my ability to adapt, learn, and excel in a professional environment.',
      img: 'https://images.pexels.com/photos/15155549/pexels-photo-15155549/free-photo-of-a-woman-holding-a-plaque-in-the-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "-100vh" }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
    >
      <div className="bg-white p-4 sm:p-8 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 relative overflow-y-auto max-h-screen">
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setShowAchievements(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">My Achievements</h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={achievement.img}
                alt={achievement.title}
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold">{achievement.title}</p>
                <p className="text-md">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
