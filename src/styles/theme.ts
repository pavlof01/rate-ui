import { createMuiTheme } from '@material-ui/core/styles'

import { buttons, size } from '../components/Button/variants'

interface MyTheme {
  fontSizes: number[]
  buttons: typeof buttons
  //TODO resolve error after uncomment type
  // size: keyof typeof size | Array<keyof typeof size>
  size: any
  serviceRatingColors: string[]
}

// TODO transfer custome styles at index.d.ts
// TODO create global one theme for material-ui and styled-components
// TODO think about transfer *serviceRatingColors* to pelette or custom colors
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme extends MyTheme {}
  // * allow configuration using `createMuiTheme`
  interface ThemeOptions extends MyTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
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
