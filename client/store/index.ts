import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import localForage from 'localforage';

import Pages from '../pages';


const persistConfig = {
  key: 'root',
  storage: localForage,
};


const reducers: object = Object.values(Pages).reduce((accumulator, Page) => {
  const { reducer } = Page;

  return { ...accumulator, ...(reducer || {}) };
}, {});
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);


export type RootState = ReturnType<typeof rootReducer>;
export { persistor };
export default store;
