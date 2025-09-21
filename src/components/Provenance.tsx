import type { FC } from 'react'

type ProvenanceProps = {
  entries?: string[]
}

export const Provenance: FC<ProvenanceProps> = ({ entries }) => {
  if (!entries || entries.length === 0) return null
  return (
    <section aria-labelledby="prov-title" style={{ marginBottom: 32 }}>
      <h2 id="prov-title" style={{ fontSize: 24, marginBottom: 12 }}>Provenance</h2>
      <ul style={{ paddingLeft: 18, margin: 0 }}>
        {entries.map((e, idx) => (
          <li key={idx} style={{ marginBottom: 6 }}>{e}</li>
        ))}
      </ul>
    </section>
  )
}

export default Provenance

