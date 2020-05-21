import React from 'react'

import HeaderMenu from './components/HeaderMenu'
import TreeView from './components/TreeView'
import TextArea from './components/TextArea'
// import Button from 'components/Button'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ServiceRate from './ screens/ServiceRate'
import { Flex } from 'styles'

const App = () => {
  // <Flex justifyContent="center">
  //   {/* <TextArea value="sdf" onInput={() => {}} /> */}
  //   <Button disableRipple variant="contained" color="primary">
  //     Test
  //   </Button>
  //   <Button variant="outlined">Test</Button>
  //   <Button variant="text">Test</Button>
  // </Flex>
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 100 }}>
      <ServiceRate />
    </div>
  )
}

export default App
