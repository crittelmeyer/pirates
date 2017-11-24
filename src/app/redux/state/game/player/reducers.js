import { UPDATE_PLAYER_POSITION } from './actions/updatePlayerPosition'
import updatePlayerPositionReducer from './reducers/updatePlayerPositionReducer'

const defaultState = { appConfigLoaded: false }

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PLAYER_POSITION:
      return updatePlayerPositionReducer(state, action)
    default:
      return state
  }
}
