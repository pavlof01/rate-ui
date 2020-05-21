import React, { FC } from 'react'
import { styled } from '@material-ui/core/styles'
import Text from '@material-ui/core/Typography'

import TooltipImage from 'components/TooltipImage'

import { Flex, FlexFill } from 'styles'
import pallete from 'styles/palette'
import { HOVER, LAST_CHILD } from 'helpers/constant'

const StyledFlexFill = styled(FlexFill)({
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  [HOVER]: {
    backgroundColor: pallete.primary.light,
    '& .more-info': {
      display: 'flex',
    },
  },
  [LAST_CHILD]: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
})

type Props = {
  title: string
  owner: { name: string; photo: string }
  numOfServices: number
}

const SubdivisionInfo: FC<Props> = ({ title, owner, numOfServices }) => {
  return (
    <p>SubdivisionInfo</p>
    //  <StyledFlexFill height={48}>
    //    <Text pl={16}>{title}</Text>
    //   <Flex display="none" className="more-info" alignItems="center" pr={16}>
    //     <Text mr={32}>сервисов: {numOfServices}</Text>
    //     <TooltipImage title={owner.name} src={require('../../assets/images/avatar.png')} />
    //   </Flex>
    //  </StyledFlexFill>
  )
}

export default SubdivisionInfo
