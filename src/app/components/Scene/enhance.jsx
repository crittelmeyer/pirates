import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import { selectPlayerPosition } from 'app/redux/selectors'
import { UPDATE_PLAYER_POSITION } from 'app/redux/actions'

const ARROW_LEFT = 37
const ARROW_UP = 38
const ARROW_RIGHT = 39
const ARROW_DOWN = 40

const enhance = compose(
  connect(
    state => ({ playerPosition: selectPlayerPosition(state) }),
    dispatch => ({
      setPlayerPosition: position =>
        dispatch({ type: UPDATE_PLAYER_POSITION, position })
    })
  ),
  lifecycle({
    componentDidMount: function() {
      window.addEventListener('keyup', event => {
        switch (event.keyCode) {
          case ARROW_LEFT:
            this.props.setPlayerPosition({
              column: this.props.playerPosition.column - 1,
              row: this.props.playerPosition.row
            })
            break
          case ARROW_UP:
            this.props.setPlayerPosition({
              column: this.props.playerPosition.column,
              row: this.props.playerPosition.row - 1
            })
            break
          case ARROW_RIGHT:
            this.props.setPlayerPosition({
              column: this.props.playerPosition.column + 1,
              row: this.props.playerPosition.row
            })
            break
          case ARROW_DOWN:
            this.props.setPlayerPosition({
              column: this.props.playerPosition.column,
              row: this.props.playerPosition.row + 1
            })
            break
          default:
            break
        }
      })
    }
  })
)

export default enhance
