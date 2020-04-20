import palette from 'styles/palette'
import { convertHex } from 'styles/utils'
import { HOVER } from 'helpers/constant'

export const buttons = {
  primary: {
    color: palette.white,
    backgroundColor: palette.main,
    [HOVER]: {
      backgroundColor: `${convertHex(palette.main, 0.9)}`,
    },
  },
  outline: {
    color: palette.main,
    borderColor: palette.main,
    [HOVER]: {
      backgroundColor: palette.mainLight,
    },
  },
  text: {
    color: palette.main,
    backgroundColor: palette.white,
    borderColor: palette.transparent,
    [HOVER]: {
      backgroundColor: palette.mainLight,
    },
  },
  underline: {
    color: palette.main,
    backgroundColor: palette.white,
    borderRadius: 0,
    borderColor: palette.transparent,
    [HOVER]: {
      borderBottomColor: palette.main,
    },
  },
  icon: {
    color: palette.main,
    padding: 2,
    backgroundColor: palette.white,
    borderColor: palette.transparent,
    [HOVER]: {
      backgroundColor: palette.mainLight,
    },
  },
}

export const size = {
  xs: {
    height: 16,
    padding: 16,
    fontSize: 10,
  },
  sm: {
    height: 24,
    padding: 24,
    fontSize: 13,
  },
  md: {
    height: 34,
    padding: 34,
    fontSize: 14,
    letterSpacing: 0.4,
  },
  lg: {
    height: 56,
    padding: 56,
    fontSize: 20,
  },
  default: {
    px: 40,
    py: 8,
    fontSize: 14,
  },
}
