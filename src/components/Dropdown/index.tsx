import React, { FC } from 'react'
import { styled, makeStyles } from '@material-ui/core/styles'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import Menu from '@material-ui/core/Menu'
import Link from '@material-ui/core/Link'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'

import { PopoverOrigin } from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import Text from '@material-ui/core/Typography'
import { usePopupState, bindHover, bindMenu, bindTrigger } from 'material-ui-popup-state/hooks'

import { FlexColumn } from 'styles'
import { FIRST_CHILD, LAST_CHILD, HOVER } from 'helpers/constant'
import palette from 'styles/palette'

const StyledLink = styled(Link)({
  // [FIRST_CHILD]: { paddingTop: 10 },
  // [LAST_CHILD]: { paddingBottom: 10 },
  [HOVER]: { backgroundColor: palette.primary.light },
  padding: '5px 20px',
  fontSize: 1,
  textDecoration: 'none',
})

type Props = {
  title?: string
  menuItems: { text: string; onClick: (...args: any) => any; icon?: string }[]
  anchorOrigin?: PopoverOrigin
  transformOrigin?: PopoverOrigin
  icon?: string | boolean
}

export const Dropdown: FC<Props> = ({ title, menuItems, icon, anchorOrigin, transformOrigin }) => {
  const DropDownMenuState = usePopupState({ variant: 'popper', popupId: 'demoMenu' })

  return (
    <>
      <Button
        style={{ borderColor: DropDownMenuState.isOpen ? palette.primary.main : undefined }}
        disableElevation
        {...bindTrigger(DropDownMenuState)}
      >
        {icon ? <img src={icon && require('../../assets/icons/dots.svg')} /> : title}
      </Button>
      <Menu
        {...bindMenu({ ...DropDownMenuState })}
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <FormControl style={{ margin: 12, width: 'calc(100% - 24px)' }}>
          <InputBase
            placeholder="Поиск"
            endAdornment={
              <InputAdornment position="end">
                <IconButton size="small" aria-label="Очистить" onClick={() => {}} onMouseDown={() => {}}>
                  <img src={require('../../assets/icons/close.svg')} />
                </IconButton>
              </InputAdornment>
            }
            autoFocus
          />
        </FormControl>
        <FlexColumn maxHeight={150} style={{ overflowY: 'scroll' }}>
          {labels.map(item => (
            <StyledLink underline="none" key={item.name} /* onClick={() => item.onClick()} */>
              {/* {item.icon && <img src={item.icon} />} */}
              <Text>{item.name}</Text>
            </StyledLink>
          ))}
        </FlexColumn>
      </Menu>
    </>
  )
}

Dropdown.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  transformOrigin: { vertical: 'top', horizontal: 'left' },
}

export default Dropdown

const labels = [
  {
    name: 'good first issue',
    color: '#7057ff',
    description: 'Good for newcomers',
  },
  {
    name: 'help wanted Extra attention is needed Extra attention is needed Extra attention is needed',
    color: '#008672',
    description: 'Extra attention is needed',
  },
  {
    name: 'priority: critical',
    color: '#b60205',
    description: '',
  },
  {
    name: 'priority: high',
    color: '#d93f0b',
    description: '',
  },
  {
    name: 'priority: low',
    color: '#0e8a16',
    description: '',
  },
  {
    name: 'priority: medium',
    color: '#fbca04',
    description: '',
  },
  {
    name: "status: can't reproduce",
    color: '#fec1c1',
    description: '',
  },
  {
    name: 'status: confirmed',
    color: '#215cea',
    description: '',
  },
  {
    name: 'status: duplicate',
    color: '#cfd3d7',
    description: 'This issue or pull request already exists',
  },
  {
    name: 'status: needs information',
    color: '#fef2c0',
    description: '',
  },
  {
    name: 'status: wont do/fix',
    color: '#eeeeee',
    description: 'This will not be worked on',
  },
  {
    name: 'type: bug',
    color: '#d73a4a',
    description: "Something isn't working",
  },
  {
    name: 'type: discussion',
    color: '#d4c5f9',
    description: '',
  },
  {
    name: 'type: documentation',
    color: '#006b75',
    description: '',
  },
  {
    name: 'type: enhancement',
    color: '#84b6eb',
    description: '',
  },
  {
    name: 'type: epic',
    color: '#3e4b9e',
    description: 'A theme of work that contain sub-tasks',
  },
  {
    name: 'type: feature request',
    color: '#fbca04',
    description: 'New feature or request',
  },
  {
    name: 'type: question',
    color: '#d876e3',
    description: 'Further information is requested',
  },
]
