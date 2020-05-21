import React, { FC } from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { withStyles, Theme, styled } from '@material-ui/core/styles'

import pallete from 'styles/palette'
import { HOVER } from 'helpers/constant'

const CustomTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: pallete.primary.dark,
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 12,
    borderRadius: 8,
  },
}))(Tooltip)

const StyledImg = styled('img')({
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: 'rgba(0,0,0,0)',
  borderRadius: 10,
  [HOVER]: {
    borderColor: pallete.primary.main,
  },
})

type Props = {
  src: string
}

const TooltipImage: FC<Props & Omit<TooltipProps, 'children'>> = props => {
  return (
    <CustomTooltip title={props.title} placement={props.placement} arrow={props.arrow} {...props}>
      <StyledImg width={32} height={32} src={props.src} />
    </CustomTooltip>
  )
}

TooltipImage.defaultProps = {
  placement: 'top',
  arrow: true,
}

export default TooltipImage
