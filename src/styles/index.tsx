import styled from 'styled-components'
import {
  style,
  spacing,
  palette,
  color,
  flexbox,
  sizing,
  positions,
  display,
  shadows,
  borders,
  typography,
  compose,
} from '@material-ui/system'

import {
  SpacingProps,
  TypographyProps,
  BordersProps,
  SizingProps,
  PaletteProps,
  ShadowsProps,
  FlexboxProps,
  DisplayProps,
  PositionsProps,
} from '@material-ui/system'
import { CursorProperty } from 'csstype'

export const opacity = style({
  prop: 'opacity',
  cssProperty: 'opacity',
  transform: value => Number(value),
})

export const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
  transform: value => `${value}`,
})

export const Text = styled.p<PaletteProps & SpacingProps & TypographyProps & FlexboxProps & PositionsProps>(
  compose(color, palette, spacing, typography, flexbox, positions)
)

Text.defaultProps = {
  fontSize: 14,
  fontFamily: 'Regular',
}

export const Link = styled.a<
  PaletteProps & SpacingProps & TypographyProps & FlexboxProps & DisplayProps & BordersProps
>(compose(color, palette, spacing, typography, flexbox, display, borders))

Link.defaultProps = {
  display: 'flex',
  fontSize: 14,
  color: 'black',
  fontFamily: 'Regular',
}

export const TextInput = styled.input<PaletteProps & SpacingProps & TypographyProps & FlexboxProps & BordersProps>(
  compose(color, palette, spacing, typography, flexbox, borders)
)

TextInput.defaultProps = {
  fontSize: 14,
  width: '100%',
  color: 'black',
  fontFamily: 'Regular',
}

export const TextArea = styled.textarea<
  PaletteProps & SpacingProps & TypographyProps & FlexboxProps & BordersProps & SizingProps
>(compose(color, palette, spacing, typography, flexbox, borders, sizing))

TextArea.defaultProps = {
  fontSize: 14,
  width: '100%',
  bgcolor: 'rgba(0,0,0,0)',
  color: 'black',
  fontFamily: 'Regular',
  border: 'none',
}

export const H1 = styled.h1<PaletteProps & SpacingProps & TypographyProps & FlexboxProps & PositionsProps>(
  compose(color, palette, spacing, typography, flexbox, positions)
)

H1.defaultProps = {
  fontSize: 32,
}

export const H2 = styled(H1)({ fontSize: 28 })
export const H3 = styled(H1)({ fontSize: 24 })
export const H4 = styled(H1)({ fontSize: 22 })
export const H5 = styled(H1)({ fontSize: 20 })
export const H6 = styled(H1)({ fontSize: 18 })

export const Box = styled.div<
  PaletteProps &
    SpacingProps &
    TypographyProps &
    FlexboxProps &
    BordersProps &
    PositionsProps &
    DisplayProps &
    SizingProps &
    ShadowsProps & { opacity?: number } & { cursor?: CursorProperty }
>(compose(palette, spacing, typography, flexbox, color, borders, positions, display, sizing, shadows, opacity, cursor))

Box.defaultProps = {}

export const Flex = styled(Box)({})

Flex.defaultProps = {
  display: 'flex',
}

export const FlexFill = styled(Flex)({ width: '100%' })

export const FlexFullFill = styled(FlexFill)({ height: '100%' })

export const FlexColumn = styled(Flex)({ flexDirection: 'column' })

export const Img = styled.img<SpacingProps & FlexboxProps & SizingProps & BordersProps>(
  compose(spacing, flexbox, sizing, borders)
)

export const List = styled.ul<SpacingProps & FlexboxProps & SizingProps & BordersProps>(
  compose(spacing, flexbox, sizing, borders)
)
