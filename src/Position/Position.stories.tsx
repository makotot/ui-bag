import React from 'react'
import { Position } from './'

export default {
  title: 'Position',
  component: Position,
}

export const general = () => (
  <Position
    position="fixed"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    zIndex={ 100 }
  >
    position
  </Position>
)
