import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCube, FaWrench, FaRocket, FaCloud, FaTerminal } from 'react-icons/fa';

export const MagiCode = ({ onClose }) => {
  const features = [
    {
      icon: FaCode,
      title: "AI Coding Assistant",
      description: "Multiple AI model support (OpenAI, DeepSeek, HuggingFace) for intelligent code completion and suggestions"
    },
    {
      icon: FaCube,
      title: "Full-Stack Workflow",
      description: "Complete browser-based development environment for seamless coding experience"
    },
    {
      icon: FaWrench,
      title: "Customizable APIs",
      description: "Vercel AI SDK integration for flexible and powerful API development"
    },
    {
      icon: FaRocket,
      title: "One-Click Deployment",
      description: "Deploy to Netlify, Vercel, or local servers with a single command"
    },
    {
      icon: FaCloud,
      title: "Local & Cloud Ready",
      description: "Docker support and cloud scaling capabilities for any deployment scenario"
    },
    {
      icon: FaTerminal,
      title: "Advanced Tools",
      description: "Built-in terminal, file syncing, and version control for professional development"
    }
  ];

  const targetUsers = [
    {
      icon: "🎯",
      title: "Developers & Engineers",
      description: "Rapid prototyping and automation"
    },
    {
      icon: "📚",
      title: "Educators & Students",
      description: "Interactive coding education"
    },
    {
      icon: "🏢",
      title: "Businesses",
      description: "Internal tools and AI workflow scaling"
    },
    {
      icon: "💡",
      title: "Entrepreneurs",
      description: "Quick MVP creation"
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
            💻 MagiCode
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-xl text-gray-300 mb-8">
          Build Smarter. Code Faster. Automate Everything. Transform your development workflow with AI-powered tools.
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
            Who It's For
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {targetUsers.map((user, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{user.icon}</div>
                <div className="text-purple-400 font-bold">{user.title}</div>
                <p className="text-sm text-gray-400">{user.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
