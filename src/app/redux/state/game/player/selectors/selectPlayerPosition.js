import _ from 'lodash' // eslint-disable-line

export function selectPlayerPosition(rootState) {
  return rootState.game.player.position
}
