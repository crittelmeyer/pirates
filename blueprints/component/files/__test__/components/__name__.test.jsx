import React from 'react'
import { mount } from 'enzyme'

import { <%= pascalEntityName %> } from 'app/components/<%= pascalEntityName %>/<%= pascalEntityName %>'
import testProps from 'app/../../stories/docs/Components/<%= pascalEntityName %>/testProps'

describe('<<%= pascalEntityName %> />', () => {
  const <%= camelEntityName %> = mount(<<%= pascalEntityName %> {...testProps} />)
  it('should render correctly', () => {
    expect(<%= camelEntityName %>).toMatchSnapshot()

    <%= camelEntityName %>.setProps({ hide: true })
    expect(<%= camelEntityName %>).toMatchSnapshot()
  })
})
