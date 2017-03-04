import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../modules'
import thunk from 'redux-thunk'

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)
