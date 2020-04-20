import React from 'react'

import Menu from './components/Dropdown'
import Button from './components/Button'
import { Img } from 'styles'

const App = () => {
  return (
    <div style={{ paddingTop: 200, paddingLeft: 200 }}>
      <Button variant="primary">primary</Button>
      <Button variant="outline">outline</Button>
      <Button variant="text">text</Button>
      <Button variant="icon">
        <Img src={require('./assets/icons/notification.svg')} />
      </Button>
      <Menu
        title="Главная"
        triggerType="click"
        menuItems={[
          {
            text: 'Подразделения',
            onClick: () => console.log('Подразделения'),
            icon: require('./assets/icons/raiting.svg'),
          },
          {
            text: 'Цифровые сервисы',
            onClick: () => console.log('Цифровые сервисы'),
            icon: require('./assets/icons/raiting.svg'),
          },
          { text: 'Архив', onClick: () => console.log('Архив'), icon: require('./assets/icons/raiting.svg') },
        ]}
      />
    </div>
  )
}

export default App
