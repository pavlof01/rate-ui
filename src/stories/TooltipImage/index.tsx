import React from 'react'
import { withInfo } from '@storybook/addon-info'

import ImageTooltip from 'components/TooltipImage'

export default {
  title: 'TooltipImage',
  decorators: [withInfo],
  parameters: {
    info: { inline: true },
  },
}

export const TooltipImage = () => <ImageTooltip title="Иван Иванов" src={require('../../assets/images/avatar.png')} />
