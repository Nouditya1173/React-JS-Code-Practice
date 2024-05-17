import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import Github ,{loaderinfo} from './Components/Github'
import Signin from './Components/Signin'
import Login from './Components/Login'

//import { loaderinfo } from './Components/Github'

/*const router = createBrowserRouter([
   {
    path: '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <Aboutus/>
      },
      {
        path : "contactus",
        element : <Contactus/>
      },
      {
        path : "github",
        element : <Github/>
      }
    ]
   }
])*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<Aboutus/>}/>
      <Route path='contactus' element = {<Contactus/>}/>
      <Route 
      loader={loaderinfo}
      path='github' element = {<Github/>}/>
      <Route path='signin' element = {<Signin/>}/>
      <Route path='login' element = {<Login/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
