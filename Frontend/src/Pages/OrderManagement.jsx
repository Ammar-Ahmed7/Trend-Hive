/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-4">{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="border-b pb-2 mb-4 font-semibold text-lg">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-bold text-gray-800">{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="p-2">{children}</div>
);

const OrderManagement = () => {
  const [dateRange, setDateRange] = useState('week');
  
  const trendData = [
    { name: 'Mon', orders: 45, revenue: 2300 },
    { name: 'Tue', orders: 52, revenue: 2800 },
    { name: 'Wed', orders: 49, revenue: 2600 },
    { name: 'Thu', orders: 63, revenue: 3200 },
    { name: 'Fri', orders: 58, revenue: 2900 },
    { name: 'Sat', orders: 48, revenue: 2400 },
    { name: 'Sun', orders: 42, revenue: 2100 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Management</h1>
        <p className="text-gray-500 mb-6">Track and manage customer orders</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Order Trends</CardTitle>
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value="week">Last 7 days</option>
              <option value="month">Last 30 days</option>
              <option value="year">Last 12 months</option>
            </select>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="orders" stroke="#6366f1" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#22c55e" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderManagement;
