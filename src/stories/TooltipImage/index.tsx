import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Box } from 'styles'
import ImageTooltip from 'components/TooltipImage'

export default {
  title: 'TooltipImage',
  decorators: [withInfo],
  parameters: {
    info: { inline: true },
  },
}

export const TooltipImage = () => (
  <Box ml={40}>
    <ImageTooltip title="Иван Иванов" src={require('../../assets/images/avatar.png')} />
  </Box>
)
