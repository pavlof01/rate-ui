import React from 'react'
import { configure } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'

import Theme from '../src/styles/theme'

import '../src/styles/global.css'

addDecorator(story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>)
configure(require.context('../src/stories', true, /.tsx$/), module)
