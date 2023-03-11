import scroll from '../images/scroll.png'

export const Register = () =>{
    

    return(
    <section id="register-page" className="content auth">

        <form id="register" >
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
                <input className="buttons" type="password" name="confirm-password" id="confirm-password" placeholder='Password'/>
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