import _ from 'lodash' // eslint-disable-line

export function selectPlayerPosition(rootState) {
  return _.get(rootState, 'game.player.position', { column: 2, row: 2 })
}
