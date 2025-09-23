import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import History from './pages/History'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <History />
  </StrictMode>,
)

