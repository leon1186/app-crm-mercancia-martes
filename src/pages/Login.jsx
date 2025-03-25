import './Login.css'


function Login(){
        return( 
            
            <div className="container">
                <input type="checkbox" id="signup_toggle"/>
                <form className="form">
                    <div className="form_front">
                        <div className="form_details">Login</div>
                        <input placeholder="Username" className="input" type="text"/>
                        <input placeholder="Password" className="input" type="text"/>
                        <button className="btn">Login</button>
                        <span className="switch">Don't have an account? 
                            <label className="signup_tog" for="signup_toggle">
                                Sign Up
                            </label>
                        </span>
                    </div>
                    <div className="form_back">
                        <div className="form_details">SignUp</div>
                        <input placeholder="Firstname" className="input" type="text"/>
                        <input placeholder="Username" className="input" type="text"/>
                        <input placeholder="Password" className="input" type="text"/>
                        <input placeholder="Confirm Password" className="input" type="text"/>
                        <button className="btn">Signup</button>
                        <span className="switch">Already have an account? 
                            <label className="signup_tog" for="signup_toggle">
                                Sign In
                            </label>
                        </span>
                    </div>
                </form>
            </div>
        )

}
// siempre mirar los input and slash es codigo previamente creado en html. y lo vamos a trabajar en react.
// toca cerrar todos los elementos. si tendremos estos inconvenietes en REACT 

export default Login