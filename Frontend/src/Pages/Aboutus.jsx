/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Leaf, Heart, Globe, Zap, Users, Target } from 'lucide-react';

const AboutPage = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    mission: false,
    values: false,
    team: false,
    timeline: false
  });

  useEffect(() => {
    setVisibleSections({
      hero: true,
      mission: true,
      values: true,
      team: true,
      timeline: true
    });
  }, []);

  const values = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Sustainability",
      description: "Committed to reducing our carbon footprint through eco-friendly practices and green initiatives."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs and satisfaction."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Impact",
      description: "Creating positive change in communities worldwide through innovative delivery solutions."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation",
      description: "Pushing boundaries with AI and technology to revolutionize the delivery industry."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      quote: "Building the future of sustainable commerce",
      image: "/api/placeholder/200/200"
    },
    {
      name: "David Park",
      role: "Chief Technology Officer",
      quote: "Innovation is in our DNA",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Sustainability",
      quote: "Every delivery makes a difference",
      image: "/api/placeholder/200/200"
    },
    {
      name: "James Wilson",
      role: "Community Director",
      quote: "Connecting communities through commerce",
      image: "/api/placeholder/200/200"
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Started with a vision to revolutionize delivery services"
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched our proprietary AI delivery optimization system"
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Achieved carbon-neutral delivery operations"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Extended services to 50+ countries worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Driven by Sustainability & Innovation
            </h1>
            <p className="text-xl max-w-2xl">
              We are on a mission to transform commerce through sustainable practices, 
              innovative technology, and community-focused solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${visibleSections.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To create a more sustainable and connected world through innovative delivery solutions that empower communities and protect our planet.
              </p>
              <p className="text-lg text-gray-600">
                We believe in harnessing the power of AI and community collaboration to make commerce more accessible, efficient, and environmentally conscious.
              </p>
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/600/400"
                alt="Our Mission"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white px-4">{member.quote}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                    <span className="text-blue-600 font-bold">{item.year}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;