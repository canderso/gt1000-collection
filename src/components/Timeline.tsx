import type { FC } from 'react'
import { useMemo, useState } from 'react'
import type { TimelineItem } from '../types'
import Lightbox from './Lightbox'

type TimelineProps = {
  events: TimelineItem[]
  title?: string
}

const LINE_X = 24
const STATION_RADIUS = 8
const YEAR_FONT_SIZE = STATION_RADIUS * 2

const Timeline: FC<TimelineProps> = ({ events, title }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const sorted = useMemo(() => [...events].sort((a, b) => a.year - b.year), [events])

  // Vertical positions equally spaced
  const spacing = 88
  const startY = 0
  const positions = sorted.map((_, i) => startY + i * spacing)
  const minY = positions[0]
  const maxY = positions[positions.length - 1]
  const containerHeight = maxY + STATION_RADIUS + 16

  const base = import.meta.env.BASE_URL || '/'

  return (
    <section aria-labelledby="timeline-title" style={{ position: 'relative' }}>
      <h2 id="timeline-title" style={{ fontSize: 24, margin: '0 0 12px 0' }}>{title ?? 'Timeline'}</h2>

      <div style={{ position: 'relative', height: containerHeight }}>
        {/* vertical brand line from first to last station */}
        <div style={{
          position: 'absolute', left: LINE_X, top: minY,
          transform: 'translateX(-50%)',
          width: 2, height: (maxY - minY), background: 'var(--brand)'
        }}/>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {sorted.map((ev, idx) => (
            <li key={`${ev.year}-${idx}`} style={{ position: 'relative', marginBottom: spacing - 12 }}>
              {/* station */}
              <button
                type="button"
                onClick={() => setSelectedIndex(idx)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedIndex(idx) }}
                aria-label={`Voir la photo ${ev.label} (${ev.year})`}
                style={{
                  position: 'absolute', left: LINE_X, top: positions[idx] - STATION_RADIUS,
                  width: STATION_RADIUS * 2, height: STATION_RADIUS * 2,
                  transform: 'translateX(-50%)', borderRadius: '50%',
                  boxSizing: 'border-box',
                  background: 'var(--brand)', border: '3px solid #fff',
                  boxShadow: '0 0 0 3px var(--brand)', cursor: 'pointer'
                }}
              />

              {/* year aligned with station center; label below */}
              <div
                style={{
                  position: 'absolute', left: LINE_X + 24, top: positions[idx] - (YEAR_FONT_SIZE / 2)
                }}
              >
                <div style={{ fontWeight: 600, fontSize: YEAR_FONT_SIZE, lineHeight: `${YEAR_FONT_SIZE}px` }}>{ev.year}</div>
                <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 4 }}>{ev.label}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        open={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        label={selectedIndex != null ? `${sorted[selectedIndex].year} – ${sorted[selectedIndex].label}` : 'Aperçu'}
      >
        {selectedIndex != null && (
          <img
            src={sorted[selectedIndex].image?.url ?? `${base}images/placeholder.svg`}
            alt={sorted[selectedIndex].image?.alt ?? sorted[selectedIndex].label}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
            loading="lazy"
          />
        )}
      </Lightbox>
    </section>
  )
}

export default Timeline


