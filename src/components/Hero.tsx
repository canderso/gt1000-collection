import type { FC } from 'react'
import type { Vehicle } from '../types'

type HeroProps = {
  vehicle: Vehicle
}

export const Hero: FC<HeroProps> = ({ vehicle }) => {
  return (
    <section style={{ marginBottom: 32 }} aria-labelledby="hero-title">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
        <div>
          <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: 8 }}>
            <img
              src={vehicle.heroImage.url}
              width={vehicle.heroImage.width}
              height={vehicle.heroImage.height}
              alt={vehicle.heroImage.alt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <h1 id="hero-title" style={{ fontSize: 36, margin: 0 }}>
            {vehicle.name}
            {vehicle.subtitle ? (
              <span style={{ marginLeft: 8, color: 'var(--muted)', fontWeight: 400 }}>
                {vehicle.subtitle}
              </span>
            ) : null}
          </h1>
          {vehicle.intro ? (
            <p style={{ fontSize: 18, marginTop: 8, marginBottom: 8, maxWidth: 72 * 16 }}>{vehicle.intro}</p>
          ) : null}
          {vehicle.description ? (
            <p style={{ fontSize: 18, marginTop: 8, marginBottom: 0, maxWidth: 72 * 16 }}>{vehicle.description}</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Hero

