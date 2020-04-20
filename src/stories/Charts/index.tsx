import React from 'react'
import { withInfo } from '@storybook/addon-info'

import Chart from '../../components/Chart'

export default {
  title: 'Charts',
  decorators: [withInfo],
}

export const SimeChart = () => <Chart />
