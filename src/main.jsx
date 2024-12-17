import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KhatabookProvider } from './contexth/KhatabookContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KhatabookProvider>
      <App />
    </KhatabookProvider>
  </StrictMode>,
)
