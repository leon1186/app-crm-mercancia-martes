import Login from '../pages/Login'
import Home from '../pages/Home'
export let enrutador =[
    {
        path:'/',// recuerda que aqui se necesita por lo menos tener un slash en el path dentro de los objetos 
        element:<Login/>
    },
    {
        path:'/home',
        element:<Home/>

    }

]
//export{
 //   enrutador
//}

// estos son los tres tipos de exportacion 
// export default enrutador as well