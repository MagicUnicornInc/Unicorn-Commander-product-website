import React from 'react';
import { motion } from 'framer-motion';

export const TrustedBy = () => {
  const logos = [
    { name: 'TechCorp', src: '/logos/techcorp.svg' },
    { name: 'InnovateLabs', src: '/logos/innovatelabs.svg' },
    { name: 'FutureWorks', src: '/logos/futureworks.svg' },
    { name: 'DataDrive', src: '/logos/datadrive.svg' },
    { name: 'AIVentures', src: '/logos/aiventures.svg' }
  ];

  return (
    <section className="py-8 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 text-sm mb-6">Trusted by innovative companies worldwide</p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              className="grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
