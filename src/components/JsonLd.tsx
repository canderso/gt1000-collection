import type { FC } from 'react'
import type { Vehicle } from '../types'

type JsonLdProps = {
  vehicle: Vehicle
}

export const JsonLd: FC<JsonLdProps> = ({ vehicle }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: vehicle.name,
    brand: vehicle.brand,
    model: vehicle.model,
    vehicleModelDate: vehicle.year,
    description: vehicle.description,
    image: [vehicle.heroImage.url, ...vehicle.gallery.map(g => g.url)],
    url: 'https://canderso.github.io/gt1000-collection/',
  }

  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify(data)}
    </script>
  )
}

export default JsonLd

