import _ from 'lodash' // eslint-disable-line
import { branch, compose, lifecycle, renderNothing } from 'recompose'
import { connect } from 'react-redux'

import { updateMaps, updateMap } from 'app/redux/actions'

const testMaps = [
  {
    name: 'foo',
    tiles: [
      [
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true }
      ],
      [
        { sprite: '#', wall: true },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '#', wall: true }
      ],
      [
        { sprite: '#', wall: true },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '#', wall: true }
      ],
      [
        { sprite: '#', wall: true },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '#', wall: true }
      ],
      [
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true },
        { sprite: '#', wall: true }
      ]
    ]
  },
  {
    name: 'bar',
    tiles: [
      [
        { sprite: '#' },
        { sprite: '#' },
        { sprite: '#' },
        { sprite: '#' },
        { sprite: '#' }
      ],
      [
        { sprite: '#' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '#' }
      ],
      [
        { sprite: '#' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '#' }
      ],
      [
        { sprite: '#' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '.' },
        { sprite: '#' }
      ],
      [
        { sprite: '#' },
        { sprite: '#' },
        { sprite: '#' },
        { sprite: '#' },
        { sprite: '#' }
      ]
    ]
  }
]

const enhance = compose(
  branch(props => props.hide, renderNothing),
  connect(
    () => ({}),
    dispatch => ({
      setMap: map => dispatch(updateMap(map)),
      setMaps: maps => dispatch(updateMaps(maps))
    })
  ),
  lifecycle({
    componentDidMount: function() {
      this.props.setMaps(testMaps)
      this.props.setMap(testMaps[0])
    }
  })
)

export default enhance
