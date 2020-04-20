import styled from 'styled-components'
import {
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

export const Text = styled.p<PaletteProps & SpacingProps & TypographyProps & FlexboxProps>(
  compose(color, palette, spacing, typography, flexbox)
)

Text.defaultProps = {
  fontSize: 14,
  color: 'black',
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

export const H1 = styled.h1<PaletteProps & SpacingProps & TypographyProps>(compose(color, palette, spacing, typography))

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
    ShadowsProps
>(compose(palette, spacing, typography, flexbox, color, borders, positions, display, sizing, shadows))

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
