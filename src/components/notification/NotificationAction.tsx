import { ButtonHTMLAttributes } from "react";

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function NotificationAction({
  onClick,
  title
}: NotificationActionProps) {
  return (
    <button
      className='bg-gray-600 px-4 py-2 rounded-lg'
      onClick={onClick}
    >{title}</button>
  )
}
