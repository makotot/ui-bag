import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  space,
  grid,
  justifyContent,
  justifyItems,
  justifySelf,
  alignContent,
  alignItems,
  alignSelf,
  LayoutProps,
  GridProps,
  layout,
  SpaceProps,
  FlexboxProps,
} from 'styled-system'
import css from '@styled-system/css'

export const Grid = styled('div', {
  shouldForwardProp
})<
  & SpaceProps
  & LayoutProps
  & Pick<
    FlexboxProps,
    'justifyContent' | 'alignContent' | 'justifyItems' | 'alignItems' | 'justifySelf' | 'alignSelf'
  >
  & GridProps
  & {
    as?: React.ElementType;
  }
>(
  grid,
  space,
  layout,
  justifyContent,
  justifyItems,
  alignItems,
  alignContent,
  justifySelf,
  alignSelf,
  ({ display = 'grid' }) => css({
    display,
  }),
)
