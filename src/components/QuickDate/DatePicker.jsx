import React from 'react'
import 'rmc-picker/assets/index.css'
import 'rmc-picker/assets/popup.css'
import 'rmc-date-picker/assets/index.css'
import RmcPopup from 'rmc-date-picker/lib/Popup'
import RmcDatePicker from 'rmc-date-picker/lib/DatePicker'
import zhCN from 'rmc-date-picker/lib/locale/zh_CN'

const DatePicker = ({
  children,
  title,
  mode,
  defaultDate,
  date,
  minDate,
  maxDate,
  disabled,
  onConfirm,
  onCancel,
  onChange,
  onScroll,
}) => {
  const DatePicker = (
    <RmcDatePicker
      defaultDate={defaultDate}
      minDate={minDate}
      maxDate={maxDate}
      mode={mode}
      onDateChange={onChange}
      onScrollChange={onScroll}
      locale={zhCN}
    />
  )

  return (
    <RmcPopup
      date={date}
      disabled={disabled}
      datePicker={DatePicker}
      onChange={onConfirm}
      onDismiss={onCancel}
      title={title}
      okText='确定'
      dismissText='取消'
      transitionName='rmc-picker-popup-slide-fade'
      maskTransitionName='rmc-picker-popup-fade'
    >
      {children}
    </RmcPopup>
  )
}

export default DatePicker
