import React from 'react'
import { withInfo } from '@storybook/addon-info'

import DropdownMenu from '../../components/Dropdown'

export default {
  title: 'DropdownMenu',
  decorators: [withInfo],
  parameters: {
    info: { inline: true, styles: {} },
  },
}

export const Dropdown = () => (
  <DropdownMenu
    title="Главная"
    menuItems={[
      { text: 'Подразделения', onClick: () => console.log('Подразделения') },
      { text: 'Цифровые сервисы', onClick: () => console.log('Цифровые сервисы') },
      { text: 'Архив', onClick: () => console.log('Архив') },
    ]}
  />
)
