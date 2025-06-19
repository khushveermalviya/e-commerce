import React from 'react';
import { FaServer, FaChartLine, FaShieldAlt, FaCog } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Predictive Infrastructure Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionize your infrastructure management with AI-powered predictions and real-time monitoring.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-blue-500/10 p-8 rounded-2xl">
              <img
                src="/dashboard-preview.svg"
                alt="Dashboard Preview"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Powerful Features for Modern Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FaServer className="w-8 h-8" />}
              title="Infrastructure Monitoring"
              description="Real-time monitoring of your entire infrastructure stack with detailed insights."
            />
            <FeatureCard
              icon={<FaChartLine className="w-8 h-8" />}
              title="Predictive Analytics"
              description="AI-powered predictions to prevent downtime and optimize performance."
            />
            <FeatureCard
              icon={<FaShieldAlt className="w-8 h-8" />}
              title="Security Management"
              description="Advanced security features to protect your infrastructure from threats."
            />
            <FeatureCard
              icon={<FaCog className="w-8 h-8" />}
              title="Automated Operations"
              description="Streamline your operations with intelligent automation tools."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure Management?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust PIM for their infrastructure needs.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 PIM - Predictive Infrastructure Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition duration-300">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default LandingPage; 