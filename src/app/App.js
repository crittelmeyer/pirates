import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'

import enhance from './enhance'
import store from 'app/redux/store'

import AdminToolbar from 'app/components/AdminToolbar'
import Game from 'app/components/Game'

const propTypes = {}
const defaultProps = {}

const PlainApp = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <AdminToolbar />
        <Game id="main" />
      </div>
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
