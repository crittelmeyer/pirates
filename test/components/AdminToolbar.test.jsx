import React from 'react'
import { mount } from 'enzyme'

import { AdminToolbar } from 'app/components/AdminToolbar/AdminToolbar'
import testProps from 'app/../../stories/docs/Components/AdminToolbar/testProps'

describe('<AdminToolbar />', () => {
  const adminToolbar = mount(<AdminToolbar {...testProps} />)
  it('should render correctly', () => {
    expect(adminToolbar).toMatchSnapshot()

    adminToolbar.setProps({ hide: true })
    expect(adminToolbar).toMatchSnapshot()
  })
})
