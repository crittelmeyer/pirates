import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'

import enhance from './enhance'
import store from './redux/store'

import Scene from './components/Scene'

const tiles = [
  [
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' }
  ],
  [
    { sprite: '#' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '#' }
  ],
  [
    { sprite: '#' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '#' }
  ],
  [
    { sprite: '#' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '.' },
    { sprite: '#' }
  ],
  [
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' },
    { sprite: '#' }
  ]
]

const player = {
  sprite: '@'
}

const propTypes = { playerPosition: PropTypes.object }
const defaultProps = {}

const PlainApp = ({ playerPosition }) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Scene id="main" player={player} tiles={tiles} />
    </MuiThemeProvider>
  </Provider>
)

export const EnhancedApp = enhance(PlainApp)
export const App = props => <EnhancedApp {...props} />

PlainApp.propTypes = propTypes
App.propTypes = propTypes
PlainApp.defaultProps = defaultProps
App.defaultProps = defaultProps

export default App
