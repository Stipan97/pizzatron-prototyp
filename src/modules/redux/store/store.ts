import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { currentUserReducer } from '../reducers/currentUserReducer';
import { pizzaReducer } from '../reducers/pizzaReducer';

export const store = createStore(
  combineReducers({
    user: currentUserReducer,
    pizza: pizzaReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
