import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCloud, FaBrain, FaChartLine, FaLock, FaCogs, FaUserFriends, FaCode } from 'react-icons/fa';

export const ProductSuite = () => {
  const suiteFeatures = [
    {
      icon: FaRobot,
      title: "AI Command Center",
      description: "Central hub for all AI operations with intuitive controls and real-time monitoring.",
      features: [
        "Multi-model AI orchestration",
        "Custom workflow automation",
        "Real-time performance metrics",
        "Integrated development environment"
      ]
    },
    {
      icon: FaBrain,
      title: "Neural Engine",
      description: "Advanced neural processing system for complex decision-making and pattern recognition.",
      features: [
        "Multi-modal processing",
        "Adaptive learning systems",
        "Pattern recognition",
        "Decision optimization"
      ]
    },
    {
      icon: FaCloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture supporting distributed AI operations and data processing.",
      features: [
        "Auto-scaling capabilities",
        "Load balancing",
        "High availability",
        "Geographic distribution"
      ]
    },
    {
      icon: FaLock,
      title: "Security Framework",
      description: "Enterprise-grade security system protecting AI operations and sensitive data.",
      features: [
        "End-to-end encryption",
        "Access control",
        "Audit logging",
        "Compliance management"
      ]
    }
  ];

  const integrations = [
    {
      icon: FaCogs,
      title: "System Integration",
      features: [
        "REST API",
        "GraphQL endpoints",
        "Webhook support",
        "Custom connectors"
      ]
    },
    {
      icon: FaUserFriends,
      title: "Team Collaboration",
      features: [
        "Role-based access",
        "Team workspaces",
        "Activity tracking",
        "Resource sharing"
      ]
    },
    {
      icon: FaCode,
      title: "Developer Tools",
      features: [
        "SDK access",
        "API documentation",
        "Testing framework",
        "Version control"
      ]
    },
    {
      icon: FaChartLine,
      title: "Analytics Suite",
      features: [
        "Performance metrics",
        "Usage analytics",
        "Cost tracking",
        "ROI reporting"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Product Suite Overview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive AI command and control system designed for enterprise-scale operations
          </p>
        </div>

        {/* Core Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {suiteFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:bg-purple-500/20 transition-all duration-300"
            >
              <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="text-2xl text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Integrations */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Enterprise Integration Layer
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Seamlessly connect with your existing infrastructure and extend capabilities through our comprehensive integration framework
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-500/5 border border-purple-500/10 rounded-xl p-6 hover:bg-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <integration.icon className="text-xl text-purple-400 mr-3" />
                <h4 className="text-lg font-bold text-purple-400">{integration.title}</h4>
              </div>
              <ul className="space-y-2">
                {integration.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="text-purple-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-purple-500/10 border border-purple-500/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Technical Specifications
          </h3>
          <p className="text-gray-300 mb-6">
            Enterprise-grade infrastructure designed for performance, security, and scalability
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">Processing Power</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• 100K requests/second</li>
                <li>• Sub-50ms latency</li>
                <li>• Distributed processing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">Security</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• SOC 2 Type II certified</li>
                <li>• End-to-end encryption</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">Scalability</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Auto-scaling architecture</li>
                <li>• Multi-region deployment</li>
                <li>• 99.99% uptime SLA</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
