
import { updateMap } from 'app/redux/state/Game/mapactions'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Action: Game/map/updateMap', () => {
  it('should ...', () => {
    const expectedAction = { type: SOME_ACTION }

    expect(updateMap()).toEqual(expectedAction)
  })
})
