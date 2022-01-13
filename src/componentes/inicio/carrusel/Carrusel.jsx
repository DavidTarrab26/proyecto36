import axios from 'axios';
import { useEffect, useState } from 'react';
import './Carrusel.css'

const Carrusel = () => {
    const [deportes, setDeportes] = useState([])
    console.log(deportes)
    
    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/deportes')
    .then((response)=>{
        setDeportes(response.data)
    })
    },[])

    return ( 
        <>
            {deportes.length > 0 ?
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={deportes[0].url_imagen} className="d-block w-100 ftcar"/>
                        </div>
                        <div className="carousel-item">
                        <img src={deportes[1].url_imagen} className="d-block w-100 ftcar"/>
                        </div>
                        <div className="carousel-item">
                        <img src={deportes[2].url_imagen} className="d-block w-100 ftcar"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            : 
                <p>Cargando</p>
            }
        </>
     );
}
 
export default Carrusel;