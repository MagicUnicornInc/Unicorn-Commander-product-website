import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { FaRocket, FaCloud, FaCogs, FaPaintBrush, FaChartLine, FaRobot, FaLock, FaShieldAlt, FaCheck, FaBolt, FaUserClock, FaChartBar } from 'react-icons/fa';
import { HostedSignup } from './components/HostedSignup';
import { CountdownTimer } from './components/CountdownTimer';
import { FeatureCard } from './components/FeatureCard';
import { SocialProofBanner } from './components/SocialProofBanner';
import { WhyFounders } from './components/WhyFounders';
import { ROICalculator } from './components/ROICalculator';
import { FoundersGuarantee } from './components/FoundersGuarantee';
import { FAQ } from './components/FAQ';
import { HowItWorks } from './components/HowItWorks';
import { LiteSignupModal } from './components/LiteSignupModal';
import { HostedSignupModal } from './components/HostedSignupModal';
import { ProductSection } from './components/ProductSection';
import { ProductGrid } from './components/products/ProductGrid';

function App() {
  const [remainingUnits, setRemainingUnits] = useState(497);
  const [claimedToday, setClaimedToday] = useState(0);
  const [showLiteSignup, setShowLiteSignup] = useState(false);
  const [showHostedSignup, setShowHostedSignup] = useState(false);

  useEffect(() => {
    fetchRemainingUnits();
    fetchClaimedToday();
    const interval = setInterval(() => {
      fetchRemainingUnits();
      fetchClaimedToday();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchRemainingUnits = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/preorders/remaining');
      const data = await response.json();
      setRemainingUnits(data.remaining);
    } catch (error) {
      console.error('Error fetching remaining units:', error);
    }
  };

  const fetchClaimedToday = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/preorders/claimed-today');
      const data = await response.json();
      setClaimedToday(data.claimedToday);
    } catch (error) {
      console.error('Error fetching claimed today:', error);
    }
  };

  const handlePreorder = () => {
    window.location.href = 'https://buy.stripe.com/14kbJE8bQfxC3iobII';
  };

  const handleLiteSignup = async (email) => {
    try {
      const response = await fetch('http://localhost:3000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          product: 'lite'
        }),
      });
      
      if (response.ok) {
        toast.success('Thanks for joining the Unicorn Commander Lite waitlist!');
        setShowLiteSignup(false);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Connection error. Please try again.');
    }
  };

  const handleHostedSignup = async ({ email, betaTester }) => {
    try {
      const response = await fetch('http://localhost:3000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          betaTester,
          product: 'hosted'
        }),
      });
      
      if (response.ok) {
        toast.success('Thanks for joining our cloud solution waitlist!');
        setShowHostedSignup(false);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Connection error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster position="top-center" />

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-purple-400 mb-2"
        >
          Magic Unicorn presents...
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-4"
        >
          <span className="gradient-text">Unicorn Commander</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-purple-400 mb-4"
        >
          Take Command. Automate. Dominate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-300 mb-6">
            Stop drowning in repetitive tasks. Unicorn Commander helps you automate the grind so you can focus on growth. Our AI-powered platform simplifies workflows, boosts productivity, and unleashes your team's creative potential.
          </p>
          <div className="flex justify-center gap-8 text-lg text-gray-400 mb-8">
            <div className="flex items-center">
              <FaUserClock className="text-purple-400 mr-2" />
              Save 10+ Hours Weekly
            </div>
            <div className="flex items-center">
              <FaChartBar className="text-purple-400 mr-2" />
              30% Productivity Boost
            </div>
            <div className="flex items-center">
              <FaBolt className="text-purple-400 mr-2" />
              Instant AI Automation
            </div>
          </div>
          <div className="space-y-4">
            <button
              onClick={handlePreorder}
              className="btn btn-primary text-lg px-8 py-4 w-full md:w-auto"
            >
              🚀 See Unicorn Commander in Action
            </button>
            <p className="text-sm text-purple-400">
              Limited beta slots available — secure yours today!
            </p>
          </div>
        </motion.div>
      </header>

      {/* Social Proof Banner */}
      <SocialProofBanner claimedCount={3} />

      {/* Technology Partners Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
            Powered by Industry Leaders
          </h2>
          <p className="text-gray-300 text-lg mb-8 text-center">
            At Magic Unicorn, we pride ourselves on integrating best-in-class, open-source technologies—the same tools that power innovations at some of the world's most recognized and disruptive companies.
          </p>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-8">
            <p className="text-gray-300 mb-6">
              Our AI-powered solutions leverage the cutting-edge frameworks and platforms developed and adopted by tech giants like:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheck className="text-purple-400 mt-1 mr-3" />
                  <div>
                    <span className="text-purple-400 font-bold">Anthropic</span>
                    <p className="text-gray-400">Pioneers of Constitutional AI and Claude</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-purple-400 mt-1 mr-3" />
                  <div>
                    <span className="text-purple-400 font-bold">Meta</span>
                    <p className="text-gray-400">Developers of LLaMA and open-source AI frameworks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-purple-400 mt-1 mr-3" />
                  <div>
                    <span className="text-purple-400 font-bold">Google DeepMind & Gemini</span>
                    <p className="text-gray-400">Leaders in multimodal AI systems</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheck className="text-purple-400 mt-1 mr-3" />
                  <div>
                    <span className="text-purple-400 font-bold">Stability AI</span>
                    <p className="text-gray-400">Creators of Stable Diffusion</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-purple-400 mt-1 mr-3" />
                  <div>
                    <span className="text-purple-400 font-bold">Hugging Face</span>
                    <p className="text-gray-400">Open-source AI platform and tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-purple-400 mt-1 mr-3" />
                  <div>
                    <span className="text-purple-400 font-bold">Groq</span>
                    <p className="text-gray-400">Ultra-fast AI processing innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Suite Section */}
      <ProductGrid />

      {/* Product Section */}
      <ProductSection 
        onPreorderClick={handlePreorder}
        onLiteSignupClick={() => setShowLiteSignup(true)}
        onHostedSignupClick={() => setShowHostedSignup(true)}
      />

      {/* Rest of the sections */}
      <HowItWorks />
      <WhyFounders />
      <ROICalculator />
      <FoundersGuarantee />
      <FAQ />

      {/* Modals */}
      {showLiteSignup && (
        <LiteSignupModal
          onClose={() => setShowLiteSignup(false)}
          onSubmit={handleLiteSignup}
        />
      )}
      
      {showHostedSignup && (
        <HostedSignupModal
          onClose={() => setShowHostedSignup(false)}
          onSubmit={handleHostedSignup}
        />
      )}
    </div>
  );
}

export default App;
