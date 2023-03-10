export const Login = () =>{
    return(
        <section id="login-page" className="auth">
        <form id="login" > 
        
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
                <label htmlFor="login-pass">Your password:</label>
                <input className="buttons" type="password" id="login-password" name="password" placeholder="  Password" />
                <input className="submit" type="submit" defaultValue="Login" />
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