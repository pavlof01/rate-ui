import React from 'react'

import HeaderMenu from './components/HeaderMenu'
import TreeView from './components/TreeView'
import { Box } from 'styles'

const App = () => {
  return (
    <Box>
      <HeaderMenu />
      <Box my={50} />
      <Box m={50} bgcolor="white" boxShadow={15} p={8} borderRadius={16}>
        <TreeView />
      </Box>
    </Box>
  )
}

export default App
