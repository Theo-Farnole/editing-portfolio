// import reactLogo from './assets/react.svg'
import './App.css'
import Thumbnail from './Components/Thumbnail'
import { allThumbnails, thumbnails } from './thumbnail'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";


function App() {

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
      <h1 className="page-title">
        Théo Farnole<br />
        Monteur vidéo
      </h1>

      {/* <Thumbnail {...thumbnails.tasawarLahifa} /> */}

      <Splide className="thumbnail-carousel" options={splideOptions} extensions={{ AutoScroll }}>
        {
          allThumbnails.map((t) =>
            <SplideSlide>
              <Thumbnail {...t} />
            </SplideSlide>
          )
        }
      </Splide>
    </>
  )
}

export default App
