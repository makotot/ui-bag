import * as CSS from 'csstype'
import {
  ResponsiveValue,
  BackgroundColorProps,
  OpacityProps,
  PositionProps as StyledPositionProps
} from 'styled-system'

export type TextColorProps = {
  textColor?: ResponsiveValue<CSS.ColorProperty>;
}
export type ColorProps = TextColorProps & BackgroundColorProps & OpacityProps;

export type PositionProps = StyledPositionProps & {
  position: ResponsiveValue<CSS.PositionProperty>;
}

export type CursorProps = {
  cursor?: ResponsiveValue<CSS.CursorProperty>;
}

export type TextDecorationProps = {
  textDecoration?: ResponsiveValue<CSS.TextDecorationStyleProperty>;
}

export type TransformProps = {
  transform?: ResponsiveValue<CSS.TransformProperty>;
}

export type PseudoClassProps = {
  _hover?: ResponsiveValue<CSS.Properties>;
  _focus?: ResponsiveValue<CSS.Properties>;
  _active?: ResponsiveValue<CSS.Properties>;
}
