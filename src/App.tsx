import React from 'react'

import HeaderMenu from './components/HeaderMenu'
import TreeView from './components/TreeView'
import ServiceRate from './ screens/ServiceRate'
import { Box, Flex } from 'styles'

const App = () => {
  return (
    <Flex justifyContent="center">
      <ServiceRate />
    </Flex>
  )
}

export default App
