import {
  InputProps as ChakraInputProps,
  StackDirection,
} from '@chakra-ui/react'
import { DateValue } from '@internationalized/date'
import {
  AriaDatePickerProps,
  AriaDateRangePickerProps,
} from '@react-aria/datepicker'
import { DateRange } from '@react-types/calendar'
import { RegisterOptions } from 'react-hook-form'
import { InputFieldProps } from '../../types'

export * from './components/date-field'
export * from './components/calendar/date-select'
export * from './components/calendar/components'

type DatePickerSettings = {
  firstDayOfWeek: 'sunday' | 'monday'
  resetDate: () => void
  isInvalid?: boolean
  dateFormat?: string
  isClearable?: boolean
}

type DatePickerMode = 'simple' | 'advanced'

export interface DatePickerProps
  extends AriaDatePickerProps<DateValue>,
  DatePickerSettings {}

export interface DateRangePickerProps
  extends AriaDateRangePickerProps<DateValue>,
  DatePickerSettings {
  fiscalStartMonth?: number
  mode?: DatePickerMode
}

export interface DatePickerFieldProps
  extends Omit<ChakraInputProps, 'onChange'>, InputFieldProps {
  name: string
  label: string
  minValue?: string
  maxValue?: string
  validate?: RegisterOptions
  firstDayOfWeek?: 'sunday' | 'monday'
  direction?: StackDirection
  dateFormat?: string
  onChange?: (date: DateValue) => void
  isClearable?: boolean
  fiscalStartMonth?: number
}

export interface DateRangePickerFieldProps extends Omit<DatePickerFieldProps, 'onChange'> {
  onChange?: (date: DateRange) => void
  mode?: DatePickerMode
}
interface DateRangeFormatted {
  startDate: string
  endDate: string
}

export type FormBody = Record<string, DateRangeFormatted>