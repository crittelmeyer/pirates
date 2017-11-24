export const UPDATE_PLAYER_POSITION = 'UPDATE_PLAYER_POSITION'

export function updatePlayerPosition(position) {
  return { type: UPDATE_PLAYER_POSITION, position }
}
