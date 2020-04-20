import React, { FC } from 'react'

import { Flex, Img } from 'styles'

import Button, { IButtonProps } from '../Button'

interface IButtonWithIconProps extends IButtonProps {
  /**
   * Start icon of button
   */
  startIcon?: string

  /**
   * End icon of button
   */
  endIcon?: string
}

// TODO need to add more setting in this button (ex. padding of icons)
const ButtonWithIcon: FC<IButtonWithIconProps> = props => {
  const { startIcon, endIcon } = props
  return (
    <Button {...props}>
      <Flex alignItems="center">
        {startIcon && <Img className="startIcon" pr={5} src={startIcon} />}
        {props.children}
        {endIcon && <Img className="endIcon" pl={5} src={endIcon} />}
      </Flex>
    </Button>
  )
}

export default ButtonWithIcon
