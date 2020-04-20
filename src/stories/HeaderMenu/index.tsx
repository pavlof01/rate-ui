import React from 'react'
import { withInfo } from '@storybook/addon-info'

import HeaderMenu from '../../components/HeaderMenu'

export default {
  title: 'HeaderMenu',
  decorators: [withInfo],
}

export const MainMenu = () => <HeaderMenu />
