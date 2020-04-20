import { createMuiTheme } from '@material-ui/core/styles'

import { buttons, size } from '../components/Button/variants'

// TODO transfer custome styles at index.d.ts
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fontSizes: number[]
    buttons: typeof buttons
    size: keyof typeof size | Array<keyof typeof size>
  }
  // * allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fontSizes: number[]
    buttons: typeof buttons
    size: typeof size | Array<typeof size>
  }
}

// TODO replace pallet in theme
const theme = createMuiTheme({
  fontSizes: [12, 14, 16, 18, 24, 32, 36, 72, 96],
  spacing: 1,
  buttons,
  size,
})

export default theme
