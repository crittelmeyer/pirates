import { combineReducers } from 'redux'
import { reducers as app } from './app/reducers'
import { reducers as collections } from './collections/reducers'
import { reducers as ui } from './ui/reducers'

export default combineReducers({
  app,
  collections,
  ui
})
