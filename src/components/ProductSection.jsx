import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Commander } from './Commander';
import { Lite } from './Lite';
import { Cloud } from './Cloud';

export const ProductSection = ({
  onPreorderClick,
  onLiteSignupClick,
  onHostedSignupClick,
}) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 'commander',
      title: 'Unicorn Commander',
      subtitle: 'Enterprise-Grade AI Command Center',
      price: 18000,
      originalPrice: 20000,
      features: [
        'Full AI Command Center Suite',
        'Enterprise-Grade Security',
        'Unlimited Document Processing',
        'Ships Late February 2024',
        'Lifetime Priority Support',
        'Free Updates Forever',
        '1 Year FREE Hosting ($1,200 value)',
      ],
      ctaText: 'Own Your Future Today',
      onCtaClick: onPreorderClick,
      highlight: true,
      claimed: 3,
      type: 'founders',
      deposit: 2500,
    },
    {
      id: 'lite',
      title: 'Unicorn Commander Lite',
      subtitle: 'Personal AI Assistant',
      price: 1499,
      features: [
        'Local Document Storage',
        '3rd Party API Integration',
        'Basic Automation Tools',
        'Personal Use License',
        'Community Support',
        'Regular Updates',
        'Self-Hosted Option',
      ],
      ctaText: 'Join Waitlist',
      onCtaClick: onLiteSignupClick,
      type: 'lite',
    },
    {
      id: 'hosted',
      title: 'Unicorn Commander Cloud',
      subtitle: 'Managed Cloud AI Solution',
      price: 'Custom',
      features: [
        'Fully Managed Cloud Infrastructure',
        'Automatic Scaling and Load Balancing',
        'Global Data Centers',
        'Enterprise-Grade Security',
        '24/7 Monitoring and Support',
        'Customizable AI Models',
        'API Access and Integrations',
      ],
      ctaText: 'Join Cloud Waitlist',
      onCtaClick: onHostedSignupClick,
      type: 'hosted',
    },
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
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-4">
          Choose Your AI Command Center
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Own your future with AI automation that grows with you. Select the
          perfect command center for your needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onViewDetails={() => handleViewDetails(product.id)}
            />
          ))}
        </div>

        {activeProduct === 'commander' && (
          <Commander onClose={handleCloseDetails} />
        )}
        {activeProduct === 'lite' && <Lite onClose={handleCloseDetails} />}
        {activeProduct === 'hosted' && <Cloud onClose={handleCloseDetails} />}
      </div>
    </section>
  );
};
