import type { FC, ReactNode } from 'react'
import { useEffect, useRef } from 'react'

type LightboxProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
  label?: string
}

const Lightbox: FC<LightboxProps> = ({ open, onClose, children, label }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    const t = requestAnimationFrame(() => closeButtonRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      cancelAnimationFrame(t)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label ?? 'Agrandissement de l\'image'}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16, zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', maxWidth: 'min(960px, 100%)', maxHeight: '90vh' }}
      >
        {children}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          style={{
            position: 'absolute', top: 8, right: 8,
            background: 'rgba(255,255,255,0.9)', color: '#111',
            border: 'none', borderRadius: 6, padding: '6px 10px', cursor: 'pointer'
          }}
        >
          Fermer
        </button>
      </div>
    </div>
  )
}

export default Lightbox


