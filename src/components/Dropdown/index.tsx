import React, { FC } from 'react'
import styled from 'styled-components'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import Menu from '@material-ui/core/Menu'
import { usePopupState, bindHover, bindMenu, bindTrigger } from 'material-ui-popup-state/hooks'

import { Link, Text, FlexColumn, Img } from 'styles'
import { FIRST, LAST, HOVER } from 'helpers/constant'
import colors from 'styles/palette'

import Button from '../Button'

const StyledLink = styled(Link)({
  [FIRST]: { paddingTop: 20 },
  [LAST]: { paddingBottom: 20 },
  [HOVER]: { backgroundColor: colors.mainLight },
})

type Props = {
  title: string
  menuItems: { text: string; onClick: (...args: any) => any; icon?: string }[]
  triggerType?: 'hover' | 'click'
}

export const DropDownMenu: FC<Props> = ({ title, menuItems, triggerType = 'hover' }) => {
  const DropDownMenuState = usePopupState({ variant: 'popper', popupId: 'demoMenu' })
  const trigger = triggerType === 'hover' ? bindHover(DropDownMenuState) : bindTrigger(DropDownMenuState)
  return (
    <>
      <Button px={0} variant="underline" {...bindHover(DropDownMenuState)}>
        {title}
      </Button>
      <HoverMenu
        {...bindMenu({ ...DropDownMenuState })}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <FlexColumn>
          {menuItems.map(item => (
            <StyledLink px={16} py={15} fontSize={1} alignItems="center" onClick={() => item.onClick()}>
              {item.icon && <Img pr={16} src={item.icon} />}
              <Text>{item.text}</Text>
            </StyledLink>
          ))}
        </FlexColumn>
      </HoverMenu>
    </>
  )
}

export default DropDownMenu
