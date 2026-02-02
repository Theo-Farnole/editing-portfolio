// import reactLogo from './assets/react.svg'
import './App.css'
import Thumbnail from './Components/Thumbnail'
import { allThumbnails } from './thumbnail'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function App() {


  return (
    <>
      <h1 className="page-title">
        Théo Farnole<br />
        Monteur vidéo
      </h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          allThumbnails.map((t) =>
            <SwiperSlide>
              <Thumbnail {...t} />
            </SwiperSlide>
          )
        }
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      {/* <div className='horizontalScroll'>
        <div className='scrollContent'>
          {
            allThumbnails.map((t) => <Thumbnail {...t} />)
          }
        </div>
      </div> */}
    </>
  )
}

export default App
