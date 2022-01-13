import axios from 'axios'
import { useEffect, useState } from 'react'
import './Futbol.css'

const Futbol = () => {
    const [futbol, setFutbol] = useState([])
    console.log(futbol)
    
    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/futbol')
    .then((response)=>{
        setFutbol(response.data)
    })
    },[])
    return ( 
        <>
        
            <h2 className='text-center my-5'>CANCHAS DE FUTBOL</h2>
            {futbol.map((fut)=>(
                <div className="card mb-3" style={{maxWidth: "70%"}} key={fut.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={fut.url_imagen} className="img-fluid rounded-start"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{fut.nombre}</h5>
                      <p className="card-text">Cantidad de jugadores: {fut.jugadores}</p>
                      <p className="card-text">Cancha techada: { fut.techo == true ? <p>si</p> : <p>no</p> }</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </>
     );
}
 
export default Futbol;