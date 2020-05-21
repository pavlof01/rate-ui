import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Popper from '@material-ui/core/Popper'
import Autocomplete, { AutocompleteCloseReason, RenderInputParams } from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Text from '@material-ui/core/Typography'

import { FlexFill } from 'styles'
import palette from 'styles/palette'

const match = require('autosuggest-highlight/match')
const parse = require('autosuggest-highlight/parse')

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popper: {
      backgroundColor: '#fff',
      boxShadow: '0 3px 12px rgba(27,31,35,.15)',
      borderRadius: 12,
      width: 300,
      zIndex: 1,
    },
    paper: {
      width: '100%',
      boxShadow: 'none',
      margin: 0,
    },
    option: {
      '&[data-focus="true"]': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    popperDisablePortal: {
      position: 'relative',
      width: '300px !important',
    },
    inputBase: {
      padding: '8px 4px 8px 14px',
      width: 'calc(100% - 24px)',
    },
  })
)

type Props = {
  title: string
}

const AutoComplete: React.FC<Props> = ({ title }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [value, setValue] = useState<LabelType>()
  const [searchText, setSearchText] = useState('')

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setValue(value)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: React.ChangeEvent<{}>, reason: AutocompleteCloseReason) => {
    if (reason === 'toggleInput') {
      return
    }
    if (anchorEl) {
      anchorEl.focus()
    }
    setAnchorEl(null)
  }

  const NoOptionsText = () => (
    <Text color="textPrimary">
      Ничего не найдено<Text color="textSecondary">Попробуйте ввести другой запрос</Text>
    </Text>
  )

  const RenderOption = (option: LabelType, { inputValue }: { inputValue: string }) => {
    const matches = match(option.name, inputValue)
    const parts = parse(option.name, matches)
    return (
      <>
        {parts.map((part: any, index: number) => (
          <Text
            component="span"
            key={index}
            style={{ backgroundColor: part.highlight ? palette.primary.light : undefined }}
          >
            {part.text}
          </Text>
        ))}
      </>
    )
  }

  const RenderInput = (params: RenderInputParams) => (
    <FlexFill padding={1.5}>
      <InputBase
        value={searchText}
        onChange={e => setSearchText(e.currentTarget.value)}
        placeholder="Поиск"
        ref={params.InputProps.ref}
        inputProps={params.inputProps}
        className={classes.inputBase}
        endAdornment={
          <InputAdornment position="end">
            <IconButton size="small" onClick={() => setSearchText('')}>
              <img src={require('../../assets/icons/close.svg')} />
            </IconButton>
          </InputAdornment>
        }
        autoFocus
      />
    </FlexFill>
  )

  const open = Boolean(anchorEl)
  return (
    <>
      <Button
        style={{ borderColor: open ? palette.primary.main : undefined }}
        disableRipple
        disableElevation
        onClick={handleClick}
      >
        <Text>{value ? title + ':' + value.name : title}</Text>
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start" className={classes.popper}>
        <Autocomplete
          open
          onClose={handleClose}
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
          }}
          options={labels}
          value={value}
          onChange={(event: any, newValue: any) => setValue(newValue)}
          disablePortal
          noOptionsText={NoOptionsText}
          renderOption={RenderOption}
          getOptionLabel={option => option.name}
          renderInput={RenderInput}
        />
      </Popper>
    </>
  )
}

export default AutoComplete

interface LabelType {
  name: string
  color: string
  description?: string
}

// From https://github.com/abdonrd/github-labels
const labels = [
  {
    name: 'good first issue',
    color: '#7057ff',
    description: 'Good for newcomers',
  },
  {
    name: 'help wanted',
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
