import type { GalleryImage } from '../types'

const base = import.meta.env.BASE_URL || '/'

export const gallery: GalleryImage[] = [
  {
    url: `${base}assets/Official-Right.JPG`,
    alt: 'Ducati GT1000 vue côté droit'
  },
  {
    url: `${base}assets/Official-Front.jpg`,
    alt: 'Ducati GT1000 vue de face'
  },
  {
    url: `${base}assets/Official-Left.jpg`,
    alt: 'Ducati GT1000 vue côté gauche'
  },
  {
    url: `${base}assets/Official-Counter.jpg`,
    alt: 'Compteur / instrumentation de la Ducati GT1000'
  },
  {
    url: `${base}assets/Casual-Left.jpg`,
    alt: 'Ducati GT1000 vue de 3/4 gauche'
  },
  {
    url: `${base}assets/Casual-Right.jpg`,
    alt: 'Ducati GT1000 vue de 3/4 droite'
  },
  {
    url: `${base}assets/Casual-RightBack.jpg`,
    alt: 'Ducati GT1000 vue de 3/4 droite, avec la jante arrière'
  },
  {
    url: `${base}assets/Casual-Eurostar.jpg`,
    alt: 'Ducati GT1000, vue de 3/4 droite, avec la jante avant'
  },
]

export default gallery

