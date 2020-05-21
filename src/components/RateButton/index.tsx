import React, { FC } from 'react'
import { styled, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Text from '@material-ui/core/Typography'

import { HOVER, AFTER } from 'helpers/constant'

type Props = {
  rate: number
  currentRate?: number
  setCurrentRate: (value: number) => void
}

const RateButton: FC<Props> = ({ rate, currentRate, setCurrentRate }) => {
  const theme = useTheme()
  const onSetCurrentRate = () => setCurrentRate(rate)

  const StyledBox = styled(Box)({
    width: 40,
    height: 40,
    margin: '12px 5px 8px 5px',
    display: 'flex',
    borderRadius: '50%',
    backgroundColor: theme.serviceRatingColors[rate],
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    [AFTER]: {
      content: "''",
      position: 'absolute',
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '3px solid',
      borderColor: currentRate && rate === currentRate ? theme.serviceRatingColors[rate] : 'white',
    },
    [HOVER]: {
      [AFTER]: {
        content: "''",
        position: 'absolute',
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '3px solid',
        borderColor: theme.serviceRatingColors[rate],
      },
    },
  })

  return (
    <StyledBox onClick={onSetCurrentRate}>
      <Text>{rate}</Text>
    </StyledBox>
  )
}

export default RateButton
