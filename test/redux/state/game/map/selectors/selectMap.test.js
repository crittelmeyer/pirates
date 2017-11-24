
import { selectMap } from 'app/redux/state/Game/mapselectors'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Selector: selectMap', () => {
  it('should create a selector that returns ...', () => {
    const expectedValue1 = { foo: 'bar' }

    expect(selectMap(testState1)).toEqual(expectedValue1)
  })
})
