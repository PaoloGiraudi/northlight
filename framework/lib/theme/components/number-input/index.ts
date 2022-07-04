import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderRadius, borderWidth, color, opacity, spacing } from '~/tokens'

export const NumberInput: ComponentMultiStyleConfig = {
  parts: [ 'field', 'stepper', 'stepperGroup' ],
  sizes: {
    sm: {
      field: {
        borderRadius: borderRadius.input.outline,
      },
    },
  },
  baseStyle: ({ isReadOnly }) => ({
    field: {
      paddingInlineStart: spacing['padding-inline'].input.default,
      paddingInlineEnd: spacing['padding-inline'].input.default,
      color: color.text.default,
      bg: color.background.input['outline-default'],
      borderRadius: borderRadius.input.outline,
      borderWidth: borderWidth.input.default,
      borderColor: color.border.input.default,
      paddingRight: '80px',
      _hover: {
        bg: color.background.input['outline-hover'],
        borderColor: color.border.input['default-hover'],
      },
      _focusVisible: {
        bg: color.background.input['outline-focus'],
        borderColor: color.border.input.focus,
        boxShadow: `0 0 0 1px ${color.border.textarea.focus}`,
      },
      _invalid: {
        bg: color.background.input['outline-error'],
        borderColor: color.border.input.error,
        boxShadow: `0 0 0 1px ${color.border.input.error}`,
      },
      _disabled: {
        bg: color.background.input['outline-disabled'],
        opacity: opacity.input.disabled,
        borderColor: color.border.input.disabled,
      },
      _readOnly: {
        _focusVisible: {
          borderColor: color.border.input.readonly,
          boxShadow: 'none',
        },
        _hover: {
          borderColor: color.border.input.readonly,
        },
      },
    },
    stepperGroup: {
      width: '72px',
      paddingRight: spacing.paddingRight['number-input'].default,
    },
    stepper: {
      _first: {
        border: 'none',
        borderTopRightRadius: borderRadius['input-stepper'].default,
        borderRadius: borderRadius['input-stepper'].default,
        bg: color.background['input-stepper'].default,
        opacity: isReadOnly ? opacity.input.disabled : 'auto',
        _hover: {
          bg: isReadOnly ? 'none' : color.background['input-stepper'].hover,
        },
        _active: {
          bg: color.background['input-stepper'].active,
        },
        _disabled: {
          bg: color.background['input-stepper'].disabled,
          color: color.icon['input-stepper'].disabled,
        },
      },
      _last: {
        border: 'none',
        bg: color.background['input-stepper'].default,
        borderBottomRightRadius: borderRadius['input-stepper'].default,
        borderRadius: borderRadius['input-stepper'].default,
        opacity: isReadOnly ? opacity.input.disabled : 'auto',
        _hover: {
          bg: isReadOnly ? 'none' : color.background['input-stepper'].hover,
        },
        _active: {
          bg: color.background['input-stepper'].active,
        },
        _disabled: {
          bg: color.background['input-stepper'].disabled,
          color: color.icon['input-stepper'].disabled,
        },
      },
    },
  }),
}
