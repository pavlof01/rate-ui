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

const ButtonWithIcon: FC<IButtonWithIconProps> = props => {
  const { startIcon, endIcon } = props
  return (
    <Button {...props}>
      <Flex alignItems="center">
        {startIcon && <Img pr={5} src={startIcon} />}
        {props.children}
        {endIcon && <Img pl={5} src={endIcon} />}
      </Flex>
    </Button>
  )
}

export default ButtonWithIcon
