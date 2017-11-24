import React from 'react'
import { mount } from 'enzyme'

import { Game } from 'app/components/Game/Game'
import testProps from 'app/../../stories/docs/Components/Game/testProps'

describe('<Game />', () => {
  const game = mount(<Game {...testProps} />)
  it('should render correctly', () => {
    expect(game).toMatchSnapshot()

    game.setProps({ hide: true })
    expect(game).toMatchSnapshot()
  })
})
