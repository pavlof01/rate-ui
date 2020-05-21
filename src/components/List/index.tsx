import React, { FC } from 'react'
import { styled } from '@material-ui/core/styles'

const StyledFlexColumn = styled('ul')({
  '& > li:first-of-type': {
    borderBottom: '1px solid #E9E9E9',
  },
  '& > li:last-of-type': {
    borderBottom: 'none',
  },
  '& > li:first-of-type:last-of-type': {
    borderBottom: 'none',
  },
})

const List: FC = ({ children }) => {
  return <StyledFlexColumn>{children}</StyledFlexColumn>
}

export default List
