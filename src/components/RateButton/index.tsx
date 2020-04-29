import React, { FC } from 'react'
import styled from 'styled-components'

import { Flex, Text } from 'styles'
import { HOVER, AFTER } from 'helpers/constant'

const Container = styled(Flex)<Omit<Props, 'setCurrentRate'>>(({ theme, rate, currentRate }) => ({
  width: 40,
  height: 40,
  marginTop: 12,
  marginBottom: 8,
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
    borderColor: currentRate && rate === --currentRate ? theme.serviceRatingColors[rate] : 'white',
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
}))

type Props = {
  rate: number
  currentRate?: number
  setCurrentRate: (value: number) => void
}

const RateButton: FC<Props> = ({ rate, currentRate, setCurrentRate }) => {
  const onSetCurrentRate = () => setCurrentRate(rate)
  return (
    <Container rate={rate} currentRate={currentRate} onClick={onSetCurrentRate}>
      <Text color="white" fontSize={16}>
        {++rate}
      </Text>
    </Container>
  )
}

export default RateButton
