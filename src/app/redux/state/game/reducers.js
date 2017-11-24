import { combineReducers } from 'redux'
import map from './map/reducers'
import player from './player/reducers'

export const reducers = combineReducers({
  map,
  player
})

export * from './map/reducers'
export * from './player/reducers'
