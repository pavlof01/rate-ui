import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Box } from 'styles'
import SubdivisionInfo from 'components/SubdivisionInfo'

export default {
  title: 'SubdivisionInfo',
  component: SubdivisionInfo,
  decorators: [withInfo],
  parameters: {
    info: { inline: true, propTablesExclude: [Box] },
  },
}

export const SubdivisionInfoBox = () => (
  <Box mb={30}>
    <Box borderRadius={16} boxShadow={10}>
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
