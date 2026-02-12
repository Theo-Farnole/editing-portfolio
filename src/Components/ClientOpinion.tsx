import type { ClientOpinionData } from '../types'
import './ClientOpinion.css'


function ClientOpinion({ clientName, review, clientPicture }: ClientOpinionData) {


    return <div className='client-opinion'>

        <img className="avatar" src={clientPicture} />
        <p className='name'>{clientName}</p>

        <div className='content'>
            {review}
        </div>
    </ div>
}

export default ClientOpinion
