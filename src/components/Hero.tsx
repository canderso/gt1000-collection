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
          <img
            src={vehicle.heroImage.url}
            width={vehicle.heroImage.width}
            height={vehicle.heroImage.height}
            alt={vehicle.heroImage.alt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}
          />
        </div>
        <div>
          <h1 id="hero-title" style={{ fontSize: 36 }}>{vehicle.name}</h1>
          {vehicle.subtitle ? <p style={{ color: 'var(--muted)' }}>{vehicle.subtitle}</p> : null}
          {vehicle.description ? <p style={{ maxWidth: 72 * 16 }}>{vehicle.description}</p> : null}
        </div>
      </div>
    </section>
  )
}

export default Hero

