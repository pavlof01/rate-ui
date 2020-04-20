import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Img } from 'styles'

import Button from 'components/Button'
import ButtonWithIcon from 'components/ButtonWithIcon'

export default {
  title: 'Button',
  decorators: [withInfo],
  parameters: {
    info: { styles: {} },
  },
}

export const ButtonPrimary = () => <Button variant="primary">Test</Button>

export const ButtonOutline = () => <Button variant="outline">Добавить руководителя</Button>

export const ButtonText = () => <Button variant="text">Добавить руководителя</Button>

export const Icon = () => (
  <Button variant="icon" px={2} py={2}>
    <Img src={require('../../assets/icons/notification.svg')} />
  </Button>
)

export const TextWithIcon = () => (
  <ButtonWithIcon variant="text" px={8} endIcon={require('../../assets/icons/exit.svg')}>
    Выйти
  </ButtonWithIcon>
)

export const ButtonWithIconAndText = () => (
  <ButtonWithIcon
    variant="outline"
    borderColor="gray"
    color="black"
    startIcon={require('../../assets/icons/raiting.svg')}
    endIcon={require('../../assets/icons/arrow.svg')}
  >
    Оценка сервисов
  </ButtonWithIcon>
)
