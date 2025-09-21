import type { FC } from 'react'
import type { SpecItem } from '../types'

type SpecsProps = {
  specs: SpecItem[]
}

export const Specs: FC<SpecsProps> = ({ specs }) => {
  return (
    <section aria-labelledby="specs-title" style={{ marginBottom: 32 }}>
      <h2 id="specs-title" style={{ fontSize: 24, marginBottom: 12 }}>Caractéristiques</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 420 }}>
          <tbody>
            {specs.map((s, idx) => (
              <tr key={idx}>
                <th scope="row" style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>{s.label}</th>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e5e7eb' }}>{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Specs

