import axios from 'axios'
import { useEffect, useState } from 'react'
import './Futbol.css'

const Futbol = () => {
    const [futbol, setFutbol] = useState([])
    const [info, setInfo] = useState([]);
    const [confirmacion, setConfirmacion] = useState('')

    const canhora = (id, hora) =>{
        let todo = `Cancha: ${id} Horario : ${hora}`
        setInfo([todo, ...info])
    }
    
    const reservar = (info) =>{
        if(info.length === 0){
          return
        }
          localStorage.setItem("info", JSON.stringify(info));
        setConfirmacion('Reserva guardada')

    }
    
    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/futbol')
    .then((response)=>{
        setFutbol(response.data)
    })
    },[])
    return ( 
        <>
            {confirmacion == '' ?
              ''
              :
              <div class="alert alert-success" role="alert">
                {confirmacion}
              </div>
            }
            <h2 className='text-center my-5'>CANCHAS DE FUTBOL</h2>
            {futbol.map((fut)=>(
                <div className="card mb-3 shadow container-fluid" style={{maxWidth: "90%"}} key={fut.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={fut.url_imagen} className="img-fluid rounded-start"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{fut.nombre}</h5>
                      <p className="card-text">Cantidad de jugadores: {fut.jugadores}</p>
                      <p className="card-text">Cancha techada: { fut.techo == true ? <p>si</p> : <p>no</p> }</p>
                      {fut.horarios.map((horario)=>(
                          <button className="btn btn-outline-secondary m-1" type="submit" onClick={()=>canhora(fut.id, horario.hora)} key={horario.id}>{horario.hora}</button>
                       
                      ))}
                      <div className='d-flex justify-content-end my-3'>
                        <button className="btn btn-outline-success" type="submit" onClick={()=>reservar(info)}>Reservar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </>
     );
}
 
export default Futbol;