import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './server/state/store.tsx'
import { ErrorProvider } from './server/apicalls/globalerror.tsx'
import { LoadingProvider } from './server/apicalls/loadingcontext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <LoadingProvider>
        <ErrorProvider>
          <App />
        </ErrorProvider>
      </LoadingProvider>
    </Provider>
  </React.StrictMode>,
)
