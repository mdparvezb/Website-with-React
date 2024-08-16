import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Privacy from './components/privacy/Privacy'
import Contact from './components/contact/Contact'
import Router from './Router.jsx'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Router />,
        children:[{
            path:'',
            element: <Home />
        },
        {
            path:'/about',
            element: <About />
        },
        {
            path:'/privacy',
            element: <Privacy />
        },
        {
            path:'/contact',
            element: <Contact />
        },
        {
            path:'/login',
            element: <Login />
        },
        {
            path:'/signup',
            element: <Signup />
        }
        
    ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
