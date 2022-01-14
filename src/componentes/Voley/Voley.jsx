import axios from 'axios'
import { useEffect, useState } from 'react'
import './Voley.css'

const Voley = () => {
    const [voley, setVoley] = useState([])
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
    .get('https://apipdtc.herokuapp.com/voley')
    .then((response)=>{
        setVoley(response.data)
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
            <h2 className='text-center my-5'>CANCHAS DE VOLEY</h2>
            {voley.map((vol)=>(
                <div className="card mb-3 shadow container-fluid" style={{maxWidth: "90%"}} key={vol.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={vol.url_imagen} className="img-fluid rounded-start"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{vol.nombre}</h5>
                                <p className="card-text">Cantidad de jugadores: {vol.jugadores}</p>
                                <p className="card-text">Cancha techada: { vol.techo == true ? <p>si</p> : <p>no</p> }</p>
                                {vol.horarios.map((horario)=>(
                          <button className="btn btn-outline-secondary m-1" type="submit" onClick={()=>canhora(vol.id, horario.hora)} key={horario.id}>{horario.hora}</button>
                       
                            ))}
                            <div className='d-flex justify-content-end my-3'>
                                <button className="btn btn-outline-success" type="submit" onClick={()=>reservar(info)} >Reservar</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default Voley;