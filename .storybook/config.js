import React from 'react'
import { configure } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { addDecorator } from '@storybook/react'

import Theme from '../src/styles/theme'

import '../src/styles/global.css'
import '../src/stories/styles.css'

addDecorator(story => <MuiThemeProvider theme={Theme}>{story()}</MuiThemeProvider>)
configure(require.context('../src/stories', true, /.tsx$/), module)
