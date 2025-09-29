import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, Router, RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './assets/Layout.jsx'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/Contact/Contact.jsx'
import Sketches from './assets/components/Sketches/Sketches.jsx'
import SketchCategory from './assets/components/SketchCategory/SketchCategory.jsx'
import User from './assets/components/User/User.jsx'
import Github, { githubInfoLoder } from './assets/components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"/",
//         element:<Home />

//     },
//     {
//       path:"/about",
//       element:<About />
//     },
    
//     {
//       path:"/contact",
//       element:<Contact />
//     },
//     {
//       path:"/sketches",
//       element:<Sketches />
//     },

//     {
//       path:"/sketches/:categoryId",
//       element:<SketchCategory />
//     }
 
//   ]
//   }
// ])

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element ={<Layout/>}> 
  <Route path="/" element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="contact" element={<Contact/>}/>  
   <Route path="user/:userid" element={<User />} />
  <Route path="sketches" element={<Sketches/>}/>
  <Route path="sketches/:categoryId" element={<SketchCategory/>}/>
<Route

loader ={githubInfoLoder}
path="github" element={<Github/>}/>


  </Route>
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
