import { UPDATE_MAPS } from './actions/updateMaps'
import updateMapsReducer from './reducers/updateMapsReducer'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_MAPS:
      return updateMapsReducer(state, action)
    default:
      return state
  }
}
