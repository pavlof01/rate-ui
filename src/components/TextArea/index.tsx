import React, { FC } from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'

type Props = {
  value?: string
  label?: string
  isError?: boolean
  multiline?: boolean
  size?: 'medium' | 'small'
  onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

const CustomTextField: FC<Props & TextFieldProps> = ({ value, label, multiline, size, isError, onInput }) => {
  return <TextField label={label} variant="filled" />
}

CustomTextField.defaultProps = {
  multiline: false,
  size: 'medium',
}

export default CustomTextField
