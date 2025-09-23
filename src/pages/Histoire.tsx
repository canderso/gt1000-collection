import type { FC } from 'react'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'

const base = import.meta.env.BASE_URL || '/'
const img750gt = `${base}images/ducati-750gt.svg`
const imgTron = `${base}images/tron-legacy.svg`

export const Histoire: FC = () => {
  return (
    <Layout>
      <Breadcrumbs currentLabel="Histoire" />
      <article>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 32, margin: 0 }}>Histoire de la Ducati SportClassic – GT1000</h1>
          <p style={{ color: 'var(--muted)', margin: '8px 0 0 0' }}>
            Des origines de la 750 GT aux hommages modernes et à sa présence au cinéma.
          </p>
        </header>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, margin: '0 0 12px 0' }}>Aux origines : la 750 GT</h2>
          <p>
            La lignée de la GT1000 trouve ses racines dans la mythique Ducati 750 GT des années 1970. 
            Avec son bicylindre en L, son style épuré et sa position de conduite classique, elle a posé les 
            bases de ce que deviendra l’esthétique emblématique des SportClassic.
          </p>
          <figure style={{ margin: '12px 0 0 0' }}>
            <img src={img750gt} alt="Ducati 750 GT (image d'illustration)" style={{ width: '100%', height: 'auto', borderRadius: 8 }} loading="lazy" />
            <figcaption style={{ color: 'var(--muted)', marginTop: 6 }}>
              Ducati 750 GT – source d’inspiration majeure de la GT1000.
            </figcaption>
          </figure>
        </section>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, margin: '0 0 12px 0' }}>Le retour néo-rétro : la série SportClassic</h2>
          <p>
            Au milieu des années 2000, Ducati ravive l’esprit des classiques avec la série SportClassic. 
            La GT1000 se distingue par son confort, son élégance et sa mécanique moderne habillée de lignes 
            intemporelles. Produite sur une courte période, elle est aujourd’hui recherchée pour son caractère 
            et sa rareté.
          </p>
        </section>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, margin: '0 0 12px 0' }}>Sur grand écran : Tron Legacy</h2>
          <p>
            La présence de la Sport 1000 au cinéma, notamment dans Tron Legacy, a contribué à faire connaître 
            la lignée SportClassic à un public plus large. Son allure musclée et ses lignes néo-rétro s’y prêtent 
            parfaitement.
          </p>
          <figure style={{ margin: '12px 0 0 0' }}>
            <img src={imgTron} alt="Extrait évoquant Tron Legacy (illustration)" style={{ width: '100%', height: 'auto', borderRadius: 8 }} loading="lazy" />
            <figcaption style={{ color: 'var(--muted)', marginTop: 6 }}>
              Tron Legacy – la Ducati Sport 1000 apparaît à l’écran.
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="more-title" style={{ marginTop: 32 }}>
          <h2 id="more-title" style={{ fontSize: 24, margin: '0 0 12px 0' }}>Pour en savoir plus</h2>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            <li>
              Ducati 750 GT – héritage officiel Ducati (
              <a href="https://www.ducati.com/fr/fr/heritage/1962-1989/750-gt" rel="nofollow noopener" target="_blank">source</a>
              )
            </li>
            <li>
              Article évoquant Tron Legacy et la Ducati Sport 1000 (
              <a href="https://www.returnofthecaferacers.com/ducati-cafe-racer/tron-ducati-legacy/" rel="nofollow noopener" target="_blank">source</a>
              )
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default Histoire

