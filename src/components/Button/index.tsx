import React, { FC } from 'react'
import styled from 'styled-components'
import { spacing, palette, color, sizing, shadows, borders, typography, compose, style } from '@material-ui/system'
import {
  SpacingProps,
  TypographyProps,
  BordersProps,
  SizingProps,
  PaletteProps,
  ShadowsProps,
} from '@material-ui/system'

import { buttons, size } from './variants'

const variant = style({
  prop: 'variant',
  cssProperty: false,
  themeKey: 'buttons',
})

const sizeVariants = style({
  prop: 'size',
  cssProperty: false,
  themeKey: 'buttonSizes',
})

export interface IButtonProps
  extends TypographyProps,
    SpacingProps,
    BordersProps,
    SizingProps,
    PaletteProps,
    ShadowsProps {
  variant?: keyof typeof buttons
  /**
   * В данный момент не работает, (нужно для респонсива)
   *
   **/
  size?: keyof typeof size | Array<keyof typeof size>
}

const Button = styled.button<IButtonProps>`
  white-space: nowrap;
  ${compose(typography, color, spacing, borders, sizing, palette, shadows, variant, sizeVariants)}
`

Button.defaultProps = {
  variant: 'primary',
  size: 'default',
  fontSize: 14,
  borderRadius: 16,
  px: 40,
  py: 8,
}

/**
 * Можно добавить описание
 */
export const ButtonComponent: FC<IButtonProps> = props => <Button {...props}>{props.children}</Button>

export default ButtonComponent
