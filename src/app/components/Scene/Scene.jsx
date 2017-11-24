import React from 'react'
import PropTypes from 'prop-types'
import enhance from './enhance'

const propTypes = {
  id: PropTypes.string.isRequired,

  player: PropTypes.object,

  playerPosition: PropTypes.object,

  tiles: PropTypes.array,

  onSceneRef: PropTypes.func
}
const defaultProps = {}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 30
  },

  row: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const PlainScene = ({ id, player, playerPosition, tiles, onSceneRef }) => (
  <div ref={onSceneRef} style={styles.container}>
    {tiles.map((tileRow, rowIndex) => (
      <div key={`${id}_row_${rowIndex}`} style={styles.row}>
        {tileRow.map((tile, colIndex) => (
          <div key={`${id}_cell_${rowIndex}_${colIndex}`}>
            {playerPosition.row === rowIndex &&
            playerPosition.column === colIndex
              ? player.sprite
              : tile.sprite}
          </div>
        ))}
      </div>
    ))}
  </div>
)

export const EnhancedScene = enhance(PlainScene)
export const Scene = props => <EnhancedScene {...props} />

PlainScene.propTypes = propTypes
Scene.propTypes = propTypes
PlainScene.defaultProps = defaultProps
Scene.defaultProps = defaultProps

export default Scene
