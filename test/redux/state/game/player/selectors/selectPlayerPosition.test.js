
import { selectPlayerPosition } from 'app/redux/state/Game/playerselectors'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Selector: selectPlayerPosition', () => {
  it('should create a selector that returns ...', () => {
    const expectedValue1 = { foo: 'bar' }

    expect(selectPlayerPosition(testState1)).toEqual(expectedValue1)
  })
})
