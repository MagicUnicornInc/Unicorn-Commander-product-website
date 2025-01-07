import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaLock, FaBolt, FaComments, FaCogs } from 'react-icons/fa';

export const CognitiveCompanion = ({ onClose }) => {
  const features = [
    {
      icon: FaBrain,
      title: "AI-Powered Knowledge Retrieval",
      subtitle: "Answers, Not Links",
      description: "Find insights instantly from PDFs, spreadsheets, and code using advanced Retrieval-Augmented Generation (RAG)"
    },
    {
      icon: FaUsers,
      title: "Collaborate with Your Squad",
      subtitle: "Team Up with AI + Humans",
      description: "Assign tasks, share research, and brainstorm ideas with AI agents"
    },
    {
      icon: FaLock,
      title: "Privacy You Can Trust",
      subtitle: "No Data Leaves Your Castle",
      description: "Local-first, offline-ready, and fully secure"
    },
    {
      icon: FaBolt,
      title: "Smarter Workflows, Less Effort",
      subtitle: "Delegate. Automate. Relax",
      description: "Automate repetitive tasks, summarize documents, extract key insights"
    },
    {
      icon: FaComments,
      title: "Talk to Your Data",
      subtitle: "Turn Files into Conversations",
      description: "Chat with documents and get answers fast"
    },
    {
      icon: FaCogs,
      title: "Flexible & Scalable",
      subtitle: "Works Where You Work",
      description: "Cross-platform compatibility for Mac, Windows, and Linux"
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
            🧠 Cognitive Companion
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-xl text-gray-300 mb-8">
          Your Personal AI Squad—Working Smarter, Together. Turn documents into conversations, insights into actions, and ideas into reality—seamlessly combining AI intelligence with human creativity.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
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
              <div className="text-purple-300 text-sm mb-2">
                {feature.subtitle}
              </div>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-purple-500/10 rounded-lg">
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-gray-300 mb-4">
            Join the waitlist to be among the first to experience the future of AI-powered collaboration.
          </p>
          <button className="btn btn-primary">
            Join Waitlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};
