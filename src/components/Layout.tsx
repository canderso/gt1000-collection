import type { FC, PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

