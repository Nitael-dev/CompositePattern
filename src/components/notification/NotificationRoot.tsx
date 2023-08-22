import React from "react"

interface NotificationRootProps {
  children: React.ReactNode
}

export function NotificationRoot({children}: NotificationRootProps) {
  return (
    <div className='flex flex-row bg-gray-200 items-center gap-4 px-6 py-2 rounded-xl shadow-sm shadow-slate-300 justify-evenly'>
      {children}
    </div>
  )
}
