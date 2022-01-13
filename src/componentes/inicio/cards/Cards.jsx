import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

const Cards = () => {
    const [cards, setCards] = useState([])
    console.log(cards)
    
    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/deportes')
    .then((response)=>{
        setCards(response.data)
    })
    },[])
    return ( 
        <>
        {cards.length > 0 ?
            <div className='my-5'>
                <h2 className='text-center my-5'>Nuestras canchas</h2>
                <div className='d-flex justify-content-center margin'>
                        <div className='row '>
                            <div className='col-4'>
                                <div className="card shadow" style={{width: "18rem"}} key={cards[0].id}>
                                <img src={cards[0].url_imagen} className="card-img-top imagen"/>
                                <div className="card-body">
                                    <h5 className="card-title">{cards[0].deporte}</h5>
                                    <Link to="/futbol" className="btn btn-primary">Ver Canchas</Link>
                                </div>
                                </div>
                            </div>

                            <div className='col-4'>
                                <div className="card shadow" style={{width: "18rem"}} key={cards[1].id}>
                                <img src={cards[1].url_imagen} className="card-img-top imagen"/>
                                <div className="card-body">
                                    <h5 className="card-title">{cards[1].deporte}</h5>
                                    <Link to="tenis" className="btn btn-primary">Ver Canchas</Link>
                                </div>
                                </div>
                            </div>

                            <div className='col-4'>
                                <div className="card shadow" style={{width: "18rem"}} key={cards[2].id}>
                                <img src={cards[2].url_imagen} className="card-img-top imagen"/>
                                <div className="card-body">
                                    <h5 className="card-title">{cards[2].deporte}</h5>
                                    <Link to="/voley" className="btn btn-primary">Ver Canchas</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             : 
             <p>Cargando</p>
         }
        </>
     );
}
 
export default Cards;