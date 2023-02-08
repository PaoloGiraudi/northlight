import React from 'react'
import { Tab as ChakraStep, useMultiStyleConfig } from '@chakra-ui/react'
import { Capitalized, Lead } from '../typography'
import { Flex } from '../flex'
import { ring } from '../../utils'
import { StepProps } from './types'

export const Step = ({
  label,
  description,
  ...rest
}: StepProps) => {
  const {
    step,
    label: labelStyle,
    description: descriptionStyle,
  } = useMultiStyleConfig('Step')
  return (
    <ChakraStep { ...rest } sx={ step }>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        _groupFocusVisible={ ring }
      >
        <Capitalized sx={ labelStyle }>
          { label }
        </Capitalized>
        <Lead sx={ descriptionStyle }>
          { description }
        </Lead>
      </Flex>
    </ChakraStep>
  )
}
