import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaShieldAlt, FaChartLine, FaCogs, FaUsers, FaCode, FaLifeRing } from 'react-icons/fa';

export const Cloud = ({ onClose }) => {
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
            <FaCloud className="inline-block mr-2" />
            Unicorn Commander Cloud
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-300 mb-8">
          Unicorn Commander Cloud is a fully managed, enterprise-grade AI platform designed for scalability, security, and ease of use.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaServer className="inline-block mr-2" />
              Managed Infrastructure
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Global Data Centers:</span>
                  <span className="text-gray-400"> Deploy your AI workloads across multiple regions for low latency and high availability.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Automatic Scaling:</span>
                  <span className="text-gray-400"> Resources automatically scale up or down based on demand, ensuring optimal performance and cost efficiency.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Load Balancing:</span>
                  <span className="text-gray-400"> Traffic is intelligently distributed across multiple servers to prevent overload and ensure smooth operation.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">High Availability:</span>
                  <span className="text-gray-400"> Built-in redundancy and failover mechanisms ensure your AI applications are always available.</span>
                </div>
              </li>
            </ul>
          </div>
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
                  <span className="text-gray-400"> Data is encrypted both in transit and at rest, ensuring confidentiality and compliance.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Access Controls:</span>
                  <span className="text-gray-400"> Fine-grained access controls and role-based permissions ensure data security.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Compliance:</span>
                  <span className="text-gray-400"> Meet industry standards and regulatory requirements with built-in compliance features.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaChartLine className="inline-block mr-2" />
              Performance Monitoring
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Real-time Metrics:</span>
                  <span className="text-gray-400"> Monitor performance, usage, and health metrics in real-time.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Automated Alerts:</span>
                  <span className="text-gray-400"> Receive instant notifications about system health and performance issues.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Usage Analytics:</span>
                  <span className="text-gray-400"> Track resource utilization and optimize costs with detailed analytics.</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaCogs className="inline-block mr-2" />
              Integration & APIs
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">RESTful APIs:</span>
                  <span className="text-gray-400"> Integrate with your existing systems using our comprehensive API suite.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Webhooks:</span>
                  <span className="text-gray-400"> Set up automated workflows with event-driven integrations.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">SDKs:</span>
                  <span className="text-gray-400"> Use our SDKs for popular programming languages to speed up development.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                  <span className="text-gray-400"> Collaborate seamlessly with team members in secure, shared environments.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Version Control:</span>
                  <span className="text-gray-400"> Track changes and maintain version history of your AI models and configurations.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Audit Logs:</span>
                  <span className="text-gray-400"> Monitor team activity and maintain compliance with detailed audit trails.</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <FaLifeRing className="inline-block mr-2" />
              Enterprise Support
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">24/7 Support:</span>
                  <span className="text-gray-400"> Access round-the-clock technical support from our expert team.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">Dedicated Account Manager:</span>
                  <span className="text-gray-400"> Get personalized assistance and strategic guidance for your AI initiatives.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">SLA Guarantees:</span>
                  <span className="text-gray-400"> Benefit from our enterprise-grade SLAs for uptime and support response times.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
