import { UPDATE_PLAYER_POSITION } from './actions/updatePlayerPosition'
import updatePlayerPositionReducer from './reducers/updatePlayerPositionReducer'

const defaultState = { position: { column: 2, row: 2 } }

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PLAYER_POSITION:
      return updatePlayerPositionReducer(state, action)
    default:
      return state
  }
}
