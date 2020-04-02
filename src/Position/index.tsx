import styled from '@emotion/styled'
import { position as styledPosition, height, minHeight, maxHeight, width, minWidth, maxWidth, WidthProps, HeightProps, MaxWidthProps, MinWidthProps, MinHeightProps, MaxHeightProps } from 'styled-system'
// @ts-ignore props is not typed
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop'
import css from '@styled-system/css'
import { PositionProps, TransformProps } from '../types'

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'transform',
])

export const Position = styled('div', {
  shouldForwardProp
})<
  & PositionProps
  & WidthProps
  & MinWidthProps
  & MaxWidthProps
  & HeightProps
  & MinHeightProps
  & MaxHeightProps
  & TransformProps
  & {
    as?: React.ElementType;
  }
>(
  styledPosition,
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,
  ({ position, transform = undefined }) => css({
    position,
    transform,
  })
)
