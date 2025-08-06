// ThirdLevel action types
export const INCREMENT_THIRD_LEVEL = 'INCREMENT_THIRD_LEVEL';
export const DECREMENT_THIRD_LEVEL = 'DECREMENT_THIRD_LEVEL';

// ThirdLevel action creators
export const incrementThirdLevel = () => ({
  type: INCREMENT_THIRD_LEVEL,
});

export const decrementThirdLevel = () => ({
  type: DECREMENT_THIRD_LEVEL,
});