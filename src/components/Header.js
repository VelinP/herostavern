import favicon from '../images/favicon.ico'
import { Link } from 'react-router-dom'
import { getUser } from '../services/authservice'

export const Header = ()=>{
    const currentuser = getUser()
    return(

    
        <nav className="mainheadernav">
            
            <ul className="mainheaderul">
                <img src={favicon} to="/" alt="harpoon" className='img'></img>
                
                
                {currentuser
                ?
                <>
                    <Link to="/profile">{currentuser.email}</Link>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/create">Give a quest</Link>
                    <Link to="/catalog">Quests</Link>
                    <Link to="/logout">Logout</Link>
                </>
                :
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/catalog">Quests</Link>
                </>
                }

                
              
                
            </ul>


        </nav>



    )
}