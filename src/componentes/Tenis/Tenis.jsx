import axios from 'axios'
import { useEffect, useState } from 'react'
import './Tenis.css'

const Tenis = () => {
    const [tenis, setTenis] = useState([])
    console.log(tenis)
    
    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/tenis')
    .then((response)=>{
        setTenis(response.data)
    })
    },[])
    return ( 
        <>
            <h2 className='text-center my-5'>CANCHAS DE TENIS</h2>
            {tenis.map((teni)=>(
                <div className="card mb-3" style={{maxWidth: "70%"}} key={teni.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={teni.url_imagen} className="img-fluid rounded-start"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{teni.nombre}</h5>
                                <p className="card-text">Cantidad de jugadores: {teni.jugadores}</p>
                                <p className="card-text">Cancha techada: { teni.techo == true ? <p>si</p> : <p>no</p> }</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default Tenis;