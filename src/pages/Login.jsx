import { useEffect, useState } from 'react'
//import { usuarios } from '../services/database'
import './Login.css'
import { alertaRedireccion,alertError,generarToken } from '../helpers/funciones'// nos ahorramos lineas de codigo.
import { useNavigate } from 'react-router-dom'
// rafce-> crea un componente funcional arrow.
// rfce-> crea un compnente functional regular.

//console.log(usuarios) para comprobar que los datos estan presentes en la web



let apiUsuario='https://back-json-server-martes.onrender.com/usuarios'// esto es el back end


function Login(){
    //console.log(generarToken());
   const [getUser,setUser]=useState()// esta linea de codigo se hace por cada valor que ingreses por teclado.
   const [getPassword,setPassword]=useState()// esta linea de codigo se hace por cada valor que ingreses por teclado.el metodo get es para consultar a una base de datos.
   //const [getEmail,setEmail]=useState("correo")// esta linea de codigo se hace por cada valor que ingreses por teclado.
   // estas funciones creadas van a depender del componente login.
   const[getName,setName]=useState("");
   const[getEmail,setEmail]=useState(""); 


   const [usuarios,setUsuarios]=useState([]);// muy importante entender esto OJO

   let redireccion=useNavigate()

   function getUsuarios(){
    //fetch(apiUsuario).then((response)=>console.log(response)) //esto es para mirara completamente la respuesta lo que nos
    // interesa es el json donde viene el contenido
    fetch(apiUsuario)
        .then((response)=>response.json())
        .then((data)=>setUsuarios(data))
        .catch((error)=>console.log(error));
        
// se deberia imprimir dos veces por el mode strict en el main
   }// RECUERDA QUE UNA FUNCION SE TIENE QUE INVOCAR.
   
   useEffect(()=>{getUsuarios();},[]);// del esta original de un objecto vacio , un estado por defecto
   getUsuarios();
   //console.log(usuarios);//yo desde el front hago una promes.pero asi va de manera infinita por eso llamas el useefect


   
   





   function buscarUsuario(){
      let usuarioEncontrado=usuarios.find((item)=>getUser==item.usuario && getPassword==item.contrasena)// item es una variable de control puedes llamarlo tambien index o la forma de iniciar sesion de un usuario o un correo pondriamos ("||") and && getTipousuario=item.tipoUsuario extraido de la base de datos.
      return usuarioEncontrado
   }
   
   function iniciarSesion(){
    if(buscarUsuario()){
            let token=generarToken();//"token"-> llave , clave ,acceso
            localStorage.setItem("token",token);// para manipular,almacenar,guardar.. es importante ponerle en el set 
            localStorage.setItem("usuario",JSON.stringify(buscarUsuario()));//buscarUsuario()----> me sale object object 
            alertaRedireccion(redireccion,"Bienvenidos al sistema",'/home')//() agregar este tabulador. muy importante.porque aparece pero se le tiene que agregar , analizar el buscarUsuario().nombre 
    }else{
        alertError()

    }
    }
    // si no le mando un mensaje especifico. siepre se redicionara en lo mismo



    function registrarUsuario(){
        let auth =usuarios.some((item)=>item.correo==getEmail || item.usuario==getUser)
        if (auth){
            alertError()
        }else{
            
            let nuevoUsuario={
                name:getName,
                correo:getEmail,
                usuario:getUser,
                contrasena:getPassword,
            }
            
            fetch(apiUsuario,{
                method:"POST",
                body:JSON.stringify()
            })
        }
    }


    
   
   return( 
            //analizando los datos de username y password repitiendo estados y actualizando dato....busccar username y password
            //ingrese y analiza el evento en console inspection, despues de eso explande y analiza target y mira el valor del input.
            <div className="container">
                <input type="checkbox" id="signup_toggle"/>
                <form className="form">
                    <div className="form_front">
                        <div className="form_details">Login</div>
                        <input onChange={(evtn)=>setUser(evtn.target.value)} placeholder="Username" className="input" type="text"/>{/* al onchange le mandamos una funcion flecha anonima, cuando detecte un cambio imprima e=element or evtn=evento*/}
                        <input onChange={(evtn)=>setPassword(evtn.target.value)} placeholder="Password" className="input" type="text"/>{/*eliminamos el console log por setPassword. no queremos que solamente nos imprima pero que se visualice en la variable */ }
                        {/* <input value={getEmail} placeholder="email" className="input" type="text"/> aqui alteramos la info  y mirar los cambios en la redendarizacions*/}
                       
                        <button type='button' onClick={iniciarSesion} className="btn">Login</button>{/*aqui estamos agregando un evento onClick, type button para que no se recargue mi poryecto y no se reinicie la informacion*/}
                        <span className="switch">Don't have an account? 
                            <label className="signup_tog" for="signup_toggle">
                                Sign Up
                            </label>
                        </span>
                    </div>
                    <div className="form_back">
                        <div className="form_details">SignUp</div>
                        <input placeholder="Firstname" className="input" type="text" onChange={(evtn)=>setFirstname(evtn.target.value)}/>
                        <input placeholder="Username" className="input" type="text" onChange={(evtn)=>setUser(evtn.target.value)}/>
                        <input placeholder="Password" className="input" type="text" onChange={(evtn)=>setPassword(evtn.target.value)}/>
                        <input placeholder="email " className="input" type="text" onChange={(evtn)=>setEmail(evtn.target.value)}/>
                        
                        <button  type="button" onClick={registrarUsuario} className="btn">Signup</button>
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