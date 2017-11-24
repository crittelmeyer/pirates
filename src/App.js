import React from 'react'

import Scene from './components/Scene'

const tiles = [
  ['#', '#', '#', '#', '#'],
  ['#', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '#'],
  ['#', '#', '#', '#', '#']
]

const propTypes = {}
const defaultProps = {}

const App = () => (
  <Scene tiles={tiles} />
)

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App
