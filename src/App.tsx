import './App.scss'
import Thumbnail from './Components/Thumbnail'
import { thumbnails } from './const'
// @ts-expect-error - splide exports typings issue
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import AnimatedCounter from './Components/AnimatedCounter'
import ContactForm from './Components/ContactForm/ContactForm'

/**
 * TODO :
 * - Ajouter une section me contacter avec les réseaux sociaux et les coordonnées
 * - Ajouter des animations (ex: faire apparaître les thumbnails & les titres avec une animation quand je scroll)
 * - Faire le style sur desktop
 */

function App() {

  const mesRealisations = (() => {
    const byCategory = new Map<string, typeof thumbnails>()
    const order: string[] = []
    for (const t of thumbnails) {
      if (!byCategory.has(t.category)) {
        order.push(t.category)
        byCategory.set(t.category, [])
      }
      byCategory.get(t.category)!.push(t)
    }
    return order.map((name) => [name, byCategory.get(name)!] as const)
  })()

  // @ts-ignore
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
        <p className='title'>Théo Farnole</p>
      </header>

      <div className="fullpage">
        <div className='hero-layout'>


          <div className='punchline'>
            Je transforme vos rushs en vidéos qui <span className="underline">captivent</span>.
          </div>

          <p className='sub-punchline'>
            Plus de rétention. Plus de croissance.
          </p>

          <a href="#contact" className='cta-button'>
            Discuter de mon projet
          </a>

          <img className="down-arrow" src="img/down-arrow.png" />
        </div>
      </div>


      {/* 
      <Splide className="thumbnail-carousel no-body-padding" options={splideOptions} extensions={{ AutoScroll }}>
        {
          thumbnails.map((t) =>
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
            <AnimatedCounter end={3} duration={2} className="main-number" />
            <p className='label'>Années d'expérience</p>
            <p className='description'>Je maîtrise les codes et les tendances de Youtube pour créer des vidéos qui performent.</p>
          </div>

          <div className='experience'>
            <AnimatedCounter end={60} duration={1.5} className="main-number" />
            <p className='label'>vidéos montées</p>
            <p className='description'>Des formats longs pensés pour performer.</p>
          </div>

          <div className='experience'>
            <AnimatedCounter end={480000} duration={1} className="main-number" />
            <p className='label'>vues cumulées</p>
            <p className='description'>Des vidéos conçues pour maximiser le watch time et le taux de clic.</p>
          </div>
        </div>
      </section >


      <section id="contact" className='contact no-body-padding'>
        <h2>Discutons de votre projet</h2>

        <ContactForm />
      </section>

      {/* <section className='reviews no-body-padding'>
        <Splide className="thumbnail-carousel no-body-padding" options={splideOptions} extensions={{ AutoScroll }}>
          {
            clientsOpinion.map((t) =>
              <SplideSlide key={t.clientName}>
                <ClientOpinion {...t} />
              </SplideSlide>
            )
          }
        </Splide>
      </section> */}

      <section className='categories'>

        <h2>Mes réalisations</h2>
        {
          mesRealisations.map(([categoryName, categoryThumbnails]) => (
            <div key={categoryName} className="category-section">
              <h3>{categoryName}</h3>
              <div className="thumbnails-container">
                {categoryThumbnails.map(t => <Thumbnail key={t.link} {...t} />)}
              </div>
            </div>
          ))
        }
      </section>

      <footer>
        <p className="name">Théo Farnole</p>
      </footer>
    </>
  )
}

export default App
