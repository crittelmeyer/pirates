import React from 'react'
import PropTypes from 'prop-types'

import enhance from './enhance.jsx'

import Scene from 'app/components/Scene'

const propTypes = {
  id: PropTypes.string.isRequired
}
const defaultProps = {}

const PlainGame = ({ id }) => <Scene id={id} />

export const EnhancedGame = enhance(PlainGame)
export const Game = props => <EnhancedGame {...props} />

PlainGame.propTypes = propTypes
Game.propTypes = propTypes
PlainGame.defaultProps = defaultProps
Game.defaultProps = defaultProps

export default Game
