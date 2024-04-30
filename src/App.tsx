import { useContext, useEffect } from 'react'
import useRoutesElement from './useRoutesElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.contexts'

function App() {
  const routesElement = useRoutesElement()
  const { reset } = useContext(AppContext)
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])
  return (
    <div>
      {routesElement}
      <ToastContainer />
    </div>
  )
}

export default App
