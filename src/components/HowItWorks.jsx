import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMagic, FaChartLine, FaRocket } from 'react-icons/fa';

export const HowItWorks = () => {
  const steps = [
    {
      icon: FaRobot,
      title: "Connect Your Tools",
      description: "Integrate with your existing workflow in minutes"
    },
    {
      icon: FaMagic,
      title: "Train Your AI",
      description: "Customize automation to match your needs"
    },
    {
      icon: FaChartLine,
      title: "Monitor Progress",
      description: "Track performance and optimize results"
    },
    {
      icon: FaRocket,
      title: "Scale Up",
      description: "Grow without adding overhead"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <step.icon className="text-2xl text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
