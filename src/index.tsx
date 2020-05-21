import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import App from './App'
import Theme from './styles/theme'
import * as serviceWorker from './serviceWorker'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={Theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
