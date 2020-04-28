import React, { FC } from 'react'
import styled from 'styled-components'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import Menu from '@material-ui/core/Menu'
import { PopoverOrigin } from '@material-ui/core/Popover'
import { usePopupState, bindHover, bindMenu, bindTrigger } from 'material-ui-popup-state/hooks'

import { Link, Text, FlexColumn, Img } from 'styles'
import { FIRST_CHILD, LAST_CHILD, HOVER } from 'helpers/constant'
import colors from 'styles/palette'

import Button from '../Button'

const StyledLink = styled(Link)({
  [FIRST_CHILD]: { paddingTop: 20 },
  [LAST_CHILD]: { paddingBottom: 20 },
  [HOVER]: { backgroundColor: colors.mainLight },
})

type Props = {
  title?: string
  menuItems: { text: string; onClick: (...args: any) => any; icon?: string }[]
  anchorOrigin?: PopoverOrigin
  transformOrigin?: PopoverOrigin
  icon?: string | boolean
}

export const DropDownMenu: FC<Props> = ({ title, menuItems, icon, anchorOrigin, transformOrigin }) => {
  const DropDownMenuState = usePopupState({ variant: 'popper', popupId: 'demoMenu' })
  return (
    <>
      <Button px={0} py={0} variant={icon ? 'icon' : 'underline'} {...bindHover(DropDownMenuState)}>
        {icon ? <Img src={icon && require('../../assets/icons/dots.svg')} /> : title}
      </Button>
      <HoverMenu
        {...bindMenu({ ...DropDownMenuState })}
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <FlexColumn>
          {menuItems.map(item => (
            <StyledLink key={item.text} px={16} py={15} fontSize={1} alignItems="center" onClick={() => item.onClick()}>
              {item.icon && <Img pr={16} src={item.icon} />}
              <Text>{item.text}</Text>
            </StyledLink>
          ))}
        </FlexColumn>
      </HoverMenu>
    </>
  )
}

DropDownMenu.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  transformOrigin: { vertical: 'top', horizontal: 'left' },
}

export default DropDownMenu
