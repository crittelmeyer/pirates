
import { updateScenes } from 'app/redux/state/Collections/scenesactions'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Action: Collections/scenes/updateScenes', () => {
  it('should ...', () => {
    const expectedAction = { type: SOME_ACTION }

    expect(updateScenes()).toEqual(expectedAction)
  })
})
