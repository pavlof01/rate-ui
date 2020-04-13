import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Button, ButtonProps } from '@material-ui/core'

const ButtonComponentTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#7953E4',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 12,
        minWidth: 120,
        minHeight: 40,
        textTransform: 'none',
      },
      outlinedPrimary: {
        border: '3px solid #7953E4',
        '&:hover': {
          border: '3px solid #7953E4',
        },
      },
      outlined: {
        border: '3px solid #7953E4',
      },
      text: {},
    },
  },
})

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return (
    <ThemeProvider theme={ButtonComponentTheme}>
      <Button {...props}>{props.children}</Button>
    </ThemeProvider>
  )
}

export default ButtonComponent
