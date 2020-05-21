import React, { FC } from 'react'
import { styled } from '@material-ui/core/styles'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import Menu from '@material-ui/core/Menu'
import Link from '@material-ui/core/Link'

import { PopoverOrigin } from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import Text from '@material-ui/core/Typography'
import { usePopupState, bindHover, bindMenu, bindTrigger } from 'material-ui-popup-state/hooks'

import { FlexColumn } from 'styles'
import { FIRST_CHILD, LAST_CHILD, HOVER } from 'helpers/constant'
import palette from 'styles/palette'

const StyledLink = styled(Link)({
  [FIRST_CHILD]: { paddingTop: 20 },
  [LAST_CHILD]: { paddingBottom: 20 },
  [HOVER]: { backgroundColor: palette.primary.light },
  padding: 16,
  fontSize: 1,
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
      <Button /* variant={icon ? 'icon' : 'underline'} */ {...bindHover(DropDownMenuState)}>
        {icon ? <img src={icon && require('../../assets/icons/dots.svg')} /> : title}
      </Button>
      <HoverMenu
        {...bindMenu({ ...DropDownMenuState })}
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <FlexColumn>
          {menuItems.map(item => (
            <StyledLink key={item.text} onClick={() => item.onClick()}>
              {item.icon && <img src={item.icon} />}
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
