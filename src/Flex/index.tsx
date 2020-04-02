import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  space,
  flexbox,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  layout
} from 'styled-system'
import css from '@styled-system/css'

export const Flex = styled('div', {
  shouldForwardProp
})<
  SpaceProps &
  LayoutProps &
  FlexboxProps & {
    as?: React.ElementType;
  }
>(
  flexbox,
  space,
  layout,
  css({
    display: 'flex'
  })
)
