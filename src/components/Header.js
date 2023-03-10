import favicon from '../images/favicon.ico'

export const Header = ()=>{
    return(

    
        <nav className="mainheadernav">
            
            <ul className="mainheaderul">
            <img src={favicon} href="/"alt="harpoon" className='img'></img>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/logout">Logout</a>
                <a href="/about">About</a>
                <a href="/hunts">Hunts</a>
            </ul>


        </nav>



    )
}