// import reactLogo from './assets/react.svg'
import './App.css'
import Thumbnail from './Components/Thumbnail'
import { allThumbnails, thumbnails } from './thumbnail'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

/**
 * TODO :
 * - Faire style de la la punchline
 * - Ajouter une section "à propos de moi" avec une photo et un texte de présentation
 * - Ajouter une section "avis clients" avec des témoignages de clients satisfaits
 * - Reprendre style global (trop flat, pas assez de personnalité)
 * - Ajouter des animations (ex: faire apparaître les thumbnails avec une animation, ajouter un hover sur les thumbnails, etc.)
 * - Ajouter un footer avec les réseaux sociaux et les coordonnées
 * - Faire le style sur desktop
 */

function App() {

  const categories = {
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

  if (Object.values(categories).flat().length != allThumbnails.length) {
    console.warn("Tous les thumbnails ne sont pas catégorisés !")

    // Affiche les thumbnails non catégorisés
    const categorizedThumbnails = new Set(Object.values(categories).flat());
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
      <img src="img/profile.webp" alt="Profile" className="profile-picture no-body-padding" />

      <div className="main-title">
        <h1 data-text="Gweron">Gweron</h1>
        <h2 data-text="Monteur vidéo">Monteur vidéo</h2>
      </div>

      <div className='punchline'>
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

      <div className='about-me no-body-padding'>
        Test + arguments marketing + réseaux
      </div>

      <div className='about-me no-body-padding'>
        Avis clients
      </div>

      <div className='categories'>

        <h2>Mes réalisations</h2>
        {
          Object.entries(categories).map(([categoryName, thumbnails]) => (
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
