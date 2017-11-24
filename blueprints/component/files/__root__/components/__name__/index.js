import React from 'react'
import angular from 'angular'
import { react2angular } from 'react2angular'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import bcLightTheme from 'assets/styles/js/bcLightTheme'
import Enhanced<%= pascalEntityName %> from './<%= pascalEntityName %>.jsx'

const <%= pascalEntityName %> = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(bcLightTheme)}>
    <Enhanced<%= pascalEntityName %> {...props} />
  </MuiThemeProvider>
)

<%= pascalEntityName %>.propTypes = Enhanced<%= pascalEntityName %>.propTypes

try {
  angular.module('betterCloudApp')
  .component('bc<%= pascalEntityName %>', react2angular(<%= pascalEntityName %>))
} catch (err) {} // eslint-disable-line

export default <%= pascalEntityName %>
