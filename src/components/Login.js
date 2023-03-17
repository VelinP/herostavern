import scroll from '../images/scroll.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../contexts/authcontext'
import * as authservice from '../services/authservice.js'

export const Login = () =>{
    const navigate = useNavigate()
    const { loginfunc } = useContext(authContext)

    const onSubmit = (e)=>{
        e.preventDefault()
        const {email, password} = Object.fromEntries(new FormData(e.target))
        
        authservice.login(email,password).then(data=>{
          loginfunc(data);
          navigate('/')
          })

      }

  
    return(
          <section id="login-page" className="auth">
          <form id="login" onSubmit={onSubmit}> 
          
              <div className="formcontainer">
                  <div className="brand-logo" />
                  <h1>Login</h1>
                  <label htmlFor="email">Email:</label>
                    <input  className="buttons"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="  Nudash@abv.bg"
                    />
                  <label htmlFor="login-pass">Password:</label>
                  <input className="buttons" type="password" id="login-password" name="password" placeholder="  Password" />
                  <input className="submitbutton" type="submit" value="Login" />
                  <img src={scroll} className="scroll" alt="scroll"></img>
                  <p className="field">
                    <span>
                      If you don't have profile click <a className="spanremove" href="/register">here</a>
                    </span>
                  </p>
              </div>
          </form>
      </section>


      )
}