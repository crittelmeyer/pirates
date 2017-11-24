import { UPDATE_MAP } from './actions/updateMap'
import updateMapReducer from './reducers/updateMapReducer'

const defaultState = { tiles: [] }

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_MAP:
      return updateMapReducer(state, action)
    default:
      return state
  }
}
