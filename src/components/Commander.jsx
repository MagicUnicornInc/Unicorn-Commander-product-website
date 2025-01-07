import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCogs, FaBrain, FaShieldAlt, FaCloud, FaCode, FaUsers, FaChartLine } from 'react-icons/fa';

export const Commander = ({ onClose }) => {
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
            <FaRocket className="inline-block mr-2" />
            Unicorn Commander
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-300 mb-8">
          Unicorn Commander is the ultimate AI command center designed for enterprises and power users who demand unparalleled control, performance, and security.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaCogs className="inline-block mr-2" />
              Key Features
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">AI Orchestration:</span>
                  <span className="text-gray-400"> Seamlessly integrate and manage multiple AI models, including GPT-4, LLaMA, and Stable Diffusion.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Workflow Automation:</span>
                  <span className="text-gray-400"> Design and deploy complex automation workflows with an intuitive visual interface.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Real-time Monitoring:</span>
                  <span className="text-gray-400"> Track performance, resource utilization, and AI behavior with live dashboards.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Customizable AI Agents:</span>
                  <span className="text-gray-400"> Build and train specialized AI agents tailored to your specific needs.</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaBrain className="inline-block mr-2" />
              Neural Engine
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Advanced Algorithms:</span>
                  <span className="text-gray-400"> Leverage cutting-edge deep learning, reinforcement learning, and evolutionary algorithms.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Adaptive Learning:</span>
                  <span className="text-gray-400"> AI models continuously learn and improve from data and user interactions.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Multi-modal Processing:</span>
                  <span className="text-gray-400"> Process and analyze text, images, audio, and video data seamlessly.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaShieldAlt className="inline-block mr-2" />
              Enterprise-Grade Security
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">End-to-End Encryption:</span>
                  <span className="text-gray-400"> Protect sensitive data with military-grade encryption protocols.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Role-Based Access Control:</span>
                  <span className="text-gray-400"> Manage user permissions and access levels with granular control.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Audit Trails:</span>
                  <span className="text-gray-400"> Maintain comprehensive logs of all system activities for compliance and security analysis.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Regular Security Audits:</span>
                  <span className="text-gray-400"> Undergo independent security assessments to ensure the highest standards.</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaCloud className="inline-block mr-2" />
              Scalable Infrastructure
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">On-Premise or Cloud:</span>
                  <span className="text-gray-400"> Deploy Unicorn Commander on your own infrastructure or leverage our secure cloud environment.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Auto-Scaling:</span>
                  <span className="text-gray-400"> Automatically adjust resources based on demand to ensure optimal performance.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">High Availability:</span>
                  <span className="text-gray-400"> Built-in redundancy and failover mechanisms ensure continuous operation.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaCode className="inline-block mr-2" />
              Developer Tools
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">API Access:</span>
                  <span className="text-gray-400"> Integrate with your existing systems and build custom extensions using our comprehensive API.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">SDKs:</span>
                  <span className="text-gray-400"> Develop custom AI models and applications using our Python and JavaScript SDKs.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Documentation:</span>
                  <span className="text-gray-400"> Access detailed documentation, tutorials, and code samples to get started quickly.</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaUsers className="inline-block mr-2" />
              Team Collaboration
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Shared Workspaces:</span>
                  <span className="text-gray-400"> Collaborate with your team on AI projects in shared, version-controlled workspaces.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Role-Based Permissions:</span>
                  <span className="text-gray-400"> Control access to sensitive data and functionalities based on user roles.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Activity Tracking:</span>
                  <span className="text-gray-400"> Monitor team progress, track changes, and ensure accountability.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
