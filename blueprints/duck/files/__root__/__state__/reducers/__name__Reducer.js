import _ from 'lodash' // eslint-disable-line

export default function(state, action) {
  return _.assign(
    {},
    state,
    { foo: 'bar' }
  )
}
