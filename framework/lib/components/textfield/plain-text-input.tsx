import React from 'react'
import { Input } from '@chakra-ui/react'
import { PlainTextInputProps } from './types'

export const PlainTextInput = ({
  onChange,
  field,
  setValue,
  ...rest
}: PlainTextInputProps) => (
  <Input
    onChange={ field?.onChange ?? onChange }
    value={ field?.value ?? rest.value }
    name={ field?.name ?? rest.name }
    { ...rest }
  />
)
