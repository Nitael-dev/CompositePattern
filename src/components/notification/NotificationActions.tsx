import React from "react"

interface NotificationActionsProps {
  children: React.ReactNode
}

export function NotificationActions({children}: NotificationActionsProps) {
  return (
    <div>
      {children}
    </div>
  )
}
