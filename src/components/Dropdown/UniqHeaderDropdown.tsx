import React, { FC } from 'react'
import styled from 'styled-components'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks'

import { Link, Text, FlexColumn, Img } from 'styles'
import { FIRST_CHILD, LAST_CHILD, HOVER } from 'helpers/constant'
import colors from 'styles/palette'

import ButtonWithIcon from '../ButtonWithIcon'

const StyledButtonWithIcon = styled(ButtonWithIcon)({
  borderRadius: 16,
  [HOVER]: {
    backgroundColor: colors.mainLight,
    borderColor: colors.transparent,
    '& .endIcon': {
      transform: 'rotateX(0.5turn)',
    },
  },
})

const StyledLink = styled(Link)({
  [FIRST_CHILD]: { paddingTop: 20 },
  [LAST_CHILD]: { paddingBottom: 20 },
  [HOVER]: { backgroundColor: colors.mainLight },
})

type Props = {
  title: string
  menuItems: { text: string; onClick: (...args: any) => any; icon?: string }[]
}

export const UniqHeaderDropdown: FC<Props> = ({ title, menuItems }) => {
  const DropDownMenuState = usePopupState({ variant: 'popper', popupId: 'demoMenu' })
  return (
    <>
      <StyledButtonWithIcon
        px={23}
        variant="underline"
        startIcon={require('../../assets/icons/raiting.svg')}
        endIcon={require('../../assets/icons/arrow.svg')}
        borderColor={colors.gray}
        border="2px solid"
        {...bindHover(DropDownMenuState)}
      >
        {title}
      </StyledButtonWithIcon>
      <HoverMenu
        {...bindMenu({ ...DropDownMenuState })}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
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

export default UniqHeaderDropdown
