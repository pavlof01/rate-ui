import React, { FC } from 'react'
import { styled } from '@material-ui/core/styles'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Text from '@material-ui/core/Typography'

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
  title: string
  menuItems: { text: string; onClick: (...args: any) => any; icon?: string }[]
}

export const UniqHeaderDropdown: FC<Props> = ({ title, menuItems }) => {
  const DropDownMenuState = usePopupState({ variant: 'popper', popupId: 'demoMenu' })
  return (
    <>
      <Button
        variant="text"
        // startIcon={require('../../assets/icons/raiting.svg')}
        // endIcon={require('../../assets/icons/arrow.svg')}
        // borderColor={palette.primary.dark}
        // border="2px solid"
        {...bindHover(DropDownMenuState)}
      >
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

export default UniqHeaderDropdown
