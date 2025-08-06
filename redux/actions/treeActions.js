// Action types
export const INCREMENT_NODE = 'INCREMENT_NODE';
export const DECREMENT_NODE = 'DECREMENT_NODE';

// Action creators
export const incrementNode = (nodeId) => ({
  type: INCREMENT_NODE,
  payload: nodeId,
});

export const decrementNode = (nodeId) => ({
  type: DECREMENT_NODE,
  payload: nodeId,
});