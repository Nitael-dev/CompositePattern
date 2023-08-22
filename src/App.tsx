import { useEffect, useState } from 'react'
import Notification from './components/notification'
import {FaCheck} from 'react-icons/fa'

function App() {
  const [tempAction, setTempAction] = useState(false)

  useEffect(() => {
    if (tempAction) {
      setTimeout(() => {
        setTempAction(false)
      }, 1000)
    }
  }, [tempAction])

  return (
    <>
      <Notification.Root>
        <Notification.Icon icon={FaCheck} />
        <Notification.Content content={'|  testestesteasdpoajsidohasd  |'} />
          <Notification.Actions>
            {
              !tempAction && <Notification.Action
                title='Accept'
                onClick={() => {
                  setTempAction(true)
                }}
              />
            }
          </Notification.Actions>
      </Notification.Root>
    </>
  )
}

export default App
