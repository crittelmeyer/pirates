import React from 'react'
import PropTypes from 'prop-types'
import enhance from './enhance'

const propTypes = {
  id: PropTypes.string.isRequired,

  tiles: PropTypes.array
}
const defaultProps = {}

const styles = {
  container: {
    display: 'flex'
  }
}

const PlainScene = ({ id, tiles }) => (
  <div style={styles.container}>
    {tiles.map((tileRow, rowIndex) => (
      <div key={`${id}_row_${rowIndex}`}>
        {tileRow.map((tile, colIndex) => (
          <div key={`${id}_cell_${rowIndex}_${colIndex}`}>{tile}</div>
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
