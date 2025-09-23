import './App.css'
import Layout from './components/Layout'
import Breadcrumbs from './components/Breadcrumbs'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Specs from './components/Specs'
import Provenance from './components/Provenance'
import JsonLd from './components/JsonLd'
import { vehicle } from './data/vehicle'

function App() {
  return (
    <Layout>
      <Breadcrumbs currentLabel={vehicle.name} />
      <Hero vehicle={vehicle} />
      <Gallery images={vehicle.gallery} />
      <Specs specs={vehicle.specs} />
      <Provenance entries={vehicle.provenance} />
      <JsonLd vehicle={vehicle} />
    </Layout>
  )
}

export default App
