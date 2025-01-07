import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

export const ProductCard = ({
  title,
  subtitle,
  price,
  originalPrice,
  features,
  ctaText,
  onCtaClick,
  highlight = false,
  claimed,
  type,
  onViewDetails,
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
      }`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-purple-400 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{subtitle}</p>
        <div className="mb-4">
          {originalPrice && (
            <span className="line-through text-gray-500 text-lg mr-2">
              ${originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-3xl font-bold text-purple-400">
            ${price.toLocaleString()}
          </span>
        </div>
        {claimed && (
          <p className="text-sm text-purple-300 mb-2">
            {claimed} visionaries already secured their spot
          </p>
        )}
      </div>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <FaCheck className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <button
          onClick={onCtaClick}
          className={`w-full ${highlight ? 'btn btn-primary' : 'btn btn-outline'}`}
        >
          {ctaText}
        </button>
        {type !== 'hosted' && (
          <button
            onClick={onViewDetails}
            className="w-full btn btn-outline"
          >
            View Details
          </button>
        )}
      </div>

      {type === 'founders' && (
        <p className="text-center text-sm text-gray-400 mt-4">
          Limited to 500 units
        </p>
      )}
    </motion.div>
  );
};
