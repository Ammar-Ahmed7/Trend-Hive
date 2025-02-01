/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './CNavbar';
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Share2, 
  Plus,
  Award,
  
  Package,
 
  Settings
} from 'lucide-react';

const CommunityPlatform = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [showGroupModal, setShowGroupModal] = useState(false);

  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Chen',
        avatar: '/api/placeholder/40/40',
        sustainabilityScore: 85
      },
      type: 'group_order',
      content: 'Starting a group order for eco-friendly household products! Join in to save on delivery costs and reduce our carbon footprint.',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      participants: 4,
      deadline: '24 hours left'
    },
    {
      id: 2,
      user: {
        name: 'Mike Rodriguez',
        avatar: '/api/placeholder/40/40',
        sustainabilityScore: 92
      },
      type: 'shared_delivery',
      content: 'Successfully combined deliveries with neighbors - saved 5kg of CO2 emissions! 🌱',
      timestamp: '4 hours ago',
      likes: 45,
      comments: 12,
      shares: 7,
      impact: {
        co2Saved: '5kg',
        costSaved: '$12'
      }
    }
  ];

  const userProfile = {
    name: 'Alex Thompson',
    avatar: '/api/placeholder/80/80',
    sustainabilityScore: 78,
    badges: ['Eco Pioneer', 'Group Leader', 'Carbon Reducer'],
    stats: {
      groupOrders: 15,
      co2Saved: '125kg',
      deliveriesShared: 28,
      communityRank: 'Gold'
    },
    recentActivity: [
      { type: 'group_order', description: 'Created a group order', timestamp: '1 day ago' },
      { type: 'delivery_shared', description: 'Shared delivery with 3 neighbors', timestamp: '3 days ago' },
      { type: 'badge_earned', description: 'Earned "Eco Pioneer" badge', timestamp: '1 week ago' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Navbar/>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Community Sharing Platform</h1>
              <p className="text-xl">Connect, share, and make deliveries more sustainable together.</p>
            </div>
            <button 
              onClick={() => setShowGroupModal(true)}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-50 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Group Order
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <img 
                  src={userProfile.avatar} 
                  alt={userProfile.name}
                  className="w-20 h-20 rounded-full"
                />
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>
              
              {/* Sustainability Score */}
              <div className="mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e2e8f0"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#8b5cf6"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - userProfile.sustainabilityScore / 100)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">{userProfile.sustainabilityScore}</div>
                      <div className="text-sm text-gray-600">Eco Score</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{userProfile.stats.groupOrders}</div>
                  <div className="text-sm text-gray-600">Group Orders</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{userProfile.stats.co2Saved}</div>
                  <div className="text-sm text-gray-600">CO₂ Saved</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{userProfile.stats.deliveriesShared}</div>
                  <div className="text-sm text-gray-600">Shared Deliveries</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{userProfile.stats.communityRank}</div>
                  <div className="text-sm text-gray-600">Rank</div>
                </div>
              </div>

              {/* Badges */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Badges Earned</h3>
                <div className="flex flex-wrap gap-2">
                  {userProfile.badges.map((badge, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  {userProfile.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {activity.type === 'group_order' && <Users className="w-4 h-4 text-purple-600" />}
                        {activity.type === 'delivery_shared' && <Package className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'badge_earned' && <Award className="w-4 h-4 text-yellow-600" />}
                      </div>
                      <div>
                        <div className="text-sm">{activity.description}</div>
                        <div className="text-xs text-gray-500">{activity.timestamp}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Community Feed */}
          <div className="lg:col-span-2">
            {/* Feed Controls */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex items-center gap-4">
                <button 
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'feed' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('feed')}
                >
                  All Posts
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'groups' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('groups')}
                >
                  Group Orders
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg p-6">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={post.user.avatar} 
                        alt={post.user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{post.user.name}</div>
                        <div className="text-sm text-gray-500">{post.timestamp}</div>
                      </div>
                    </div>
                    {post.type === 'group_order' && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                        Group Order
                      </span>
                    )}
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-800 mb-4">{post.content}</p>

                  {/* Post Metrics */}
                  {post.type === 'group_order' && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-600">Participants</div>
                          <div className="font-semibold">{post.participants} joined</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Time Left</div>
                          <div className="font-semibold">{post.deadline}</div>
                        </div>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                          Join Order
                        </button>
                      </div>
                    </div>
                  )}

                  {post.type === 'shared_delivery' && post.impact && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-600">CO₂ Saved</div>
                          <div className="font-semibold text-green-600">{post.impact.co2Saved}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Cost Saved</div>
                          <div className="font-semibold text-blue-600">{post.impact.costSaved}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>{post.shares}</span>
                    </button>
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

export default CommunityPlatform;