import type { FC } from 'react'
import type { GalleryImage } from '../types'

type GalleryProps = {
  images: GalleryImage[]
}

export const Gallery: FC<GalleryProps> = ({ images }) => {
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
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              width={img.width}
              height={img.height}
              style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}
            />
            {img.caption ? (
              <figcaption style={{ color: 'var(--muted)', marginTop: 6, fontSize: 14 }}>{img.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery

