import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaServer, FaShieldAlt, FaCogs, FaRobot, FaUserTie } from 'react-icons/fa';

export const CRC = ({ onClose }) => {
  const commandStaff = [
    {
      title: "Captain Echo Mirage",
      role: "Embedding Server Management",
      description: "Manages and optimizes embedding operations"
    },
    {
      title: "Commander Lexis Quill",
      role: "LLM Server Operations & Optimization",
      description: "Oversees language model deployment and performance"
    },
    {
      title: "Captain Vault Keeper",
      role: "Database Oversight and Security",
      description: "Ensures data integrity and security"
    },
    {
      title: "Navigator Flux Gate",
      role: "Reverse Proxy Management",
      description: "Handles traffic routing and load balancing"
    },
    {
      title: "Lieutenant Tick Tock",
      role: "Task Scheduling and Automation",
      description: "Manages automated processes and scheduling"
    },
    {
      title: "Agent Shadow Fang",
      role: "Security Monitoring and Intrusion Defense",
      description: "Protects against threats and maintains security"
    }
  ];

  const benefits = [
    {
      icon: FaMedal,
      title: "Exclusive Integration",
      description: "Seamless integration with Unicorn Commander suite"
    },
    {
      icon: FaCogs,
      title: "Modular Customization",
      description: "Adapt and extend functionality as needed"
    },
    {
      icon: FaRobot,
      title: "AI-Driven Control",
      description: "Intelligent automation and decision-making"
    },
    {
      icon: FaUserTie,
      title: "Enterprise-Ready",
      description: "Built for professional deployment"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto"
    >
      <div className="bg-gray-800 rounded-xl max-w-4xl w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-purple-400">
            🎖️ CRC (Computer Root Command)
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-xl text-gray-300 mb-8">
          Take Command of Your Server—Meet The Colonel and His Elite Command Staff!
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            Command Staff
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {commandStaff.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-purple-500/10 rounded-lg p-4"
              >
                <h4 className="text-lg font-bold text-purple-400">
                  {staff.title}
                </h4>
                <div className="text-purple-300 text-sm mb-2">{staff.role}</div>
                <p className="text-gray-400 text-sm">{staff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-purple-500/10 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            Key Benefits
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="text-2xl text-purple-400 mb-2 mx-auto" />
                <div className="text-purple-400 font-bold">{benefit.title}</div>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="btn btn-primary">
            Request Early Access
          </button>
        </div>
      </div>
    </motion.div>
  );
};
