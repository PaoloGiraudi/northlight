import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color, coreSizing } from '@mediatool/tokens'

export const SplitPane: ComponentSingleStyleConfig = {
  baseStyle: ({ minLeftWidth, minRightWidth, initialSplit, isOpen }) => ({
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: !isOpen ? '1fr' : `minmax(${minLeftWidth}%, var(--split-pos, ${initialSplit}%)) auto minmax(${minRightWidth}%, 1fr)`,
    alignItems: 'stretch',
    justifyItems: 'stretch',
    height: '100%',
    width: '100%',
  }),
}

export const PaneDivider: ComponentSingleStyleConfig = {
  baseStyle: {
    bgColor: color.background['pane-divider'].default,
    zIndex: 300,
    cursor: 'col-resize',
    height: '100%',
    width: coreSizing[1],
    _hover: {
      outlineColor: color.border['pane-divider'].hover,
      outlineWidth: coreSizing['0a'],
      outlineStyle: 'solid',
    },
    _active: {
      outlineColor: color.border['pane-divider'].hover,
      outlineWidth: coreSizing['0a'],
      outlineStyle: 'solid',
    },
  },
}
