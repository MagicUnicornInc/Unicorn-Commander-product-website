import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaDatabase, FaNetworkWired, FaBrain, FaChartLine, FaLock } from 'react-icons/fa';

export const CenterDeep = ({ onClose }) => {
  const features = [
    {
      icon: FaBrain,
      title: "Think Like a Team",
      description: "AI squad analyzing, organizing, and delivering actionable insights in real-time"
    },
    {
      icon: FaSearch,
      title: "Pro Search Mode",
      description: "Layered queries for step-by-step insights, breaking down complex questions into manageable parts"
    },
    {
      icon: FaDatabase,
      title: "Unified Knowledge Hub",
      description: "Seamlessly combine web crawling results with internal document mining for comprehensive insights"
    },
    {
      icon: FaNetworkWired,
      title: "Smart Threads",
      description: "Organized searches with maintained context, connecting related information automatically"
    },
    {
      icon: FaChartLine,
      title: "Answer the Unanswered",
      description: "Break down complex questions and connect the dots across multiple data sources"
    },
    {
      icon: FaLock,
      title: "Secure & Private",
      description: "Enterprise-grade security with private data handling and access controls"
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
            🕵️‍♂️ CenterDeep
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-xl text-gray-300 mb-8">
          Dig Deeper. Think Smarter. Act Faster. CenterDeep transforms how you search, analyze, and understand information.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-500/10 rounded-lg p-6"
            >
              <feature.icon className="text-2xl text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-purple-500/10 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            Use Cases
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-gray-300">
              <span className="text-purple-400 font-bold">Research Teams</span>
              <p className="text-sm text-gray-400">Accelerate research with connected insights</p>
            </div>
            <div className="text-gray-300">
              <span className="text-purple-400 font-bold">Data Analysts</span>
              <p className="text-sm text-gray-400">Uncover hidden patterns and connections</p>
            </div>
            <div className="text-gray-300">
              <span className="text-purple-400 font-bold">Knowledge Workers</span>
              <p className="text-sm text-gray-400">Find answers faster, work smarter</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
