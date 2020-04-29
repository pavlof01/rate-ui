import React, { FC, useState } from 'react'
import { times } from 'lodash'
import { useTheme } from 'styled-components'

import { Box, FlexFill, Flex, Text, TextArea } from 'styles'
import { autoGrowTextArea } from 'utils'

import Button from 'components/Button'
import RateButton from 'components/RateButton'
import { Star } from 'components/SvgIcons'

const Label: FC<{ label: string; color?: string }> = ({ label, color }) => (
  <Text fontSize={12} color={color}>
    {label}
  </Text>
)

Label.defaultProps = {
  color: 'text.secondary',
}

const Section: FC<{ value: string; label: string }> = ({ label, value }) => (
  <Box mb={16}>
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
    if (currentRate! < 7 && !comment.length) {
      return setErrors({ noComment: true })
    }
    setErrors(errorsInitState)
  }
  return (
    <Box width={560} boxShadow={5} p={24} borderRadius={16}>
      <Section label="Тип" value="Вывод сотрудника" />
      <Section label="Название" value="Вывод нового сотрудника — Web–разработчик JS/React (front end)" />
      <Section label="Дата оказания" value="20.02.2020" />
      <Text>Ваша оценка</Text>
      <Flex justifyContent="space-between">
        {times(10, i => (
          <RateButton key={i} rate={i} currentRate={currentRate} setCurrentRate={setCurrentRate} />
        ))}
      </Flex>
      <Flex justifyContent="space-between">
        <Label label="плохо" />
        <Label label="отлично" />
      </Flex>
      {currentRate && (
        <Flex alignItems="center" justifyContent="center">
          <Text position="absolute" color="white" fontSize={72}>
            {currentRate}
          </Text>
          <Star fill={theme.serviceRatingColors[--currentRate]} />
        </Flex>
      )}
      {currentRate !== undefined && currentRate < 7 && (
        <Box px={16} py={12} mt={24} bgcolor={errors.noComment ? 'error.light' : 'primary.light'} borderRadius={12}>
          <FlexFill flexDirection="column">
            <FlexFill justifyContent="space-between">
              <Text>Комментарий</Text>
              <Label label="обязательно" color={errors.noComment ? 'error.main' : undefined} />
            </FlexFill>
            <TextArea
              value={comment}
              id="rate-comment"
              mt={10}
              maxHeight={250}
              placeholder="Введите текст"
              onInput={e => {
                setComment(e.currentTarget.value)
                autoGrowTextArea('rate-comment')
              }}
            />
          </FlexFill>
        </Box>
      )}
      {++currentRate! ? (
        <FlexFill justifyContent="flex-end" mt={20}>
          <Button height={48} onClick={onSend}>
            Отправить оценку
          </Button>
        </FlexFill>
      ) : null}
    </Box>
  )
}

export default ServiceRate
