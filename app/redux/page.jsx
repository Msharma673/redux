"use client";
import React from 'react';
import BinaryTreeRedux from '@/components/StateManagement/BinaryTreeRedux';
import Link from 'next/link';

const ReduxPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-purple-600 hover:text-purple-800 font-semibold">
              ← Back to Home
            </Link>
            <Link href="/usestate" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Try useState Approach →
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
            🏪 Redux Binary Tree Demo
          </h1>
          <p className="text-center text-gray-600 text-lg mb-6">
            Managing binary tree state with Redux global state management and centralized logic
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div>
        <BinaryTreeRedux />
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            🏪 Redux Approach Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Global state management</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Centralized logic in reducers</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">State persists across component changes</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Better for complex applications</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Time-travel debugging capabilities</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-500">ℹ️</span>
                <span className="text-gray-700">Predictable state updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReduxPage;