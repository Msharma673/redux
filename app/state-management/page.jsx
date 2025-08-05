"use client";
import React, { useState } from 'react';
import BinaryTreeUseState from '@/components/StateManagement/BinaryTreeUseState';
import BinaryTreeRedux from '@/components/StateManagement/BinaryTreeRedux';

const StateManagementPage = () => {
  const [activeTab, setActiveTab] = useState('useState');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            🌳 Binary Tree State Management Demo
          </h1>
          <p className="text-center text-gray-600 text-lg mb-6">
            Compare useState vs Redux approaches for managing binary tree state with value propagation
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('useState')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'useState'
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-md'
              }`}
            >
              📊 useState Approach
            </button>
            <button
              onClick={() => setActiveTab('redux')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'redux'
                  ? 'bg-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-md'
              }`}
            >
              🏪 Redux Approach
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="transition-all duration-500 ease-in-out">
        {activeTab === 'useState' && <BinaryTreeUseState />}
        {activeTab === 'redux' && <BinaryTreeRedux />}
      </div>

      {/* Feature Comparison */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            🔍 Feature Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* useState Features */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                📊 useState Approach
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Local component state management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Custom propagation logic with callbacks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Simpler setup, no external dependencies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Good for smaller, isolated tree structures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-500">⚠️</span>
                  <span>State resets on component unmount</span>
                </li>
              </ul>
            </div>

            {/* Redux Features */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                🏪 Redux Approach
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Global state management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Centralized logic in reducers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>State persists across component changes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Better for complex applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Time-travel debugging capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How it Works */}
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3">🔧 How Value Propagation Works:</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>1. Click Action:</strong> When you click + or - on any node, it triggers a value change.</p>
              <p><strong>2. Node Update:</strong> The clicked node's value increases/decreases by 1.</p>
              <p><strong>3. Upward Propagation:</strong> The change automatically propagates to all parent nodes up to the root.</p>
              <p><strong>4. Visual Update:</strong> All affected nodes update their display in real-time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateManagementPage;