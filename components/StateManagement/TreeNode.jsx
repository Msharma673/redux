"use client";
// components/TreeNode.js
import { useState } from 'react';

const TreeNode = ({ value, level, updateParentValue }) => {
  const [nodeValue, setNodeValue] = useState(value);

  const handleIncrement = () => {
    setNodeValue(nodeValue + 1);
    if (level > 1) {
      updateParentValue(1);
    }
  };

  const handleDecrement = () => {
    setNodeValue(nodeValue - 1);
    if (level > 1) {
      updateParentValue(-1);
    }
  };

  return (
    <div className={`flex flex-col items-center`}>
      <div className="flex items-center space-x-2">
        <button
          className="bg-green-500 text-white px-2 py-1 rounded-full"
          onClick={handleIncrement}
        >
          +
        </button>
        <div className="bg-green-300 text-white p-2 rounded-full">{nodeValue}</div>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-full"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      <div>{level > 1 && <span className="text-sm text-gray-600">Level {level}</span>}</div>
    </div>
  );
};

export default TreeNode;
