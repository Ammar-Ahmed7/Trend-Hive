/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from './CNavbar';
import { 
  Leaf, 
  Filter, 
  ShoppingCart, 
  Star, 
  
  Package, 
  Truck,
  Recycle,
  Heart,
 
} from 'lucide-react';

const SustainabilityMarketplace = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'organic', label: 'Organic' },
    { id: 'recycled', label: 'Recycled Materials' },
    { id: 'local', label: 'Local Vendors' },
    { id: 'plastic-free', label: 'Plastic-Free' },
    { id: 'fair-trade', label: 'Fair Trade' }
  ];

  const products = [
    {
      id: 1,
      name: "Eco-Friendly Water Bottle",
      price: 29.99,
      rating: 4.5,
      image: "/api/placeholder/300/400",
      category: "recycled",
      carbonFootprint: "0.5kg CO2",
      description: "Made from 100% recycled materials, this water bottle keeps drinks cold for 24 hours.",
      certifications: ["B-Corp", "Plastic Negative"],
      vendor: "GreenLife Products",
      deliveryOptions: [
        { method: "Eco Delivery", time: "2-3 days", price: 4.99 },
        { method: "Standard", time: "1-2 days", price: 7.99 }
      ]
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 34.99,
      rating: 4.8,
      image: "/api/placeholder/300/400",
      category: "organic",
      carbonFootprint: "1.2kg CO2",
      description: "100% organic cotton t-shirt, ethically made with natural dyes.",
      certifications: ["GOTS", "Fair Trade"],
      vendor: "EcoStyle",
      deliveryOptions: [
        { method: "Eco Delivery", time: "2-3 days", price: 4.99 },
        { method: "Standard", time: "1-2 days", price: 7.99 }
      ]
    },
    // Add more products as needed
  ];

  const toggleFilter = (filterId) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sustainable Marketplace
          </h1>
          <p className="text-xl max-w-2xl mb-8">
            Shop eco-friendly products from verified sustainable vendors. Every purchase makes a difference.
          </p>
        </div>
      </div>

      {/* Filters and Sort Section */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters {selectedFilters.length > 0 && `(${selectedFilters.length})`}
            </button>

            <div className="flex items-center gap-4">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="eco">Eco Impact</option>
              </select>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => toggleFilter(category.id)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedFilters.includes(category.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <span className="text-green-600 font-semibold">${product.price}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-700 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-500 text-sm">{product.vendor}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span>{product.carbonFootprint} carbon footprint</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  Add to Cart
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability Impact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Waste Reduction</h3>
              <p className="text-gray-600">50,000 kg plastic saved from landfills</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Carbon Neutral</h3>
              <p className="text-gray-600">100% carbon neutral deliveries</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco Packaging</h3>
              <p className="text-gray-600">100% biodegradable packaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityMarketplace;