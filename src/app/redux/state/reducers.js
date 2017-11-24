import { combineReducers } from 'redux'
import { reducers as game } from './game/reducers'
import { reducers as collections } from './collections/reducers'

export default combineReducers({
  game,
  collections
})
