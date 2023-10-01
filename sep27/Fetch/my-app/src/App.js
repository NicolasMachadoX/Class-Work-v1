import {useEffect,useState} from "react"
import './App.css'

export default function App(){
  const [isLoading,setIsLoading] = useState(true)
  const [imageUrl,setImageUrl] = useState(null)
  const [error,setError] = useState(null)

  useEffect(()=>{
    if(isLoading){
      async function fetchData(){
        try {
          const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if(response.ok){
          const dog = await response.json();
          setImageUrl(dog.message);
          setError(null);
          setIsLoading(false);
        }else{
          setError("No hay imagen de perrito");
        }
        } catch (error) {
          setError("El API no esta respondiendo");
        }
        
      }
      fetchData();
    }
  },[isLoading]);


const randomDog = () =>{

  setIsLoading(true)
}


if(isLoading){
  return(
    <div className="App">
      <h1>Cargando....</h1>
    </div>
  )
}

if(error){
  return(
    <div className="App">
      <button className="buttonDog" onClick={randomDog}>Volver a intentar</button>
    </div>
  )
}

return(
  <div className="container-image">
    <div>
    <img className="image-dog" src={imageUrl} alt="ImageDog"/>
    </div>
    <div>
    <button className="buttonDog" onClick={randomDog}>Generar Perro</button>
    </div>
  </div>
)

}




