import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';

export const HostedSignupModal = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [betaTester, setBetaTester] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, betaTester });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-gray-800 p-6 rounded-xl max-w-md w-full">
        <div className="text-center mb-6">
          <div className="inline-block bg-purple-500/20 rounded-full p-4 mb-4">
            <FaCloud className="text-3xl text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-purple-400">
            Join Cloud Waitlist
          </h3>
          <p className="text-gray-300 mt-2">
            Get early access to our managed cloud solution with priority onboarding and special pricing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
            required
          />
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="betaTester"
              checked={betaTester}
              onChange={(e) => setBetaTester(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="betaTester" className="text-gray-300 text-sm">
              I'm interested in being a beta tester
            </label>
          </div>

          <button 
            type="submit"
            className="w-full btn btn-primary"
          >
            Join Cloud Waitlist
          </button>
          
          <button 
            type="button"
            onClick={onClose}
            className="w-full btn btn-outline"
          >
            Cancel
          </button>
        </form>
      </div>
    </motion.div>
  );
};
