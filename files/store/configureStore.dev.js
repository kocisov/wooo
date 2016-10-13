import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../modules'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
}
