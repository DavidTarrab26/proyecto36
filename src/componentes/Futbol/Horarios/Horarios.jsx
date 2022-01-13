import axios from 'axios';
import { useEffect, useState } from 'react';
import './Horarios.css'

const Horarios = () => {
    const [time, setTime] = useState([])
    console.log(time)

    useEffect(() =>{
        axios
        .get("https://apipdtc.herokuapp.com/futbol")
        .then((response)=>{
            setTime(response.data[0].horarios)
        })
    },[])
    return ( 
        <>
        {
            time.length > 0 ? 
                <h4>Estos son los horarios {time[0].hora}</h4>
            :
                <p>cargando</p>
        }
        
        </>
        
     );
}
 
export default Horarios;