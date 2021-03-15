import { FatalErrorBoundary } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { RecoilRoot } from '@salvoravida/recoil'

import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'

import './index.scss'
import UserDefaultWarehouseCell from './components/user/UserDefaultWarehouseCell'

const App = () => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodApolloProvider>
        <RecoilRoot>
          <UserDefaultWarehouseCell id="ryan" />
          <Toaster />
          <Routes />
        </RecoilRoot>
      </RedwoodApolloProvider>
    </FatalErrorBoundary>
  )
}

export default App
