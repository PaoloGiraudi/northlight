import {
  ThemeOverride,
  extendTheme,
} from '@chakra-ui/react'
import { palette } from './palette'
import * as components from './components'

const overrides: ThemeOverride = {
  styles: {
    global: {
      'html, body': {
        height: '100%',
      },
      '#app': {
        height: '100%',
      },
    },
  },
  colors: {
    ...palette,
    primary: palette.mediatoolBlue[500],
  },
  components: {
    ...components,
  },
}

export const theme = extendTheme(overrides)
