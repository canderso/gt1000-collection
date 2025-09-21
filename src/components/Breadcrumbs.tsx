import type { FC } from 'react'

export const Breadcrumbs: FC = () => {
  const base = '/gt1000-collection/'
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 8, alignItems: 'center', color: 'var(--muted)' }}>
        <li><a href={base}>Home</a></li>
        <li aria-hidden="true">/</li>
        <li><span aria-current="page">Ducati GT1000</span></li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs

