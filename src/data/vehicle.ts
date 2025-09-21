import type { Vehicle } from '../types'

const base = import.meta.env.BASE_URL || '/'
const placeholder = new URL('images/placeholder.svg', base).toString()

export const vehicle: Vehicle = {
  id: 'ducati-gt1000',
  name: 'Ducati GT1000',
  subtitle: 'SportClassic Series',
  description: 'A modern classic with timeless lines, the Ducati GT1000 blends vintage aesthetics with contemporary engineering.',
  brand: 'Ducati',
  model: 'GT1000',
  year: '2007',
  heroImage: {
    url: placeholder,
    alt: 'Ducati GT1000 side profile (placeholder)',
    width: 1600,
    height: 900,
  },
  gallery: [
    { url: placeholder, alt: 'Front three-quarter view (placeholder)' },
    { url: placeholder, alt: 'Rear three-quarter view (placeholder)' },
    { url: placeholder, alt: 'Instrument cluster (placeholder)' },
    { url: placeholder, alt: 'Engine detail (placeholder)' },
  ],
  specs: [
    { label: 'Engine', value: '992 cc L-twin, air-cooled' },
    { label: 'Power', value: '≈ 92 hp' },
    { label: 'Torque', value: '≈ 67 lb-ft' },
    { label: 'Transmission', value: '6-speed' },
    { label: 'Dry Weight', value: '≈ 185 kg' },
    { label: 'Fuel Capacity', value: '15 L' },
  ],
  provenance: [
    'Single-owner example from new (placeholder)',
    'Regularly serviced with documented maintenance (placeholder)',
    'Stored in climate-controlled garage (placeholder)'
  ],
}


