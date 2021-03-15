import { FatalErrorBoundary } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { RecoilRoot } from '@salvoravida/recoil'

import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'

import './index.scss'
import AtomProvider from './components/AtomProvider/AtomProvider'

const App = () => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodApolloProvider>
        <RecoilRoot>
          <AtomProvider />
          <Toaster />
          <Routes />
        </RecoilRoot>
      </RedwoodApolloProvider>
    </FatalErrorBoundary>
  )
}

export default App
