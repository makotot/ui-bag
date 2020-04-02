import React from 'react'
import { Box } from './'

export default {
  title: 'Box',
  component: Box,
}

export const general = () => (
  <Box
    backgroundColor="#333"
    color="#fff"
    p="1rem"
    border="4px solid #666"
  >
    box
  </Box>
)
