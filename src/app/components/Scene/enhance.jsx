import { compose, lifecycle, withState } from 'recompose'
import { connect } from 'react-redux'

import { selectMap, selectPlayerPosition } from 'app/redux/selectors'
import { updatePlayerPosition } from 'app/redux/actions'

const ARROW_LEFT = 37
const ARROW_UP = 38
const ARROW_RIGHT = 39
const ARROW_DOWN = 40

const enhance = compose(
  withState('player', 'setPlayer', { sprite: '@' }),
  connect(
    state => ({
      map: selectMap(state),
      playerPosition: selectPlayerPosition(state)
    }),
    dispatch => ({
      setPlayerPosition: position => dispatch(updatePlayerPosition(position))
    })
  ),
  lifecycle({
    componentDidMount: function() {
      window.addEventListener('keyup', event => {
        const { map, playerPosition, setPlayerPosition } = this.props
        let newPlayerPosition

        switch (event.keyCode) {
          case ARROW_LEFT:
            newPlayerPosition = {
              column: playerPosition.column - 1,
              row: playerPosition.row
            }
            break
          case ARROW_UP:
            newPlayerPosition = {
              column: playerPosition.column,
              row: playerPosition.row - 1
            }
            break
          case ARROW_RIGHT:
            newPlayerPosition = {
              column: playerPosition.column + 1,
              row: playerPosition.row
            }
            break
          case ARROW_DOWN:
            newPlayerPosition = {
              column: playerPosition.column,
              row: playerPosition.row + 1
            }
            break
          default:
            break
        }

        if (
          newPlayerPosition &&
          !map.tiles[newPlayerPosition.row][newPlayerPosition.column].wall
        ) {
          setPlayerPosition(newPlayerPosition)
        }
      })
    }
  })
)

export default enhance
