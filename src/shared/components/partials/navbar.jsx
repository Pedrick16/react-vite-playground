import { Link } from "react-router-dom"
import style from './styles/navbar.module.css'

function Navbar() {
  return (
    
         <div className={style.navbar}>
            <div className={ style.logo}>
                <h4>Logo</h4>
            </div>
            <div className={style["menu_container"]}>
              <Link to="/" className={style.link}>Home</Link>
              <Link to="/about" className={style.link}>About</Link>
              <Link to="contact" className={style.link}>Contact</Link>
            </div>
            <div>
              <button className="btn btn-danger">Login</button>
            </div>
           

        </div>
  
  )
}

export default Navbar
