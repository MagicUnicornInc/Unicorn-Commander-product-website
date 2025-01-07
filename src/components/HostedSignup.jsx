import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export const HostedSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          product: 'hosted'
        }),
      });

      if (response.ok) {
        toast.success('Thanks for your interest in our cloud solution!');
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Connection error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 p-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm"
          required
        />
        <button type="submit" className="btn btn-outline text-sm px-4 py-2">
          Join Waitlist
        </button>
      </div>
    </form>
  );
};
