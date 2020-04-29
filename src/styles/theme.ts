import { createMuiTheme } from '@material-ui/core/styles'

import { buttons, size } from '../components/Button/variants'
// TODO transfer custome styles at index.d.ts
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fontSizes: number[]
    buttons: typeof buttons
    size: keyof typeof size | Array<keyof typeof size>
    serviceRatingColors: string[]
  }
  // * allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fontSizes: number[]
    buttons: typeof buttons
    size: typeof size | Array<typeof size>
    serviceRatingColors: string[]
  }
}

const theme = createMuiTheme({
  fontSizes: [12, 14, 16, 18, 24, 32, 36, 72, 96],
  spacing: 1,
  buttons,
  size,
  palette: {
    primary: {
      main: '#7953E4',
      light: '#F2EEFC',
      dark: '#6440CA',
      contrastText: '#532FB8',
    },
    success: {
      main: '#57CF1F',
    },
    info: {
      main: '#FFC875',
    },
    error: {
      main: '#FF101F',
      light: '#FFF0F0',
    },
    divider: '#D3D3D4',
    background: {
      default: '#E9E9E9',
    },
    text: {
      primary: '#222527',
      secondary: '#646668',
      hint: '#F4F4F4',
    },
  },
  serviceRatingColors: [
    '#FF101F',
    '#FF3B10',
    '#FF5810',
    '#FD9E11',
    '#FDAD11',
    '#FFCD1C',
    '#E1DA2C',
    '#A0CB44',
    '#82CF1F',
    '#57CF1F',
  ],
})

export default theme
