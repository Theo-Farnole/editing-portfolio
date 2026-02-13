import type { ClientOpinionData } from '../types'
import './ClientOpinion.css'
import FiveStars from './FiveStars'


function ClientOpinion({ clientName, review }: ClientOpinionData) {


    return <div className='client-opinion'>

        <FiveStars />

        <div className='content'>
            {review}
        </div>

        <p className='name'>{clientName}</p>
    </ div>
}

export default ClientOpinion
