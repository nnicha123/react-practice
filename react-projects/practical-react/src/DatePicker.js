import React, { useState } from 'react'
import DatePick from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div>
      <DatePick
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        // minDate={new Date()}
        maxDate={new Date("08-28-2020")}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableYearDropdown />
    </div>
  )
}

export default DatePicker
