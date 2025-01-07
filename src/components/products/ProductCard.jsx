import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const ProductCard = ({ 
  title, 
  emoji, 
  shortDescription, 
  features, 
  onViewDetails,
  highlight = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-xl p-6 ${
        highlight
          ? 'bg-purple-600/20 border-2 border-purple-500'
          : 'bg-purple-500/10 border border-purple-500/20'
      } hover:bg-purple-500/20 transition-all duration-300`}
    >
      <div className="text-3xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-bold text-purple-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{shortDescription}</p>
      
      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-400">
            <span className="text-purple-400 mr-2">•</span>
            {feature}
          </div>
        ))}
      </div>

      <button
        onClick={onViewDetails}
        className="w-full btn btn-outline flex items-center justify-center gap-2"
      >
        Learn More <FaArrowRight />
      </button>
    </motion.div>
  );
};
