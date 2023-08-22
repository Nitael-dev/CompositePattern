interface NotificationContentProps {
  content: string
}

export function NotificationContent({content}: NotificationContentProps) {
  return (
    <div>
      {content}
    </div>
  )
}
