import type { GalleryImage } from '../types'

const base = import.meta.env.BASE_URL || '/'

export const gallery: GalleryImage[] = [
  {
    url: `${base}assets/Official-Right.JPG`,
    alt: 'Ducati GT1000 vue côté droit (photo officielle)'
  },
  {
    url: `${base}assets/Official-Left.jpg`,
    alt: 'Ducati GT1000 vue côté gauche (photo officielle)'
  },
  {
    url: `${base}assets/Official-Counter.jpg`,
    alt: 'Compteur / instrumentation de la Ducati GT1000 (photo officielle)'
  },
  {
    url: `${base}assets/Official-Top.jpg`,
    alt: 'Ducati GT1000 vue de dessus (photo officielle)'
  },
]

export default gallery

