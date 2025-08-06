// SecondLevel action types
export const INCREMENT_SECOND_LEVEL = 'INCREMENT_SECOND_LEVEL';
export const DECREMENT_SECOND_LEVEL = 'DECREMENT_SECOND_LEVEL';

// SecondLevel action creators
export const incrementSecondLevel = () => ({
  type: INCREMENT_SECOND_LEVEL,
});

export const decrementSecondLevel = () => ({
  type: DECREMENT_SECOND_LEVEL,
});