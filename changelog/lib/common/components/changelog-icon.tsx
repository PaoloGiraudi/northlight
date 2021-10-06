import React, { HTMLAttributes } from 'react'
import * as icons from './icons'

export type IconType =
  'added'
  | 'modified'
  | 'deleted'
  | 'approved'
  | 'approvalRequested'
  | 'campaignCreated'
  | 'denied'
  | 'orgCreated'
  | 'pending'

export type ChangelogIconProps = {
  height: number
  icon: IconType
} & HTMLAttributes<HTMLImageElement>

export const ChangelogIcon = ({ height = 40, icon, ...rest }: ChangelogIconProps) => {
  const iconSrc = icons[icon]

  return (
    <img
      src={ iconSrc }
      height={ height }
      alt={ icon }
      { ...rest }
    />
  )
}
