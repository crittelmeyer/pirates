import { compose, lifecycle, withHandlers, withState } from 'recompose'

const ARROW_LEFT = 37
const ARROW_UP = 38
const ARROW_RIGHT = 39
const ARROW_DOWN = 40

const enhance = compose(
  withState('playerPosition', 'setPlayerPosition', { column: 2, row: 2 }),
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
