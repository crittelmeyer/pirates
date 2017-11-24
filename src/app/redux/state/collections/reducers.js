import { combineReducers } from 'redux'
import maps from './maps/reducers'

export const reducers = combineReducers({
  maps
})
export * from './maps/reducers'
