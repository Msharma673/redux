import { combineReducers } from 'redux';
import treeReducer from './treeReducer';
import firstLevelReducer from './firstLevelReducer';
import secondLevelReducer from './secondLevelReducer';
import thirdLevelReducer from './thirdLevelReducer';

const rootReducer = combineReducers({
  tree: treeReducer,
  firstLevel: firstLevelReducer,
  secondLevel: secondLevelReducer,
  thirdLevel: thirdLevelReducer,
});

export default rootReducer;