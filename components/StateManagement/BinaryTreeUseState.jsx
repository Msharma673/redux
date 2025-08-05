"use client";
import { useState, useCallback } from 'react';

const TreeNode = ({ nodeId, value, onValueChange, level, children }) => {
  const [localValue, setLocalValue] = useState(value);

  const handleIncrement = useCallback(() => {
    const newValue = localValue + 1;
    setLocalValue(newValue);
    onValueChange(nodeId, 1);
  }, [localValue, nodeId, onValueChange]);

  const handleDecrement = useCallback(() => {
    const newValue = localValue - 1;
    setLocalValue(newValue);
    onValueChange(nodeId, -1);
  }, [localValue, nodeId, onValueChange]);

  const getBgColor = () => {
    switch (level) {
      case 0: return 'bg-blue-500';
      case 1: return 'bg-green-500';
      case 2: return 'bg-purple-500';
      case 3: return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getTextColor = () => {
    switch (level) {
      case 0: return 'text-blue-800';
      case 1: return 'text-green-800';
      case 2: return 'text-purple-800';
      case 3: return 'text-orange-800';
      default: return 'text-gray-800';
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Node Display */}
      <div className="flex flex-col items-center space-y-2">
        <div className={`px-4 py-2 rounded-lg shadow-lg ${getBgColor()} text-white font-bold text-lg min-w-16 text-center`}>
          {localValue}
        </div>
        <div className={`text-xs font-semibold ${getTextColor()}`}>
          Level {level} - Node {nodeId}
        </div>
        
        {/* Control Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleIncrement}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full font-bold text-sm transition-colors duration-200 shadow-md"
          >
            +
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full font-bold text-sm transition-colors duration-200 shadow-md"
          >
            -
          </button>
        </div>
      </div>

      {/* Children Nodes */}
      {children && children.length > 0 && (
        <div className="flex space-x-8">
          {children}
        </div>
      )}
    </div>
  );
};

const BinaryTreeUseState = () => {
  const [treeData, setTreeData] = useState({
    root: { value: 0, children: ['left1', 'right1'] },
    left1: { value: 0, children: ['left2', 'right2'] },
    right1: { value: 0, children: ['left3', 'right3'] },
    left2: { value: 0, children: [] },
    right2: { value: 0, children: [] },
    left3: { value: 0, children: [] },
    right3: { value: 0, children: [] },
  });

  const propagateValueChange = useCallback((nodeId, change) => {
    setTreeData(prevData => {
      const newData = { ...prevData };
      
      // Function to find parent of a node
      const findParent = (targetNodeId) => {
        for (const [parentId, nodeData] of Object.entries(newData)) {
          if (nodeData.children.includes(targetNodeId)) {
            return parentId;
          }
        }
        return null;
      };

      // Propagate change up the tree
      const propagateUp = (currentNodeId, changeValue) => {
        const parent = findParent(currentNodeId);
        if (parent) {
          newData[parent].value += changeValue;
          propagateUp(parent, changeValue);
        }
      };

      // Update current node and propagate up
      newData[nodeId].value += change;
      propagateUp(nodeId, change);

      return newData;
    });
  }, []);

  const renderNode = (nodeId, level = 0) => {
    const nodeData = treeData[nodeId];
    if (!nodeData) return null;

    const children = nodeData.children.map(childId => 
      renderNode(childId, level + 1)
    );

    return (
      <TreeNode
        key={nodeId}
        nodeId={nodeId}
        value={nodeData.value}
        onValueChange={propagateValueChange}
        level={level}
        children={children.length > 0 ? children : null}
      />
    );
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Binary Tree - useState Approach</h1>
          <p className="text-gray-600">Click + or - buttons to see values propagate up the tree</p>
        </div>
        
        <div className="flex justify-center">
          {renderNode('root')}
        </div>

        {/* Tree Data Display */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Tree State (Real-time)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(treeData).map(([nodeId, nodeData]) => (
              <div key={nodeId} className="bg-gray-50 p-3 rounded-lg border">
                <div className="font-medium text-gray-800">{nodeId}</div>
                <div className="text-2xl font-bold text-blue-600">{nodeData.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryTreeUseState;