import { INCREMENT_FIRST_LEVEL, DECREMENT_FIRST_LEVEL } from '../actions/firstLevelActions';
import { INCREMENT_SECOND_LEVEL, DECREMENT_SECOND_LEVEL } from '../actions/secondLevelActions';
import { INCREMENT_THIRD_LEVEL, DECREMENT_THIRD_LEVEL } from '../actions/thirdLevelActions';

const initialState = {
  ownCount: 0,
  secondLevelCount: 0,
  thirdLevelCount: 0,
  totalCount: 0,
};

const firstLevelReducer = (state = initialState, action) => {
  let newState;
  
  switch (action.type) {
    case INCREMENT_FIRST_LEVEL:
      newState = {
        ...state,
        ownCount: state.ownCount + 1,
      };
      break;
    case DECREMENT_FIRST_LEVEL:
      newState = {
        ...state,
        ownCount: state.ownCount - 1,
      };
      break;
    case INCREMENT_SECOND_LEVEL:
      newState = {
        ...state,
        secondLevelCount: state.secondLevelCount + 1,
      };
      break;
    case DECREMENT_SECOND_LEVEL:
      newState = {
        ...state,
        secondLevelCount: state.secondLevelCount - 1,
      };
      break;
    case INCREMENT_THIRD_LEVEL:
      newState = {
        ...state,
        thirdLevelCount: state.thirdLevelCount + 1,
      };
      break;
    case DECREMENT_THIRD_LEVEL:
      newState = {
        ...state,
        thirdLevelCount: state.thirdLevelCount - 1,
      };
      break;
    default:
      return state;
  }
  
  // Calculate total count
  newState.totalCount = newState.ownCount + newState.secondLevelCount + newState.thirdLevelCount;
  
  return newState;
};

export default firstLevelReducer;