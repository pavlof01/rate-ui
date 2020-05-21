import { createMuiTheme } from '@material-ui/core/styles'
import qwe from '@material-ui/core/styles'

import { BEFORE, AFTER, HOVER } from 'helpers/constant'
import palette from './palette'

interface MyTheme {
  fontSizes: number[]
  // buttons: typeof buttons
  //TODO resolve error after uncomment type
  // size: keyof typeof size | Array<keyof typeof size>
  // size: any
  serviceRatingColors: string[]
}

// TODO transfer custome styles at index.d.ts
// TODO think about transfer *serviceRatingColors* to pelette or custom colors
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme extends MyTheme {}
  // * allow configuration using `createMuiTheme`
  interface ThemeOptions extends MyTheme {}
}

const theme = createMuiTheme({
  fontSizes: [12, 14, 16, 18, 24, 32, 36, 72, 96],
  // size,
  palette,
  serviceRatingColors: [
    '',
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
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 12,
        fontSize: 14,
        textTransform: 'none',
        fontWeight: 'normal',
      },
      containedPrimary: {
        backgroundColor: palette.primary.main,
        color: '#fff',
        borderRadius: 12,
      },
      disableElevation: {
        backgroundColor: '#fff',
        color: palette.text.secondary,
        padding: '6px 14px',
        border: '2px solid rgba(0,0,0,0)',
        [HOVER]: {
          borderColor: palette.primary.main,
          backgroundColor: '#fff',
        },
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: palette.primary.light,
        border: '2px solid rgba(0,0,0,0)',
        borderRadius: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        fontSize: 14,
        padding: '2px 8px',
        [HOVER]: {
          backgroundColor: '#fff',
          borderColor: palette.primary.main,
        },
        '&$focused': {
          backgroundColor: '#fff',
          borderColor: palette.primary.main,
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        color: palette.text.primary,
      },
    },
    MuiFormLabel: {
      root: {
        '&.Mui-error': {
          color: palette.text.primary,
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: palette.primary.light,
        border: '2px solid rgba(0,0,0,0)',
        borderRadius: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        [HOVER]: {
          backgroundColor: '#fff',
          borderColor: palette.primary.main,
        },
        '&.Mui-error': {
          backgroundColor: palette.error.light,
        },
        '&.Mui-error:hover': {
          backgroundColor: '#fff',
          borderColor: palette.error.main,
        },
      },
    },
    MuiTypography: {
      body1: {
        fontSize: 14,
        color: palette.text.primary,
      },
      colorTextSecondary: {
        fontSize: 12,
      },
    },
    MuiCardContent: {
      root: {
        paddingLeft: 24,
        paddingRight: 24,
      },
    },
  },
})

export default theme
