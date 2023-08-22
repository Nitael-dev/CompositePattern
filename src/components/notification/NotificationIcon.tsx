import React from "react"

interface NotificationIconProps {
  icon: React.ElementType
}

export function NotificationIcon({icon: Icon}: NotificationIconProps) {
  return (
    <div>
      <Icon />
    </div>
  )
}
