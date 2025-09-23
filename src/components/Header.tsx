import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <header style={{
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      background: 'white',
      zIndex: 10,
    }}>
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <a href="/gt1000-collection/" style={{
          fontWeight: 700,
          fontSize: 18,
          color: 'inherit',
          textDecoration: 'none'
        }}>Collection GT1000</a>
        <nav>
          <a href="/gt1000-collection/histoire.html" style={{ color: 'inherit' }}>Histoire</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

