import React from 'react'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import 'moment/locale/ru'

import './overrides.css'

const Datepicker = () => {
  const [date, setDate] = React.useState<{ startDate: any; endDate: any }>({ startDate: null, endDate: null })
  const [focusedInput, setFocusedInput] = React.useState<any>('startDate')
  return (
    <DateRangePicker
      startDate={date.startDate}
      startDatePlaceholderText="ДД/ММ/ГГГГ"
      startDateId="your_unique_start_date_id"
      endDate={date.endDate}
      endDatePlaceholderText="ДД/ММ/ГГГГ"
      endDateId="your_unique_end_date_id"
      onDatesChange={({ startDate, endDate }) => setDate({ startDate, endDate })}
      focusedInput={focusedInput}
      onFocusChange={setFocusedInput}
      showDefaultInputIcon
      reopenPickerOnClearDates
      displayFormat="D/MM/YYYY"
      isOutsideRange={() => false}
      customArrowIcon={<div className="customArrowIcon" />}
      isDayHighlighted={day => {
        return moment(day).day() === 6 || moment(day).day() === 0
      }}
    />
  )
}

export default Datepicker
