import { INCREMENT_NODE, DECREMENT_NODE } from '../actions/treeActions';

// Tree structure definition
const treeStructure = {
  root: { children: ['left1', 'right1'] },
  left1: { children: ['left2', 'right2'] },
  right1: { children: ['left3', 'right3'] },
  left2: { children: [] },
  right2: { children: [] },
  left3: { children: [] },
  right3: { children: [] },
};

// Initial state
const initialState = {
  nodes: {
    root: 0,
    left1: 0,
    right1: 0,
    left2: 0,
    right2: 0,
    left3: 0,
    right3: 0,
  },
  treeStructure,
};

// Helper function to find parent of a node
const findParent = (targetNodeId, structure) => {
  for (const [parentId, nodeData] of Object.entries(structure)) {
    if (nodeData.children.includes(targetNodeId)) {
      return parentId;
    }
  }
  return null;
};

// Helper function to propagate changes up the tree
const propagateChange = (nodeId, change, nodes, structure) => {
  const newNodes = { ...nodes };
  
  // Update current node
  newNodes[nodeId] += change;
  
  // Propagate up the tree
  let currentNodeId = nodeId;
  while (currentNodeId) {
    const parent = findParent(currentNodeId, structure);
    if (parent) {
      newNodes[parent] += change;
      currentNodeId = parent;
    } else {
      break;
    }
  }
  
  return newNodes;
};

// Tree reducer
const treeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_NODE:
      return {
        ...state,
        nodes: propagateChange(action.payload, 1, state.nodes, state.treeStructure),
      };
    case DECREMENT_NODE:
      return {
        ...state,
        nodes: propagateChange(action.payload, -1, state.nodes, state.treeStructure),
      };
    default:
      return state;
  }
};

export default treeReducer;