import type { Vehicle } from '../types'

const base = import.meta.env.BASE_URL || '/'
const placeholder = `${base}images/placeholder.svg`
const heroImageUrl = `${base}assets/imgHero.jpg`

export const vehicle: Vehicle = {
  id: 'ducati-gt1000',
  name: 'Ducati GT1000',
  subtitle: 'Série SportClassic',
  intro: 'Ce site centralise tout ce qu\'il y a à savoir sur ma Ducati GT1000.'
   + ' Photos, historique de la moto, modifications, tout y est. Un peu commme un blog mais sans les articles.',
  description: 'Classique moderne aux lignes intemporelles, la Ducati GT1000 marie une esthétique vintage à une ingénierie contemporaine.'
   + ' Première mise en circulation en 2006, je l\'ai achetée en deuxième main en 2016. C\'est mon véhicule secondaire, une véritable moto plaisir pour les week-ends.'
   + ' Au fil des années, j\'ai quelques peu modifié la moto pour la rendre plus proche de la Sport 1000 et de la préparation vue dans "Tron Legacy"'
   + ' mais tout est respectant la législation. Vous retrouverez tous ces détails dans la section "Modifications".',
  brand: 'Ducati',
  model: 'GT1000',
  year: '2006',
  heroImage: {
    url: heroImageUrl,
    alt: 'Ducati GT1000, image héro',
    width: 1600,
    height: 900,
  },
  gallery: [
    { url: placeholder, alt: 'Vue trois-quarts avant (image de remplacement)' },
    { url: placeholder, alt: 'Vue trois-quarts arrière (image de remplacement)' },
    { url: placeholder, alt: 'Bloc instruments (image de remplacement)' },
    { url: placeholder, alt: 'Détail du moteur (image de remplacement)' },
  ],
  specs: [
    { label: 'Moteur', value: '992 cm³ bicylindre en L, refroidi par air' },
    { label: 'Puissance', value: '≈ 92 ch' },
    { label: 'Couple', value: '≈ 91 N·m' },
    { label: 'Transmission', value: '6 vitesses' },
    { label: 'Poids à sec', value: '≈ 185 kg' },
    { label: 'Capacité du réservoir', value: '15 L' },
  ],
  provenance: [
    'Exemplaire première main (contenu de remplacement)',
    'Entretien régulier avec historique documenté (contenu de remplacement)',
    'Stockée dans un garage climatisé (contenu de remplacement)'
  ],
}


