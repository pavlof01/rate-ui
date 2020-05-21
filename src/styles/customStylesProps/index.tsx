import { style } from '@material-ui/system'

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
