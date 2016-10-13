import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loadingStatus from './loadingStatus'

export default combineReducers({
  loadingStatus,
  routing: routerReducer
})