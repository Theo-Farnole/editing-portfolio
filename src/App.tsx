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
      <div className="main-title">
        <h1 data-text="Gweron">Gweron</h1>
        <h2 data-text="Monteur vidéo">Monteur vidéo</h2>
      </div>

      <hr className="separator" />

      <div className='punchline gradient-title'>
        <p>
          Transformez vos rushs en vidéos claires, rythmées et mémorables !<br />
        </p>
      </div>

      <Splide className="thumbnail-carousel no-body-padding" options={splideOptions} extensions={{ AutoScroll }}>
        {
          allThumbnails.map((t) =>
            <SplideSlide key={t.link}>
              <Thumbnail {...t} />
            </SplideSlide>
          )
        }
      </Splide>

      <div className="empty-space"></div>

      <div className='about-me no-body-padding'>
        <h2>Mon approche</h2>

        <p>
          Faire une belle vidéo, c’est facile.<br />
          Faire une vidéo que les gens regardent jusqu’au bout, c’est autre chose.<br />
          <br />
          <b>Monteur vidéo spécialisé YouTube</b>, je construis des vidéos pensées pour performer.<br />
          <br />
          Hook fort dès les premières secondes<br />
          Rythme maîtrisé<br />
          Relances visuelles<br />
          Structure optimisée pour la rétention<br />
          <br />
          Chaque choix de montage sert un objectif :<br />
          <b>garder l’attention et maximiser l’impact.</b>
        </p>
      </div>

      <div className="empty-space"></div>

      <div className='reviews no-body-padding'>
        <h2>Ce qu'en disent mes clients</h2>

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

      <div className="empty-space"></div>

      <div className='categories'>

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
      </div>
    </>
  )
}

export default App
