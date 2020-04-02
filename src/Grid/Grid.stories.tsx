import React from 'react'
import { Grid } from './'

export default {
  title: 'Grid',
  component: Grid,
}

export const general = () => (
  <Grid
    gridTemplateColumns="1fr 1fr"
    gridGap="1rem"
  >
    <div>grid</div>
    <div>grid</div>
  </Grid>
)
