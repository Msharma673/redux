"use client";
import { useSelector, useDispatch } from 'react-redux';
import { incrementNode, decrementNode } from '../../redux/store';

const ReduxTreeNode = ({ nodeId, level, children }) => {
  const dispatch = useDispatch();
  const nodeValue = useSelector(state => state.nodes[nodeId]);

  const handleIncrement = () => {
    dispatch(incrementNode(nodeId));
  };

  const handleDecrement = () => {
    dispatch(decrementNode(nodeId));
  };

  const getBgColor = () => {
    switch (level) {
      case 0: return 'bg-indigo-500';
      case 1: return 'bg-teal-500';
      case 2: return 'bg-pink-500';
      case 3: return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getTextColor = () => {
    switch (level) {
      case 0: return 'text-indigo-800';
      case 1: return 'text-teal-800';
      case 2: return 'text-pink-800';
      case 3: return 'text-yellow-800';
      default: return 'text-gray-800';
    }
  };

  const getGradientBg = () => {
    switch (level) {
      case 0: return 'bg-gradient-to-br from-indigo-400 to-indigo-600';
      case 1: return 'bg-gradient-to-br from-teal-400 to-teal-600';
      case 2: return 'bg-gradient-to-br from-pink-400 to-pink-600';
      case 3: return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
      default: return 'bg-gradient-to-br from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Node Display */}
      <div className="flex flex-col items-center space-y-3">
        <div className={`px-6 py-3 rounded-xl shadow-xl ${getGradientBg()} text-white font-bold text-xl min-w-20 text-center border-2 border-white/20`}>
          {nodeValue}
        </div>
        <div className={`text-xs font-bold ${getTextColor()} bg-white/80 px-2 py-1 rounded-full`}>
          Level {level} - {nodeId.toUpperCase()}
        </div>
        
        {/* Control Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleIncrement}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ➕ +1
          </button>
          <button
            onClick={handleDecrement}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ➖ -1
          </button>
        </div>
      </div>

      {/* Children Nodes */}
      {children && children.length > 0 && (
        <>
          {/* Connection Lines */}
          <div className="relative">
            <div className="w-px h-8 bg-gray-400 mx-auto"></div>
            <div className="w-24 h-px bg-gray-400 absolute top-8 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="flex space-x-12">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

const BinaryTreeRedux = () => {
  const treeStructure = useSelector(state => state.treeStructure);
  const allNodes = useSelector(state => state.nodes);

  const renderNode = (nodeId, level = 0) => {
    const nodeData = treeStructure[nodeId];
    if (!nodeData) return null;

    const children = nodeData.children.map(childId => 
      renderNode(childId, level + 1)
    );

    return (
      <ReduxTreeNode
        key={nodeId}
        nodeId={nodeId}
        level={level}
        children={children.length > 0 ? children : null}
      />
    );
  };

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Binary Tree - Redux Approach
          </h1>
          <p className="text-gray-600 text-lg">Redux state management with automatic propagation up the tree</p>
          <div className="mt-4 inline-block bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
            <span className="text-sm font-medium text-gray-700">
              💡 Click any + or - button to see values propagate to parent nodes
            </span>
          </div>
        </div>
        
        <div className="flex justify-center mb-12">
          {renderNode('root')}
        </div>

        {/* Redux State Display */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            🏪 Redux Store State (Live Updates)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Object.entries(allNodes).map(([nodeId, value]) => (
              <div key={nodeId} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-gray-800 text-center text-sm mb-1">
                  {nodeId.toUpperCase()}
                </div>
                <div className="text-3xl font-bold text-center">
                  <span className={`${value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Action Log */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 text-center">
              <strong>How it works:</strong> When you click a button on any node, that node's value changes 
              and the change propagates up to all its parent nodes automatically via Redux actions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryTreeRedux;