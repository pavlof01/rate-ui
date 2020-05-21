import React, { FC, useState } from 'react'
import { times } from 'lodash'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Box from '@material-ui/core/Box'
import Text from '@material-ui/core/Typography'

import { FlexFill, Flex } from 'styles'

import RateButton from 'components/RateButton'
// import TextArea from 'components/TextArea'
import { Star } from 'components/SvgIcons'

// TODO change "ANY" type
const Label: FC<{ label: string; color?: any }> = ({ label, color }) => <Typography color={color}>{label}</Typography>
Label.defaultProps = {
  color: 'textSecondary',
}

const Section: FC<{ value: string; label: string }> = ({ label, value }) => (
  <Box mb={2}>
    <Label label={label} />
    <Text>{value}</Text>
  </Box>
)

//TODO maybe need to rebuild from useReducer
const errorsInitState = {
  noComment: false,
}

const ServiceRate = () => {
  const theme = useTheme()
  let [currentRate, setCurrentRate] = useState<number>()
  const [comment, setComment] = useState('')
  const [errors, setErrors] = useState<typeof errorsInitState>({ noComment: false })

  const onSend = () => {
    if (!isExpanded) return null
    if (isNeedComment && !comment.length) {
      return setErrors({ noComment: true })
    }
    setErrors(errorsInitState)
  }

  const isExpanded = true // currentRate !== undefined
  const isNeedComment = currentRate && currentRate < 7
  return (
    <Box>
      <Card elevation={3}>
        <CardContent>
          <Section label="Тип" value="Вывод сотрудника" />
          <Section label="Название" value="Вывод нового сотрудника — Web–разработчик JS/React (front end)" />
          <Section label="Дата оказания" value="20.02.2020" />
        </CardContent>

        <CardContent>
          <Text>Ваша оценка</Text>
          <Flex justifyContent={'center'} flexWrap={'wrap'}>
            <Flex justifyContent={'center'} flexDirection={'column'}>
              <Flex>
                {times(5, i => (
                  <RateButton key={i + 1} rate={i + 1} currentRate={currentRate} setCurrentRate={setCurrentRate} />
                ))}
              </Flex>
              <Label label="плохо" />
            </Flex>
            <Flex justifyContent={'center'} flexDirection={'column'} alignItems={'flex-end'}>
              <Flex>
                {times(5, i => (
                  <RateButton key={i + 6} rate={i + 6} currentRate={currentRate} setCurrentRate={setCurrentRate} />
                ))}
              </Flex>
              <Label label="отлично" />
            </Flex>
          </Flex>
          {currentRate && (
            <Flex alignItems="center" justifyContent="center">
              <Text style={{ fontSize: 72 }} align="center">
                {currentRate}
              </Text>
              <Star fill={theme.serviceRatingColors[currentRate]} />
            </Flex>
          )}
        </CardContent>
        <CardContent>
          <Collapse in={isExpanded} timeout={0} unmountOnExit>
            <Box px={2} py={1.5} mt={3} bgcolor={errors.noComment ? 'error.light' : 'primary.light'} borderRadius={12}>
              <FlexFill flexDirection="column">
                <TextField
                  value={comment}
                  label="Комментарий"
                  variant="filled"
                  placeholder="Введите текст"
                  multiline
                  error={errors.noComment}
                  helperText="обязательно"
                  onChange={e => setComment(e.currentTarget.value)}
                  InputProps={{ disableUnderline: true }}
                />
              </FlexFill>
            </Box>
            <FlexFill justifyContent="flex-end" mt={2.5}>
              <Button onClick={onSend} variant="contained" color="primary">
                Отправить оценку
              </Button>
            </FlexFill>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ServiceRate
