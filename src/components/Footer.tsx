import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer style={{ borderTop: '1px solid #e5e7eb', marginTop: 40 }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px', color: '#6b7280' }}>
        <small>© {new Date().getFullYear()} GT1000 Collection</small>
      </div>
    </footer>
  )
}

export default Footer

