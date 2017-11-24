import { updateMaps } from 'app/redux/state/collections/maps/actions'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Action: collections/maps/updateMaps', () => {
  it('should ...', () => {
    const expectedAction = { type: SOME_ACTION }

    expect(updateMaps()).toEqual(expectedAction)
  })
})
