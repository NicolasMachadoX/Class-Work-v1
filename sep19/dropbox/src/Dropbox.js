import Imagen from './components/Imagen';
import Navbar from './components/navbar';
import Texto from './components/texto';
import Plan from './components/Plan';
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <div >
        <Texto/>
        <Plan/>
        <Imagen/>
    </div>
    </div>
  );
}

export default App;
