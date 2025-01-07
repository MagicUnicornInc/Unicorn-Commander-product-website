import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaCogs, FaCode, FaRocket, FaUsers, FaBook } from 'react-icons/fa';

export const Lite = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-gray-800 p-8 rounded-xl max-w-4xl w-full overflow-y-auto max-h-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-purple-400">
            <FaLaptop className="inline-block mr-2" />
            Unicorn Commander Lite
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-300 mb-8">
          Unicorn Commander Lite is the perfect AI assistant for individuals and small teams looking to boost productivity and streamline their workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaCogs className="inline-block mr-2" />
              Core Features
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Personalized Automation:</span>
                  <span className="text-gray-400"> Automate repetitive tasks across your favorite applications with easy-to-create workflows.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Smart Suggestions:</span>
                  <span className="text-gray-400"> Get intelligent recommendations for optimizing your workflows and improving efficiency.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Contextual Awareness:</span>
                  <span className="text-gray-400"> AI understands your work patterns and provides relevant assistance when you need it.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Cross-Platform Compatibility:</span>
                  <span className="text-gray-400"> Works seamlessly across Windows, macOS, and Linux environments.</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaCode className="inline-block mr-2" />
              Developer-Friendly
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">API Integration:</span>
                  <span className="text-gray-400"> Connect to your favorite services and APIs to extend automation capabilities.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Scripting Support:</span>
                  <span className="text-gray-400"> Create custom scripts in Python or JavaScript to tailor automation to your exact needs.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Open Source Extensibility:</span>
                  <span className="text-gray-400"> Contribute to the growing ecosystem of plugins and extensions.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaRocket className="inline-block mr-2" />
              Performance & Efficiency
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Lightweight Design:</span>
                  <span className="text-gray-400"> Minimal resource consumption ensures smooth performance even on older hardware.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Optimized Algorithms:</span>
                  <span className="text-gray-400"> AI-powered optimizations deliver fast and efficient automation.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Offline Capabilities:</span>
                  <span className="text-gray-400"> Continue working even without an internet connection.</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaUsers className="inline-block mr-2" />
              Community & Support
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Active Community:</span>
                  <span className="text-gray-400"> Join a vibrant community of users and developers.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Comprehensive Documentation:</span>
                  <span className="text-gray-400"> Access detailed guides, tutorials, and API references.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Regular Updates:</span>
                  <span className="text-gray-400"> Benefit from continuous improvements and new features.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            <FaBook className="inline-block mr-2" />
            Getting Started
          </h3>
          <p className="text-gray-300">
            Join the waitlist today to be among the first to experience Unicorn Commander Lite. Early adopters will receive exclusive benefits and priority access.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
