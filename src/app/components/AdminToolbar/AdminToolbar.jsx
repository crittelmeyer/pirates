import React from 'react'
import PropTypes from 'prop-types'

import enhance from './enhance.jsx'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

const propTypes = {
  maps: PropTypes.array,

  onMapChange: PropTypes.func,

  selectedMap: PropTypes.object
}
const defaultProps = {}

const PlainAdminToolbar = ({ maps, selectedMap, onMapChange }) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Tools" />
    </ToolbarGroup>
    <ToolbarGroup>
      <DropDownMenu value={selectedMap.name || ''} onChange={onMapChange}>
        {maps &&
          maps.map((map, index) => (
            <MenuItem
              key={`map_${index}`}
              primaryText={map.name}
              value={map.name}
            />
          ))}
      </DropDownMenu>
    </ToolbarGroup>
  </Toolbar>
)

export const EnhancedAdminToolbar = enhance(PlainAdminToolbar)
export const AdminToolbar = props => <EnhancedAdminToolbar {...props} />

PlainAdminToolbar.propTypes = propTypes
AdminToolbar.propTypes = propTypes
PlainAdminToolbar.defaultProps = defaultProps
AdminToolbar.defaultProps = defaultProps

export default AdminToolbar
