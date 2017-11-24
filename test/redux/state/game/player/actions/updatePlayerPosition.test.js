
import { updatePlayerPosition } from 'app/redux/state/Game/playeractions'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Action: Game/player/updatePlayerPosition', () => {
  it('should ...', () => {
    const expectedAction = { type: SOME_ACTION }

    expect(updatePlayerPosition()).toEqual(expectedAction)
  })
})
