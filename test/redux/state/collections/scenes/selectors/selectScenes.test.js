
import { selectScenes } from 'app/redux/state/Collections/scenesselectors'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Selector: selectScenes', () => {
  it('should create a selector that returns ...', () => {
    const expectedValue1 = { foo: 'bar' }

    expect(selectScenes(testState1)).toEqual(expectedValue1)
  })
})
