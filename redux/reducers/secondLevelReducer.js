import { INCREMENT_SECOND_LEVEL, DECREMENT_SECOND_LEVEL } from '../actions/secondLevelActions';

// Initial state for SecondLevel
const initialState = {
  count: 0,
};

// SecondLevel reducer
const secondLevelReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SECOND_LEVEL:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_SECOND_LEVEL:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default secondLevelReducer;