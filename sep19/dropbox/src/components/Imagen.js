import '../style.css'
import HomePage from "../assets/Dropbox_Homepage.mp4"

const Imagen = () =>{
  return(
  <div className="video" >
    <video >
    <source src={HomePage} autoPlay muted loop type="video/mp4" ></source>

    </video>
             </div>
  )
}

export default Imagen;