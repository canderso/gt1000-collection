export type GalleryImage = {
  url: string
  alt: string
  width?: number
  height?: number
  caption?: string
}

export type SpecItem = {
  label: string
  value: string
}

export type Vehicle = {
  id: string
  name: string
  subtitle?: string
  intro?: string
  description?: string
  brand: string
  model: string
  year?: string
  heroImage: GalleryImage
  gallery: GalleryImage[]
  specs: SpecItem[]
  provenance?: string[]
}


