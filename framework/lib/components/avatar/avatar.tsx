import React from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/react'
import { BusinessContactDuo, UserSquareDuo } from '@mediatool/icons'
import { Icon } from '../icon'
import { AvatarBadge } from './avatar-badge'
import { getInitials, ring } from '../../utilities'
import { AvatarProps } from './types'

export const Avatar = ({
  variant = 'square',
  name,
  image,
  notificationCount = 0,
  ...rest
}: AvatarProps) => {
  const { container, text, userImage, icon } = useMultiStyleConfig('Avatar', {
    variant,
    image,
    ...rest,
  })

  return (
    <chakra.button
      __css={ container }
      _focusVisible={ ring }
      data-testid="avatar-test-id"
      { ...rest }
    >
      { image
        ? (
          <chakra.img
            alt={ name }
            src={ image }
            sx={ userImage }
          />
        ) : name
          ? (
            <chakra.span sx={ text }>
              { getInitials(name) }
            </chakra.span>
          )
          : (
            <Icon
              as={ variant === 'square' ? UserSquareDuo : BusinessContactDuo }
              sx={ icon }
              aria-label="user-avatar"
            />
          ) }
      { notificationCount > 0 && (
        <AvatarBadge notificationCount={ notificationCount } />
      ) }
    </chakra.button>
  )
}
