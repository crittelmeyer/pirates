import { combineReducers } from 'redux'
import scenes from './scenes/reducers'

export const reducers = combineReducers({
  scenes
})
export * from './scenes/reducers'
