/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './CNavbar';
import { 
  Brain, 
  Leaf, 
  Users, 
  Clock, 
  Truck, 
  ShieldCheck,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Delivery Optimization",
      description: "Smart routing and real-time optimization powered by advanced artificial intelligence",
      benefits: [
        "30% faster delivery times",
        "Reduced carbon emissions",
        "Real-time route optimization",
        "Predictive demand planning"
      ],
      before: "Traditional delivery takes 2-3 days with manual routing",
      after: "AI-optimized delivery completed in 24 hours with smart routing"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Eco-Friendly Delivery",
      description: "Sustainable delivery options with zero carbon footprint",
      benefits: [
        "100% carbon-neutral delivery",
        "Eco-friendly packaging",
        "Renewable energy fleet",
        "Waste reduction program"
      ],
      before: "Standard delivery produces 2.5kg CO2 per package",
      after: "Zero-emission delivery with carbon offset programs"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Sharing Platform",
      description: "Connect with your local community for shared deliveries and group purchases",
      benefits: [
        "Reduced delivery costs",
        "Community engagement",
        "Shared resources",
        "Local support network"
      ],
      before: "Individual deliveries increase costs and emissions",
      after: "Shared deliveries reduce costs by 40% and minimize environmental impact"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Emergency Supply Network",
      description: "24/7 priority delivery for urgent supplies and essential items",
      benefits: [
        "Immediate response",
        "Priority routing",
        "Essential items network",
        "24/7 support"
      ],
      before: "Critical supplies delayed by standard shipping times",
      after: "Emergency items delivered within 2 hours"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Experience the future of delivery with our innovative, sustainable, and community-focused solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ${
                  activeService === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`text-blue-600 transition-colors duration-300 ${
                  activeService === index ? 'text-purple-600' : ''
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Before & After */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Before</div>
                    <div className="text-gray-700">{service.before}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">After</div>
                    <div className="text-blue-600 font-medium">{service.after}</div>
                  </div>
                </div>

                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Delivery Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already embraced the future of delivery services.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
              Start Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;