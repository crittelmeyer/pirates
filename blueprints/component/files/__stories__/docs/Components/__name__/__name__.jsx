import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import ReactMarkdown from 'react-markdown'

import bcLightTheme from 'assets/styles/js/bcLightTheme'
import { <%= pascalEntityName %> } from 'app/components/<%= pascalEntityName %>/<%= pascalEntityName %>'
import <%= pascalEntityName %>Readme from 'app/components/<%= pascalEntityName %>/README.md'
import reactInfoConfig from '../reactInfo.config.js'
import testProps from './testProps'

const <%= camelEntityName %>Props = () => ({ hide: boolean('hide', testProps.hide) })

storiesOf('Components', module)
.addDecorator(muiTheme(bcLightTheme))
.addDecorator(withKnobs)
.addWithInfo(
  '<%= pascalEntityName %>',
  <ReactMarkdown source={<%= pascalEntityName %>Readme} />,
  () => <<%= pascalEntityName %> {...<%= camelEntityName %>Props()} />,
  reactInfoConfig
)
