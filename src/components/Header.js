import favicon from '../images/favicon.ico'
import { Link } from 'react-router-dom'
export const Header = ()=>{
    return(

    
        <nav className="mainheadernav">
            
            <ul className="mainheaderul">
            <img src={favicon} to="/" alt="harpoon" className='img'></img>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/logout">Logout</Link>
                <Link to="/about">About</Link>
                <Link to="/catalog'">Quests</Link>
                
            </ul>


        </nav>



    )
}