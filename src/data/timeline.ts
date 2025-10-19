import type { TimelineItem } from '../types'

const base = import.meta.env.BASE_URL || '/'

// Map events to existing assets in /public/assets when possible; fallback to placeholder
const img = {
  stockOriginal: `${base}assets/Stock-Original.jpg`,
  original: `${base}assets/Original.jpg`,
  newMirrors: `${base}assets/NewMirrors.jpeg`,
  newExhausts: `${base}assets/NewExhausts.jpg`,
  casualEurostar: `${base}assets/Casual-Eurostar.jpg`,
  oldNewBackFront: `${base}assets/Old-NewBackFront.jpg`,
  oldRight: `${base}assets/Old-Right.jpg`,
  oldExhaust: `${base}assets/Old-Exhaust.jpg`,
}

export const timeline: TimelineItem[] = [
  {
    year: 2006,
    label: 'Mise en circulation',
    image: { url: img.stockOriginal, alt: 'Ducati GT1000 en 2006 (mise en circulation)' },
  },
  {
    year: 2016,
    label: 'Je l\'achète, démarrage du projet',
    image: { url: img.original, alt: 'Telle qu\'elle était en 2016' },
  },
  {
    year: 2017,
    label: "Retrait du pare-choc arrière et changement des rétroviseurs",
    image: { url: img.newMirrors, alt: "Modification de l'arrière et rétros en 2017" },
  },
  {
    year: 2021,
    label: 'Nouveaux pots',
    image: { url: img.newExhausts, alt: 'Montage de nouveaux pots en 2021' },
  },
  {
    year: 2023,
    label: 'Retour en France',
    image: { url: img.casualEurostar, alt: 'Voyage retour dans l\'Eurotunnel' },
  },
  {
    year: 2024,
    label: 'Contrôle technique valable 3 ans',
  },
]

export default timeline


