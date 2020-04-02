import * as CSS from 'csstype';
import { ResponsiveValue, BackgroundColorProps, OpacityProps, PositionProps as StyledPositionProps } from 'styled-system';
export declare type TextColorProps = {
    textColor?: ResponsiveValue<CSS.ColorProperty>;
};
export declare type ColorProps = TextColorProps & BackgroundColorProps & OpacityProps;
export declare type PositionProps = StyledPositionProps & {
    position: ResponsiveValue<CSS.PositionProperty>;
};
export declare type CursorProps = {
    cursor?: ResponsiveValue<CSS.CursorProperty>;
};
export declare type TextDecorationProps = {
    textDecoration?: ResponsiveValue<CSS.TextDecorationStyleProperty>;
};
export declare type TransformProps = {
    transform?: ResponsiveValue<CSS.TransformProperty>;
};
export declare type PseudoClassProps = {
    _hover?: ResponsiveValue<CSS.Properties>;
    _focus?: ResponsiveValue<CSS.Properties>;
    _active?: ResponsiveValue<CSS.Properties>;
};
