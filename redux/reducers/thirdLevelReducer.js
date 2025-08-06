import { INCREMENT_THIRD_LEVEL, DECREMENT_THIRD_LEVEL } from '../actions/thirdLevelActions';

// Initial state for ThirdLevel
const initialState = {
  count: 0,
};

// ThirdLevel reducer
const thirdLevelReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_THIRD_LEVEL:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_THIRD_LEVEL:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default thirdLevelReducer;