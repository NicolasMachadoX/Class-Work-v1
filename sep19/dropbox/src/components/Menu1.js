import '../style.css';
import logo from '../assets/dropbox.png'
function Menu1(){ 
  return(
    <div class="menu1">
    
    <img src={logo} alt="notFound" width="30px" height="30px"/>
            <h3>DropBox</h3>
            <a href="#">Why dropBox?</a>
            <a href="#">Products</a>
            <a href="#">Answers</a>
            <a href="#">Prices</a>
        </div>
  )
}

export default Menu1 