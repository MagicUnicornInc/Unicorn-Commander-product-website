import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { CognitiveCompanion } from './pages/CognitiveCompanion';
import { CenterDeep } from './pages/CenterDeep';
import { CommandCanvas } from './pages/CommandCanvas';
import { MagiCode } from './pages/MagiCode';
import { CRC } from './pages/CRC';

export const ProductGrid = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 'cognitive-companion',
      title: 'Cognitive Companion',
      emoji: '🧠',
      shortDescription: 'Your Personal AI Squad—Working Smarter, Together.',
      features: [
        'AI-Powered Knowledge Retrieval',
        'Team Collaboration',
        'Privacy-First Design',
        'Smart Workflows'
      ]
    },
    {
      id: 'centerdeep',
      title: 'CenterDeep',
      emoji: '🕵️‍♂️',
      shortDescription: 'Dig Deeper. Think Smarter. Act Faster.',
      features: [
        'Pro Search Mode',
        'Unified Knowledge Hub',
        'Smart Threads',
        'Real-time Analysis'
      ]
    },
    {
      id: 'command-canvas',
      title: 'Command Canvas',
      emoji: '🎨',
      shortDescription: 'Create. Edit. Inspire—All On Command',
      features: [
        'AI Image Generation',
        'Smart Editing Tools',
        'Custom APIs',
        'Creative Automation'
      ]
    },
    {
      id: 'magicode',
      title: 'MagiCode',
      emoji: '💻',
      shortDescription: 'Build Smarter. Code Faster. Automate Everything.',
      features: [
        'AI Coding Assistant',
        'Full-Stack Workflow',
        'One-Click Deployment',
        'Advanced Tools'
      ]
    },
    {
      id: 'crc',
      title: 'CRC',
      emoji: '🎖️',
      shortDescription: 'Take Command of Your Server—Meet The Colonel!',
      features: [
        'The Colonel AI Commander',
        'Elite Command Staff',
        'Enterprise Security',
        'Modular Architecture'
      ]
    }
  ];

  const handleViewDetails = (productId) => {
    setActiveProduct(productId);
  };

  const handleCloseDetails = () => {
    setActiveProduct(null);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Product Suite</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          A collection of powerful AI-driven tools designed to supercharge your productivity, creativity, and technical capabilities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onViewDetails={() => handleViewDetails(product.id)}
            />
          ))}
        </div>

        {/* Product Detail Pages */}
        {activeProduct === 'cognitive-companion' && (
          <CognitiveCompanion onClose={handleCloseDetails} />
        )}
        {activeProduct === 'centerdeep' && (
          <CenterDeep onClose={handleCloseDetails} />
        )}
        {activeProduct === 'command-canvas' && (
          <CommandCanvas onClose={handleCloseDetails} />
        )}
        {activeProduct === 'magicode' && (
          <MagiCode onClose={handleCloseDetails} />
        )}
        {activeProduct === 'crc' && (
          <CRC onClose={handleCloseDetails} />
        )}
      </div>
    </section>
  );
};
