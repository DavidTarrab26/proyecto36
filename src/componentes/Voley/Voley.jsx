import axios from 'axios'
import { useEffect, useState } from 'react'
import './Voley.css'

const Voley = () => {
    const [voley, setVoley] = useState([])
    console.log(voley)
    
    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/voley')
    .then((response)=>{
        setVoley(response.data)
    })
    },[])
    return ( 
        <>
            <h2 className='text-center my-5'>CANCHAS DE VOLEY</h2>
            {voley.map((vol)=>(
                <div className="card mb-3" style={{maxWidth: "70%"}} key={vol.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={vol.url_imagen} className="img-fluid rounded-start"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{vol.nombre}</h5>
                                <p className="card-text">Cantidad de jugadores: {vol.jugadores}</p>
                                <p className="card-text">Cancha techada: { vol.techo == true ? <p>si</p> : <p>no</p> }</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default Voley;