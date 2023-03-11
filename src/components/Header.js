import favicon from '../images/favicon.ico'
import { Link } from 'react-router-dom'
import { authContext } from '../contexts/authcontext'
import { useContext } from 'react'

export const Header = ()=>{
    const {user} = useContext(authContext)
    console.log(user)
    return(

    
        <nav className="mainheadernav">
            
            <ul className="mainheaderul">
                <img src={favicon} to="/" alt="harpoon" className='img'></img>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/catalog'">Quests</Link>

                {user.accessToken
                ?
                <>
                    <Link to="/logout">Logout</Link>
                </>
                :
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
                }
              
                
            </ul>


        </nav>



    )
}