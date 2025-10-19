import type { FC } from 'react'
import { useMemo, useState } from 'react'
import type { TimelineItem } from '../types'
import Lightbox from './Lightbox'

type TimelineProps = {
  events: TimelineItem[]
  title?: string
}

const LINE_WIDTH = 2
const LINE_COLUMN_WIDTH = 24
const ROW_GAP = 16
const STATION_RADIUS = 8
const YEAR_FONT_SIZE = STATION_RADIUS * 2

const Timeline: FC<TimelineProps> = ({ events, title }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const sorted = useMemo(() => [...events].sort((a, b) => a.year - b.year), [events])

  // base not needed anymore since we only render thumbnails when image exists

  return (
    <section aria-labelledby="timeline-title" style={{ position: 'relative' }}>
      <h2 id="timeline-title" style={{ fontSize: 24, margin: '0 0 12px 0' }}>{title ?? 'Timeline'}</h2>

      <div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', rowGap: ROW_GAP }}>
          {sorted.map((ev, idx) => {
            const isFirst = idx === 0
            const isLast = idx === sorted.length - 1
            const hasSingle = sorted.length === 1
            const topOffset = hasSingle ? STATION_RADIUS : (isFirst ? STATION_RADIUS : -ROW_GAP / 2)
            const bottomOffset = hasSingle ? STATION_RADIUS : (isLast ? STATION_RADIUS : -ROW_GAP / 2)
            return (
              <li
                key={`${ev.year}-${idx}`}
                style={{
                  display: 'grid', gridTemplateColumns: `${LINE_COLUMN_WIDTH}px 1fr`, columnGap: 16,
                  position: 'relative', padding: 0
                }}
              >
                {/* left column: vertical line segment + station */}
                <div style={{ position: 'relative' }} aria-hidden="true">
                  {/* line segment for this item */}
                  <div
                    style={{
                      position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                      top: topOffset, bottom: bottomOffset,
                      width: LINE_WIDTH, background: 'var(--brand)'
                    }}
                  />
                  {/* station dot */}
                  <div
                    style={{
                      width: STATION_RADIUS * 2, height: STATION_RADIUS * 2,
                      borderRadius: '50%', boxSizing: 'border-box',
                      background: 'var(--brand)', border: '3px solid #fff',
                      boxShadow: `0 0 0 3px var(--brand)`,
                      position: 'relative', left: '50%', transform: 'translateX(-50%)'
                    }}
                  />
                </div>

                {/* right column: content */}
                <div>
                  <div style={{ fontWeight: 600, fontSize: YEAR_FONT_SIZE, lineHeight: `${YEAR_FONT_SIZE}px` }}>{ev.year}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 4 }}>{ev.label}</div>

                  {/* thumbnail button to open lightbox (only if image provided) */}
                  {ev.image?.url && (
                    <div style={{ marginTop: 8 }}>
                      <button
                        type="button"
                        onClick={() => setSelectedIndex(idx)}
                        style={{
                          padding: 0, border: 'none', background: 'transparent', cursor: 'pointer',
                          display: 'inline-block', borderRadius: 8, overflow: 'hidden'
                        }}
                        aria-label={`Agrandir la photo : ${ev.label} (${ev.year})`}
                      >
                        <img
                          src={ev.image.url}
                          alt={ev.image.alt ?? ev.label}
                          style={{
                            width: 'min(220px, 48vw)', height: 'auto', display: 'block'
                          }}
                          loading="lazy"
                        />
                      </button>
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <Lightbox
        open={selectedIndex !== null && !!sorted[selectedIndex].image?.url}
        onClose={() => setSelectedIndex(null)}
        label={selectedIndex != null ? `${sorted[selectedIndex].year} – ${sorted[selectedIndex].label}` : 'Aperçu'}
      >
        {selectedIndex != null && sorted[selectedIndex].image?.url && (
          <img
            src={sorted[selectedIndex].image!.url}
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


