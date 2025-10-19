import type { TimelineItem } from '../types'

const base = import.meta.env.BASE_URL || '/'

// Map events to existing assets in /public/assets when possible; fallback to placeholder
const img = {
  original: `${base}assets/Original.jpg`,
  officialFront: `${base}assets/Official-Front.jpg`,
  casualEurostar: `${base}assets/Casual-Eurostar.jpg`,
  oldNewBackFront: `${base}assets/Old-NewBackFront.jpg`,
  oldRight: `${base}assets/Old-Right.jpg`,
  oldExhaust: `${base}assets/Old-Exhaust.jpg`,
  timeline3: `${base}assets/Timeline3.jpeg`,
  placeholder: `${base}images/placeholder.svg`,
}

export const timeline: TimelineItem[] = [
  {
    year: 2006,
    label: 'Mise en circulation',
    image: { url: img.original, alt: 'Ducati GT1000 en 2006 (mise en circulation)' },
  },
  {
    year: 2016,
    label: 'Achat',
    image: { url: img.casualEurostar, alt: 'Achat de la Ducati GT1000 en 2016' },
  },
  {
    year: 2017,
    label: "Changement de l'arrière",
    image: { url: img.oldNewBackFront, alt: "Modification de l'arrière en 2017" },
  },
  {
    year: 2018,
    label: 'Changement des rétroviseurs',
    image: { url: img.oldRight, alt: 'Changement des rétroviseurs en 2018' },
  },
  {
    year: 2021,
    label: 'Nouveau pots',
    image: { url: img.oldExhaust, alt: 'Montage de nouveaux pots en 2021' },
  },
  {
    year: 2024,
    label: 'Contrôle technique valable 3 ans',
    image: { url: img.timeline3, alt: 'Contrôle technique 2024' },
  },
  {
    year: 2025,
    label: 'Vente',
    image: { url: img.placeholder, alt: 'Annonce de vente (illustration)' },
  },
]

export default timeline


