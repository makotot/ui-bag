import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  LayoutProps,
  BorderProps,
  SpaceProps,
  BorderRadiusProps,
  layout,
  border,
  color,
  space,
  borderRadius,
  textAlign,
  TextAlignProps
} from 'styled-system'
import { ColorProps } from '../types'

export const Box = styled('div', {
  shouldForwardProp
})<
  ColorProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  BorderRadiusProps &
  TextAlignProps & {
    as?: React.ElementType;
  }
>(
  color,
  border,
  space,
  layout,
  borderRadius,
  textAlign
)
