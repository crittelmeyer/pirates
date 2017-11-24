import _ from 'lodash' // eslint-disable-line
import {
  branch,
  compose,
  lifecycle,
  renderNothing,
  withHandlers
} from 'recompose'
import { connect } from 'react-redux'

import { selectMaps, selectMap } from 'app/redux/selectors'
import { updateMap } from 'app/redux/actions'

const enhance = compose(
  connect(
    state => ({
      maps: selectMaps(state),
      selectedMap: selectMap(state)
    }),
    dispatch => ({ setMap: map => dispatch(updateMap(map)) })
  ),
  branch(props => props.hide, renderNothing),
  lifecycle({
    componentDidMount: function() {}
  }),
  withHandlers({
    onMapChange: ({ maps, setMap }) => (event, index, value) => {
      setMap(_.find(maps, { name: value }))
    }
  })
)

export default enhance
