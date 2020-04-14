import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Button from '../../components/Button'

import Add from '@material-ui/icons/Add'
import ExitToApp from '@material-ui/icons/ExitToApp'

storiesOf('Button', module)
  .add('Button primary contained', () => (
    <Button variant="contained" color="primary">
      Test
    </Button>
  ))
  .add('Button primary outlined', () => (
    <Button variant="outlined" color="primary">
      Добавить руководителя
    </Button>
  ))
  .add('Button with icon', () => (
    <Button variant="outlined" color="primary" startIcon={<Add />}>
      Добавить руководителя
    </Button>
  ))
  .add('Button with icon and text', () => (
    <Button variant="text" color="primary" startIcon={<ExitToApp />}>
      Выйти
    </Button>
  ))
  .addDecorator(withInfo)
