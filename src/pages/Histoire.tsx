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
            Des origines de la <a href="https://www.ducati.com/fr/fr/heritage/1962-1989/750-gt" target="_blank" rel="noopener">Ducati 750 GT</a> à la 
            <a href="https://fr.wikipedia.org/wiki/Ducati_SportClassic" target="_blank" rel="noopener">série Ducati SportClassic</a> et à sa place dans la pop culture.
          </p>
        </header>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, margin: '0 0 12px 0' }}>Origines</h2>
          <p>
            La <a href="https://www.ducati.com/fr/fr/heritage/1962-1989/750-gt" target="_blank" rel="noopener">Ducati 750 GT</a> (début des années 1970) inaugure le 
            bicylindre en « L » et un cadre en treillis qui deviendront des signatures de la marque. Avec son style routier épuré, 
            elle pose les bases esthétiques et techniques d’une lignée qui inspirera directement la <a href="/gt1000-collection/" rel="canonical">GT1000</a> de la 
            famille <a href="https://fr.wikipedia.org/wiki/Ducati_SportClassic" target="_blank" rel="noopener">SportClassic</a>.
          </p>
          <figure style={{ margin: '12px 0 0 0' }}>
            <img src={img750gt} alt="Ducati 750 GT (image d'illustration)" style={{ width: '100%', height: 'auto', borderRadius: 8 }} loading="lazy" />
            <figcaption style={{ color: 'var(--muted)', marginTop: 6 }}>
              La 750 GT, matrice de la GT1000 et de l’esthétique néo‑rétro.
            </figcaption>
          </figure>
        </section>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, margin: '0 0 12px 0' }}>Ducati SportClassic</h2>
          <p>
            La gamme <a href="https://fr.wikipedia.org/wiki/Ducati_SportClassic" target="_blank" rel="noopener">Ducati SportClassic</a> (2006–2010) rassemble trois modèles : 
            la Sport, la Paul Smart 1000 LE et la GT. Toutes partagent le bicylindre desmodromique de 992&nbsp;cm³ (≈&nbsp;92&nbsp;ch), un 
            cadre treillis tubulaire et un design néo‑rétro directement inspiré des Ducati des années 1970. La 
            <strong>GT1000</strong> privilégie le confort et l’usage routier, la <strong>Sport</strong> adopte une ergonomie plus engagée, tandis que la 
            <strong>Paul Smart</strong> rend hommage à la 750&nbsp;SS victorieuse d’Imola. En 2008, la <strong>GT&nbsp;Touring</strong> ajoute pare‑brise et 
            accessoires de voyage.
          </p>
        </section>

        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, margin: '0 0 12px 0' }}>Pop Culture</h2>
          <p>
            La <strong>Ducati Sport&nbsp;1000</strong> apparaît au cinéma dans <a href="https://www.returnofthecaferacers.com/ducati-cafe-racer/tron-ducati-legacy/" target="_blank" rel="noopener">Tron&nbsp;Legacy</a>. 
            Pour les besoins du film, la moto est légèrement modifiée (clignotants supprimés/miniaturisés, «&nbsp;tail tidy&nbsp;», bande LED, pneus pluie), 
            renforçant son allure musclée et son statut d’icône néo‑rétro.
          </p>
          <figure style={{ margin: '12px 0 0 0' }}>
            <img src={imgTron} alt="Tron Legacy – Ducati Sport 1000 (illustration)" style={{ width: '100%', height: 'auto', borderRadius: 8 }} loading="lazy" />
            <figcaption style={{ color: 'var(--muted)', marginTop: 6 }}>
              Tron&nbsp;Legacy popularise la silhouette de la Sport&nbsp;1000 auprès du grand public.
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="links-title" style={{ marginTop: 32 }}>
          <h2 id="links-title" style={{ fontSize: 24, margin: '0 0 12px 0' }}>Liens utiles</h2>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            <li>
              <a href="https://www.ducati.com/fr/fr/heritage/1962-1989/750-gt" target="_blank" rel="noopener">Ducati&nbsp;750&nbsp;GT – Héritage officiel Ducati</a>
            </li>
            <li>
              <a href="https://fr.wikipedia.org/wiki/Ducati_SportClassic" target="_blank" rel="noopener">Ducati&nbsp;SportClassic – Wikipédia</a>
            </li>
            <li>
              <a href="https://www.returnofthecaferacers.com/ducati-cafe-racer/tron-ducati-legacy/" target="_blank" rel="noopener">Tron&nbsp;Legacy et la Ducati Sport&nbsp;1000 – Return of the Cafe Racers</a>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default Histoire

