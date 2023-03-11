import scroll from '../images/scroll.png'
import { register } from '../services/authservice'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../contexts/authcontext'


export const Register = () =>{
    const navigate = useNavigate()
    const { logoutfunc } = useContext(authContext)


    const onsubmit = (e)=>{
        e.preventDefault()
        const { email ,password , repass } = Object.fromEntries(new FormData(e.target))
        console.log(email,password,repass);

        register(email,password).then(()=>{logoutfunc(); navigate('/login')})


    }

    return(
    <section id="register-page" className="content auth">

        <form id="register" onSubmit={onsubmit}>
            <div  className="formcontainer">
                <h1>Register</h1>
                <label htmlFor="email">Email:</label>
                <input className="buttons"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Nudash@abv.bg"
                />
                <label htmlFor="pass">Password:</label>
                <input className="buttons" type="password" name="password" id="register-password" placeholder='Password'/>
                <label htmlFor="con-pass">Confirm Password:</label>
                <input className="buttons" type="password" name="repass" id="repass" placeholder='Password'/>
                <input className="btn submit" type="submit" defaultValue="Register" />
                <img src={scroll} className="scroll" alt="scroll"></img>

                <p className="field">
                    <span>
                    If you already have profile click <a className="spanremove"  href="/register">here</a>
                    </span>
                </p>
            </div>
        </form>
        
</section>
    )
}