import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Map from './map.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'

// Method 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Map />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// This will start fetching the API soon after we hover over GitHub Link in Navbar and hance performance is enhance by optimising the fetch time and we do not get any lag
const gitHubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ANANDSYADAV');
  return response.json();
}

// Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Map />}>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='user/:userId' element={<User />}/>
        <Route 
        loader={gitHubInfoLoader}
        path='github' 
        element={<GitHub />}
        />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)