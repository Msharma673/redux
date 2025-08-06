"use client";
import React from 'react';
import BinaryTreeUseState from '@/components/StateManagement/BinaryTreeUseState';
import Link from 'next/link';

const UseStatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
              ← Back to Home
            </Link>
            <Link href="/redux" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              Try Redux Approach →
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            📊 useState Binary Tree Demo
          </h1>
          <p className="text-center text-gray-600 text-lg mb-6">
            Managing binary tree state with React's built-in useState hook and callback propagation
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div>
        <BinaryTreeUseState />
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            📊 useState Approach Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Local component state management</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Custom propagation logic with callbacks</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Simpler setup, no external dependencies</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Good for smaller, isolated tree structures</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-500">⚠️</span>
                <span className="text-gray-700">State resets on component unmount</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-500">ℹ️</span>
                <span className="text-gray-700">Direct parent-child communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStatePage;