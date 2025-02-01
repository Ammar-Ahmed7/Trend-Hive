// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Users, Clock, Brain } from 'lucide-react';
import Navbar from './CNavbar';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    testimonials: false
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      features: true,
      testimonials: true
    });
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Delivery",
      description: "Smart routing and real-time optimization for faster deliveries"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Eco-Friendly Options",
      description: "Sustainable packaging and carbon-neutral delivery choices"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Community Sharing",
      description: "Connect with local communities for shared deliveries"
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: "Emergency Delivery",
      description: "24/7 priority shipping for urgent supplies"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      content: "The AI-powered delivery system has transformed how I receive packages. It's incredibly efficient!",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "The sustainable packaging options align perfectly with our company's environmental goals.",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Navbar/>
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`py-20 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing Delivery with AI and Sustainability
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Experience the future of delivery with our AI-powered, eco-friendly solution that puts community and accessibility first.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
                Shop Now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Our Story</a></li>
                <li><a href="#" className="hover:text-blue-400">Team</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Delivery</a></li>
                <li><a href="#" className="hover:text-blue-400">Marketplace</a></li>
                <li><a href="#" className="hover:text-blue-400">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;