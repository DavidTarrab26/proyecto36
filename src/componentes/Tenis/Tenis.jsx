import axios from 'axios'
import { useEffect, useState } from 'react'
import './Tenis.css'

const Tenis = () => {
    const [tenis, setTenis] = useState([])
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
    .get('https://apipdtc.herokuapp.com/tenis')
    .then((response)=>{
        setTenis(response.data)
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
            <h2 className='text-center my-5'>CANCHAS DE TENIS</h2>
            {tenis.map((teni)=>(
                <div className="card mb-3 shadow container-fluid" style={{maxWidth: "90%"}} key={teni.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={teni.url_imagen} className="img-fluid rounded-start"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{teni.nombre}</h5>
                                <p className="card-text">Cantidad de jugadores: {teni.jugadores}</p>
                                <p className="card-text">Cancha techada: { teni.techo == true ? <p>si</p> : <p>no</p> }</p>
                                {teni.horarios.map((horario)=>(
                          <button className="btn btn-outline-secondary m-1" type="submit" onClick={()=>canhora(teni.id, horario.hora)} key={horario.id}>{horario.hora}</button>
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
 
export default Tenis;