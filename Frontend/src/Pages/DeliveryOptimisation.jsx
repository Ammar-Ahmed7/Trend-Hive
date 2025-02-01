/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar from './CNavbar';
import { 
  Brain, 
  
  Zap, 
 
  MapPin,
  
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const AIDeliveryPage = () => {
  const [deliveryData, setDeliveryData] = useState([]);
  const [activeSection, setActiveSection] = useState('route');
  
  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryData(prev => {
        const newData = [...prev];
        if (newData.length > 10) newData.shift();
        newData.push({
          time: new Date().toLocaleTimeString(),
          deliveryTime: 20 + Math.random() * 10,
          fuelSaved: 15 + Math.random() * 5,
          emissions: 25 + Math.random() * 8
        });
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const impactData = [
    { metric: 'Average Delivery Time', before: '48 hrs', after: '24 hrs', improvement: '50%' },
    { metric: 'Fuel Consumption', before: '12L/100km', after: '8L/100km', improvement: '33%' },
    { metric: 'Carbon Emissions', before: '2.5kg CO2', after: '1.2kg CO2', improvement: '52%' },
    { metric: 'Route Efficiency', before: '75%', after: '95%', improvement: '27%' }
  ];

  const AISteps = [
    {
      title: 'Route Optimization',
      description: 'AI analyzes traffic patterns, weather conditions, and historical data to determine the most efficient delivery routes.',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: 'Real-time Adaptation',
      description: 'Dynamic route adjustments based on real-time traffic and weather conditions.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecasting delivery demands and optimizing resource allocation.',
      icon: <Brain className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Navbar/>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered Delivery Optimization
              </h1>
              <p className="text-xl mb-8">
                Experience faster, smarter, and more sustainable deliveries with our advanced AI technology.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-sm">Faster Delivery</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-3xl font-bold">33%</div>
                  <div className="text-sm">Less Fuel</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-3xl font-bold">52%</div>
                  <div className="text-sm">CO₂ Reduction</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm">Route Efficiency</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-gray-800 mb-4">Live Delivery Performance</div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={deliveryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="deliveryTime" stroke="#3b82f6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Process Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How Our AI Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AISteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Real-time Optimization Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Fuel Savings</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={deliveryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="fuelSaved" fill="#10b981" stroke="#059669" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Emissions Reduction</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={deliveryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="emissions" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Comparison */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">AI Impact on Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4">{item.metric}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Before AI</span>
                    <span className="font-medium">{item.before}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">With AI</span>
                    <span className="text-green-600 font-medium">{item.after}</span>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-2xl font-bold text-blue-600">{item.improvement}</span>
                    <span className="text-sm text-gray-600 ml-1">improvement</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDeliveryPage;