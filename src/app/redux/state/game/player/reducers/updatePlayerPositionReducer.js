import _ from 'lodash' // eslint-disable-line

export default function(state, action) {
  const { position } = action

  return {
    ...state,
    position
  }
}
