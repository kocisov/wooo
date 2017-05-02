import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from '../modules';

export default history => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;

  const middleware = [routerMiddleware(history), thunk];

  const middlewares = process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(reducers, middlewares);

  if (module.hot) {
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
