import './Footer.css'
import ig from '../../img/ig.png'
import yt from '../../img/ytbuena.png'
import fb from '../../img/fb.png'
import mapa from '../../img/mapa.jpg'

const Footer = () => {
    return ( 
        <div>
            <div className='fondo container-fluid d-flex align-items-center'>
                <h3 className=''>Seguinos en nuestras redes sociales</h3>
                <div className='justify-content-end'>
                    <img className='logo' src={ig}/>
                    <img className='logo' src={yt}/>
                    <img className='logo' src={fb}/>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='container row shadow'>
                    <div className='col-6'>
                    <div className="my-5">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Nombre" aria-label="Username"/>
                        </div>
                        <div className="mb-5">
                            <label  className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-5">
                            <label  className="form-label">Mensaje</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h2>Donde estamos?</h2>
                        <img src={mapa} className='mapa'/>
                    </div>
                </div>
            </div>
            <div className='fondo1 container-fluid d-flex align-items-center '>
                <p>2022</p>
                <p>Programa desde tu casa</p>
            </div>
        </div>    
     );
}
 
export default Footer;