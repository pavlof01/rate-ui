import React, { FC } from 'react'

import { Flex, FlexFill, Text, Img } from 'styles'

import Button from 'components/Button'
import ButtonWithIcon from 'components/ButtonWithIcon'
import Dropdown from 'components/Dropdown'
import UniqHeaderDropdown from 'components/Dropdown/UniqHeaderDropdown'

type Props = {}

const HeaderMenu: FC<Props> = () => {
  return (
    <FlexFill height={64} alignItems="center" boxShadow={23}>
      <FlexFill flex={4} pl={24}>
        <UniqHeaderDropdown
          title="Оценка сервисов"
          menuItems={[
            {
              text: 'Подразделения',
              onClick: () => console.log('Подразделения'),
              icon: require('../../assets/icons/raiting.svg'),
            },
            {
              text: 'Цифровые сервисы',
              onClick: () => console.log('Цифровые сервисы'),
              icon: require('../../assets/icons/raiting.svg'),
            },
            { text: 'Архив', onClick: () => console.log('Архив'), icon: require('../../assets/icons/raiting.svg') },
          ]}
        />
        <Flex width="60%" justifyContent="space-evenly">
          <Dropdown
            title="Главная"
            menuItems={[
              {
                text: 'Подразделения',
                onClick: () => console.log('Подразделения'),
              },
              {
                text: 'Цифровые сервисы',
                onClick: () => console.log('Цифровые сервисы'),
              },
              { text: 'Архив', onClick: () => console.log('Архив') },
            ]}
          />
          <Dropdown
            title="Мои сервисы"
            menuItems={[
              {
                text: 'Подразделения',
                onClick: () => console.log('Подразделения'),
              },
              {
                text: 'Цифровые сервисы',
                onClick: () => console.log('Цифровые сервисы'),
              },
              { text: 'Архив', onClick: () => console.log('Архив') },
            ]}
          />
          <Dropdown
            title="Запросы на оценку"
            menuItems={[
              {
                text: 'Подразделения',
                onClick: () => console.log('Подразделения'),
              },
              {
                text: 'Цифровые сервисы',
                onClick: () => console.log('Цифровые сервисы'),
              },
              { text: 'Архив', onClick: () => console.log('Архив') },
            ]}
          />
          <Dropdown
            title="Справочник"
            menuItems={[
              {
                text: 'Подразделения',
                onClick: () => console.log('Подразделения'),
              },
              {
                text: 'Цифровые сервисы',
                onClick: () => console.log('Цифровые сервисы'),
              },
            ]}
          />
        </Flex>
      </FlexFill>
      <FlexFill flex={1} justifyContent="space-around" alignItems="center" pr={24}>
        <Button variant="icon">
          <Img src={require('../../assets/icons/notification.svg')} />
        </Button>
        <Img maxHeight={48} maxWidth={48} borderRadius={10} src={require('../../assets/images/avatar.png')} />
        <Text>Татьяна</Text>
        <ButtonWithIcon variant="text" px={8} endIcon={require('../../assets/icons/exit.svg')}>
          Выйти
        </ButtonWithIcon>
      </FlexFill>
    </FlexFill>
  )
}

export default HeaderMenu
