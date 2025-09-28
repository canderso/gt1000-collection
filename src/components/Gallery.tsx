import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import type { GalleryImage } from '../types'

type GalleryProps = {
  images: GalleryImage[]
}

export const Gallery: FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const previousBodyOverflow = useRef<string | null>(null)

  const open = (idx: number) => {
    setCurrent(idx)
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const goPrev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const goNext = () => setCurrent((c) => (c + 1) % images.length)

  // Keyboard navigation and ESC to close
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      previousBodyOverflow.current = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      overlayRef.current?.focus()
    } else {
      if (previousBodyOverflow.current !== null) {
        document.body.style.overflow = previousBodyOverflow.current
        previousBodyOverflow.current = null
      }
    }
  }, [isOpen])

  // Preload adjacent images
  useEffect(() => {
    if (!isOpen) return
    const prevIdx = (current - 1 + images.length) % images.length
    const nextIdx = (current + 1) % images.length
    ;[prevIdx, nextIdx].forEach((i) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = images[i].url
      document.head.appendChild(link)
      // Cleanup on next change
      setTimeout(() => document.head.removeChild(link), 2000)
    })
  }, [isOpen, current, images])

  return (
    <section aria-labelledby="gallery-title" style={{ marginBottom: 32 }}>
      <h2 id="gallery-title" style={{ fontSize: 24, marginBottom: 12 }}>Galerie</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: 12
      }}>
        {images.map((img, idx) => (
          <figure key={idx} style={{ margin: 0 }}>
            <button onClick={() => open(idx)} aria-label={`Voir l'image ${idx + 1} en grand`} style={{ padding: 0, border: 0, background: 'none', width: '100%', cursor: 'zoom-in' }}>
              <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 8 }}>
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  width={img.width}
                  height={img.height}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                />
              </div>
            </button>
            {img.caption ? (
              <figcaption style={{ color: 'var(--muted)', marginTop: 6, fontSize: 14 }}>{img.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse des images"
          ref={overlayRef}
          tabIndex={-1}
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
        >
          <button onClick={close} aria-label="Fermer la galerie" style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 0, color: '#fff', fontSize: 24, cursor: 'pointer' }}>×</button>
          <button onClick={goPrev} aria-label="Image précédente" style={{ position: 'absolute', left: 16, background: 'none', border: '1px solid #ffffff66', color: '#fff', padding: '8px 12px', cursor: 'pointer', borderRadius: 6 }}>{'←'}</button>
          <button onClick={goNext} aria-label="Image suivante" style={{ position: 'absolute', right: 16, background: 'none', border: '1px solid #ffffff66', color: '#fff', padding: '8px 12px', cursor: 'pointer', borderRadius: 6 }}>{'→'}</button>
          <img
            src={images[current].url}
            alt={images[current].alt}
            decoding="async"
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', display: 'block' }}
          />
        </div>
      ) : null}
    </section>
  )
}

export default Gallery

