import React, { FC } from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { withStyles, Theme, styled } from '@material-ui/core/styles'

import { Img } from 'styles'
import pallete from 'styles/palette'
import { HOVER } from 'helpers/constant'

const CustomTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: pallete.blackAlt1,
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 12,
    borderRadius: 8,
  },
}))(Tooltip)

const StyledImg = styled(Img)({
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: pallete.transparent,
  [HOVER]: {
    borderColor: pallete.main,
  },
})

type Props = {
  src: string
}

const TooltipImage: FC<Omit<TooltipProps, 'children'> & Props> = props => {
  return (
    <CustomTooltip title={props.title} placement={props.placement} arrow={props.arrow} {...props}>
      <StyledImg width={32} height={32} borderRadius={5} src={props.src} />
    </CustomTooltip>
  )
}

TooltipImage.defaultProps = {
  placement: 'top',
  arrow: true,
}

export default TooltipImage
