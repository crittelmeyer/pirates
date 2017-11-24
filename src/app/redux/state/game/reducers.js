import { combineReducers } from 'redux'
import player from './player/reducers'

export const reducers = combineReducers({
  player
})
export * from './player/reducers'
