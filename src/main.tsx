import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CounterProvider } from './contexts/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
)
