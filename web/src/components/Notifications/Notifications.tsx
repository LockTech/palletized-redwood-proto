import { useEffect } from 'react'
import { useFlash } from '@redwoodjs/web'
import Alert from 'react-bootstrap/Alert'

const Message = ({ message }: { message: IFlashMessage }) => {
  const { cycleMessage } = useFlash()

  useEffect(() => {
    cycleMessage(message.id)

    // Automatically hide after 5s
    setTimeout(() => cycleMessage(message.id), 5000)
  }, [cycleMessage, message.id])

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
    <div className="fixed-top mt-3 mx-3" style={{ right: 0 }}>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  )
}

export default Notifications
