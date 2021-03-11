import { FatalErrorBoundary } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'

import './index.scss'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodApolloProvider>
      <Toaster />
      <Routes />
    </RedwoodApolloProvider>
  </FatalErrorBoundary>
)

export default App
