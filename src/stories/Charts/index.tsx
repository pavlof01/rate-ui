import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Chart from '../../components/Chart'

storiesOf('Charts', module)
  .add('Chart', () => <Chart />)
  .addDecorator(withInfo)
