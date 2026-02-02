import type { ThumbnailData } from '../thumbnail'
import './Thumbnail.css'

function Thumbnail({ title, link, thumbnail }: ThumbnailData) {


    return <div className='thumbnail'
        onClick={() => window.open(link, "_blank")}
        style={{ cursor: "pointer" }}
        role="link" // important pour l'accessibilité
        tabIndex={0} // permet de focus avec Tab
    >
        <img src={thumbnail} />
        <div className='content'>
            <p>{title}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right absolute top-0 left-0 size-full duration-300 transition-transform group-hover:translate-x-5 group-hover:-translate-y-5" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
        </div>
    </div>
}

export default Thumbnail
