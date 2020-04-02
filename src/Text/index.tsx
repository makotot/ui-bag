import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  typography,
  TypographyProps,
  opacity,
  OpacityProps,
} from 'styled-system'
import css from '@styled-system/css'
import { TextColorProps } from '../types'

export const Text = styled('span', {
  shouldForwardProp
})<
  OpacityProps &
  TextColorProps &
  TypographyProps & {
    as?: React.ElementType;
  }
>(
  typography,
  opacity,
  ({ textColor }) => css({
    color: textColor,
  }),
)
