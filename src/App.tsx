// import reactLogo from './assets/react.svg'
import './App.css'
import Thumbnail from './Components/Thumbnail'
import { allThumbnails, thumbnails } from './thumbnail'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";


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
      <div className="main-title">
        <h1>Gweron</h1>
        <h2>Monteur vidéo</h2>
      </div>

      <div className='punchline'>
        <p>
          Transformez vos rushs en vidéos claires, rythmées et mémorables !<br />
        </p>
      </div>

      {/* <Thumbnail {...thumbnails.tasawarLahifa} /> */}

      <Splide className="thumbnail-carousel" options={splideOptions} extensions={{ AutoScroll }}>
        {
          allThumbnails.map((t) =>
            <SplideSlide key={t.link}>
              <Thumbnail {...t} />
            </SplideSlide>
          )
        }
      </Splide>

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
    </>
  )
}

export default App
