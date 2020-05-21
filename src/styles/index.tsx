import { styled } from '@material-ui/core/styles'
import { style } from '@material-ui/system'
import Box from '@material-ui/core/Box'
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

export const Flex = styled(Box)({ display: 'flex' })

export const FlexFill = styled(Flex)({ width: '100%' })

export const FlexFullFill = styled(FlexFill)({ height: '100%' })

export const FlexColumn = styled(Flex)({ flexDirection: 'column' })

export const Center = styled(Flex)({ alignItems: 'center', justifyContent: 'center' })
