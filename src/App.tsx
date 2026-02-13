// import reactLogo from './assets/react.svg'
import './App.css'
import ClientOpinion from './Components/ClientOpinion';
import Thumbnail from './Components/Thumbnail'
import { allThumbnails, clientsOpinion, thumbnails } from './const'
// @ts-expect-error - splide exports typings issue
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

/**
 * TODO :
 * - Ajouter une section "avis clients" avec des témoignages de clients satisfaits
 * - Reprendre style global (trop flat, pas assez de personnalité)
 * - Ajouter des animations (ex: faire apparaître les thumbnails & les titres avec une animation quand je scroll)
 * - Ajouter une section me contacter avec les réseaux sociaux et les coordonnées
 * - Faire le style sur desktop
 */

function App() {

  const mesRealisations = {
    "Jeux multicam": [
      thumbnails.tasawarLahifa,
      thumbnails.tasawarNaim
    ],
    "Outdoor": [
      thumbnails.thealKayak,
      thumbnails.manu,
      thumbnails.coraille,
      thumbnails.thealTalharpa,
      thumbnails.thealFossiles
    ],
    "Storytelling": [
      thumbnails.etinAsafa,
      thumbnails.etinMbb
    ],
    "Vlog": [
      thumbnails.cisse,
      // TODO l'univers de marie
    ],
  }

  if (Object.values(mesRealisations).flat().length != allThumbnails.length) {
    console.warn("Tous les thumbnails ne sont pas catégorisés !")

    // Affiche les thumbnails non catégorisés
    const categorizedThumbnails = new Set(Object.values(mesRealisations).flat());
    const uncategorizedThumbnails = allThumbnails.filter(t => !categorizedThumbnails.has(t));
    console.warn("Thumbnails non catégorisés :", uncategorizedThumbnails);
  }

  const splideOptions = {
    type: "loop", // Loop back to the beginning when reaching the end
    autoScroll: {
      pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
      pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
      rewind: true, // Rewind to start when the end is reached
      speed: 0.3 // Scrolling speed
    },
    arrows: false, // Hide navigation arrows
    pagination: false, // Hide pagination dots        
    gap: "1rem", // Space between slides
  };

  return (
    <>
      <header>
        <p className='title'>Gweron</p>
      </header>

      <div className="fullpage">
        <div className='hero-layout'>


          <div className='punchline'>
            Je transforme vos rushs en vidéos qui <span className="underline">captivent</span>.
          </div>

          <p className='sub-punchline'>
            Plus de rétention. Plus de croissance.
          </p>

          <button className='cta-button'>
            Discuter de mon projet
          </button>

          <img className="down-arrow" src="img/down-arrow.png" />
        </div>
      </div>


      {/* 
      <Splide className="thumbnail-carousel no-body-padding" options={splideOptions} extensions={{ AutoScroll }}>
        {
          allThumbnails.map((t) =>
            <SplideSlide key={t.link}>
              <Thumbnail {...t} />
            </SplideSlide>
          )
        }
      </Splide> */}

      <section className='about-me no-body-padding'>
        <h2>Pourquoi me choisir ?</h2>

        <div>
          <div className='experience'>
            <p className='main-number'>3+</p>
            <p className='label'>Années d'expérience</p>
            <p className='description'>Je maîtrise les codes et les tendances de Youtube pour créer des vidéos qui performent.</p>
          </div>

          <div className='experience'>
            <p className='main-number'>999</p>
            <p className='label'>vidéos montées</p>
            <p className='description'>Des formats longs pensés pour performer.</p>
          </div>

          <div className='experience'>
            <p className='main-number'>999 999</p>
            <p className='label'>vues cumulées</p>
            <p className='description'>Des vidéos conçues pour maximiser le watch time et le taux de clic.</p>
          </div>
        </div>
      </section >


      <section className='reviews no-body-padding'>
        <h2>Ce qu'en disent mes clients</h2>

        <div>
          <Splide className="thumbnail-carousel no-body-padding" options={splideOptions} extensions={{ AutoScroll }}>
            {
              clientsOpinion.map((t) =>
                <SplideSlide key={t.clientName}>
                  <ClientOpinion {...t} />
                </SplideSlide>
              )
            }
          </Splide>
        </div>
      </section>

      <section className='categories'>

        <h2>Mes réalisations</h2>
        {
          Object.entries(mesRealisations).map(([categoryName, thumbnails]) => (
            <div key={categoryName} className="category-section">
              <h3>{categoryName}</h3>
              <div className="thumbnails-container">
                {thumbnails.map(t => <Thumbnail key={t.link} {...t} />)}
              </div>
            </div>
          ))
        }
      </section>

      <footer>
        <p className="name">Gweron</p>
      </footer>
    </>
  )
}

export default App
