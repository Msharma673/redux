// redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

// Export actions
export { incrementNode, decrementNode } from './actions/treeActions';
export { incrementFirstLevel, decrementFirstLevel } from './actions/firstLevelActions';
export { incrementSecondLevel, decrementSecondLevel } from './actions/secondLevelActions';
export { incrementThirdLevel, decrementThirdLevel } from './actions/thirdLevelActions';

export const store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
