import { useContext, useEffect } from 'react'
import useRoutesElement from './useRoutesElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.contexts'

import { AppProvider } from './contexts/app.contexts.tsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    },
    mutations: {
      retry: 0
    }
  }
})

function App() {
  console.log('App')
  const routesElement = useRoutesElement()
  const { reset } = useContext(AppContext)

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            {routesElement}
            <ToastContainer />
          </ErrorBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
