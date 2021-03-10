import { useEffect } from 'react'
import { useFlash } from '@redwoodjs/web'
import Alert from 'react-bootstrap/Alert'

import './Notifications.css'

const Message = ({ message }: { message: IFlashMessage }) => {
  const { cycleMessage } = useFlash()

  useEffect(() => {
    cycleMessage(message.id)

    // Automatically hide after 5s
    if (!message.skipTimeout) {
      setTimeout(() => cycleMessage(message.id), message.timeoutTime || 5000)
    }
  }, [cycleMessage, message.id, message.skipTimeout, message.timeoutTime])

  return (
    <Alert
      dismissible
      id={`notification-${message.id}`}
      onClose={() => cycleMessage(message.id)}
      variant={message.variant || 'info'}
    >
      {message.title && (
        <Alert.Heading>
          <strong className="mr-auto">{message.title || 'Notification'}</strong>
        </Alert.Heading>
      )}
      {message.text}
    </Alert>
  )
}

const Notifications: React.FC = () => {
  const { messages } = useFlash()

  if (!messages.length) return null

  return (
    <div className="position-fixed mt-3 mx-3 notification-container">
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  )
}

export default Notifications
