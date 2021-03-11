import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import Notifications from 'src/components/Notifications/Notifications'
import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'

import './index.scss'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodApolloProvider useAuth={() => null}>
      <Notifications />
      <Routes />
    </RedwoodApolloProvider>
  </FatalErrorBoundary>
)

export default App
