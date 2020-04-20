import React from 'react'

import HeaderMenu from './components/HeaderMenu'
import SubdivisionInfo from './components/SubdivisionInfo'
import { Box } from 'styles'

const App = () => {
  return (
    <Box>
      <HeaderMenu />
      <Box my={50} />
      <Box borderRadius={16} boxShadow={10} m={24}>
        <SubdivisionInfo
          title="Управление информационных систем"
          owner={{ name: 'Иванова Виктория', photo: 'URL' }}
          numOfServices={7}
        />
        <SubdivisionInfo
          title="Управление информационных систем"
          owner={{ name: 'Иванова Виктория', photo: 'URL' }}
          numOfServices={7}
        />
        <SubdivisionInfo
          title="Управление информационных систем"
          owner={{ name: 'Иванова Виктория', photo: 'URL' }}
          numOfServices={7}
        />
        <SubdivisionInfo
          title="Управление информационных систем"
          owner={{ name: 'Иванова Виктория', photo: 'URL' }}
          numOfServices={7}
        />
      </Box>
    </Box>
  )
}

export default App
