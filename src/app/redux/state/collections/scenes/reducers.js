import { UPDATE_SCENES } from './actions/updateScenes'
import updateScenesReducer from './reducers/updateScenesReducer'

const defaultState = { appConfigLoaded: false }

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SCENES:
      return updateScenesReducer(state, action)
    default:
      return state
  }
}
