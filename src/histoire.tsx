import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Histoire from './pages/Histoire'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Histoire />
  </StrictMode>,
)

