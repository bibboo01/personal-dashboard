"use client";

import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState([
    { label: 'Total Users', value: 12543, change: '+12%', trend: 'up' },
    { label: 'Revenue', value: 89750, change: '+8%', trend: 'up' },
    { label: 'Orders', value: 2847, change: '-3%', trend: 'down' },
    { label: 'Conversion', value: 3.2, change: '+15%', trend: 'up' }
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const chartData = [
    { month: 'Jan', revenue: 4000, users: 240 },
    { month: 'Feb', revenue: 3000, users: 139 },
    { month: 'Mar', revenue: 2000, users: 980 },
    { month: 'Apr', revenue: 2780, users: 390 },
    { month: 'May', revenue: 1890, users: 480 },
    { month: 'Jun', revenue: 2390, users: 380 }
  ];

  const activities = [
    { user: 'John Doe', action: 'completed purchase', time: '2 minutes ago', avatar: '👤' },
    { user: 'Sarah Chen', action: 'signed up', time: '5 minutes ago', avatar: '👩' },
    { user: 'Mike Johnson', action: 'left review', time: '12 minutes ago', avatar: '👨' },
    { user: 'Emma Wilson', action: 'updated profile', time: '1 hour ago', avatar: '👩‍💼' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Dashboard
            </h1>
            <p className="text-blue-200">
              Welcome back! Here's what's happening today.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="text-white text-lg font-semibold">
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="text-blue-200 text-sm">
              {currentTime.toLocaleDateString('th-TH', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">
                  {index === 0 && '👥'}
                  {index === 1 && '💰'}
                  {index === 2 && '📦'}
                  {index === 3 && '📈'}
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  stat.trend === 'up' 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-red-500/20 text-red-300'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">
                  {typeof stat.value === 'number' && stat.value > 1000 
                    ? `${(stat.value / 1000).toFixed(1)}K` 
                    : stat.value}
                  {stat.label === 'Revenue' && '$'}
                  {stat.label === 'Conversion' && '%'}
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Revenue Overview</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-lg text-sm hover:bg-blue-500/50 transition-colors">
                  Week
                </button>
                <button className="px-3 py-1 bg-white/20 text-white rounded-lg text-sm hover:bg-white/30 transition-colors">
                  Month
                </button>
                <button className="px-3 py-1 bg-white/10 text-blue-200 rounded-lg text-sm hover:bg-white/20 transition-colors">
                  Year
                </button>
              </div>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="space-y-4">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 text-blue-200 text-sm font-medium">{item.month}</div>
                  <div className="flex-1 bg-white/10 rounded-full h-8 relative overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out flex items-center px-3"
                      style={{ width: `${(item.revenue / 4000) * 100}%` }}
                    >
                      <span className="text-white text-xs font-semibold">
                        ${item.revenue}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-2xl">{activity.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm">
                      <span className="font-semibold">{activity.user}</span>{' '}
                      <span className="text-blue-200">{activity.action}</span>
                    </p>
                    <p className="text-blue-300 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-blue-200 hover:text-white text-sm hover:bg-white/10 rounded-lg transition-colors">
              View All Activities →
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: '➕', label: 'Add User', color: 'from-green-500 to-teal-500' },
              { icon: '📊', label: 'Analytics', color: 'from-blue-500 to-purple-500' },
              { icon: '⚙️', label: 'Settings', color: 'from-gray-500 to-gray-600' },
              { icon: '📧', label: 'Messages', color: 'from-pink-500 to-rose-500' },
              { icon: '🔔', label: 'Notifications', color: 'from-yellow-500 to-orange-500' },
              { icon: '💾', label: 'Backup', color: 'from-indigo-500 to-blue-500' }
            ].map((action, index) => (
              <button
                key={index}
                className={`bg-gradient-to-br ${action.color} p-4 rounded-xl text-white hover:scale-105 transform transition-all duration-200 hover:shadow-xl`}
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <div className="text-sm font-medium">{action.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Status Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">System Status</h3>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-blue-200">
                <span>Server</span>
                <span className="text-green-300">Online</span>
              </div>
              <div className="flex justify-between text-blue-200">
                <span>Database</span>
                <span className="text-green-300">Connected</span>
              </div>
              <div className="flex justify-between text-blue-200">
                <span>API</span>
                <span className="text-green-300">Healthy</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">Storage</h3>
              <span className="text-blue-200 text-sm">78% used</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <p className="text-blue-200 text-xs">156 GB of 200 GB used</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">Performance</h3>
              <span className="text-green-300 text-sm">Excellent</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-blue-200">
                <span>Load Time</span>
                <span className="text-white">1.2s</span>
              </div>
              <div className="flex justify-between text-blue-200">
                <span>Uptime</span>
                <span className="text-white">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}