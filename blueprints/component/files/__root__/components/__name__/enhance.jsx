import React from 'react'
import { branch, compose, renderNothing } from 'recompose'

const enhance = compose(
  branch(
    (props) => props.hide,
    renderNothing
  )
)

export default enhance
