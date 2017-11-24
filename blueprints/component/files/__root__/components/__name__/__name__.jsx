import React from 'react'
import PropTypes from 'prop-types'

import enhance from './enhance.jsx'
import bcLightTheme from 'assets/styles/js/bcLightTheme'

const propTypes = {

  /** The name to say hello to */
  name: PropTypes.string
}
const defaultProps = {
  name: 'World'
}

const styles = {
  container: {
    fontWeight: 'bold'
  }
}

const Plain<%= pascalEntityName %> = ({ name }) => <div style={styles.container}>Hello, {name}</div>

export const Enhanced<%= pascalEntityName %> = enhance(Plain<%= pascalEntityName %>)
export const <%= pascalEntityName %> = (props) => <Enhanced<%= pascalEntityName %> {...props} />

Plain<%= pascalEntityName %>.propTypes = propTypes
<%= pascalEntityName %>.propTypes = propTypes
Plain<%= pascalEntityName %>.defaultProps = defaultProps
<%= pascalEntityName %>.defaultProps = defaultProps

export default <%= pascalEntityName %>
