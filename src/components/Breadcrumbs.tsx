import type { FC } from 'react'

export const Breadcrumbs: FC<{ currentLabel?: string }> = ({ currentLabel }) => {
  const base = '/gt1000-collection/'
  return (
    <nav aria-label="Fil d'Ariane" style={{ marginBottom: 16 }}>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 8, alignItems: 'center', color: 'var(--muted)' }}>
        <li><a href={base}>Accueil</a></li>
        <li aria-hidden="true">/</li>
        <li><span aria-current="page">{currentLabel ?? 'Ducati SportClassic - GT1000'}</span></li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs

