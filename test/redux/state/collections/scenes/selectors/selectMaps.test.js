import { selectMaps } from 'app/redux/state/collections/maps/selectors'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Selector: selectMaps', () => {
  it('should create a selector that returns ...', () => {
    const expectedValue1 = { foo: 'bar' }

    expect(selectMaps(testState1)).toEqual(expectedValue1)
  })
})
