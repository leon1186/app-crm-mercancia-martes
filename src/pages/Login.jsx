import { useState } from 'react'
import './Login.css'


function Login(){
   const [getUser,setUser]=useState()// esta linea de codigo se hace por cada valor que ingreses por teclado.
   const [getPassword,setPassword]=useState()// esta linea de codigo se hace por cada valor que ingreses por teclado.
   const [getEmail,setEmail]=useState("correo")// esta linea de codigo se hace por cada valor que ingreses por teclado.
        return( 
            //analizando los datos de username y password repitiendo estados y actualizando dato....busccar username y password
            <div className="container">
                <input type="checkbox" id="signup_toggle"/>
                <form className="form">
                    <div className="form_front">
                        <div className="form_details">Login</div>
                        <input placeholder="Username" className="input" type="text"/>
                        <input placeholder="Password" className="input" type="text"/>
                        <input value={getEmail} placeholder="email" className="input" type="text"/> {/*aqui alteramos la info  y mirar los cambios en la redendarizacions*/}
                       
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