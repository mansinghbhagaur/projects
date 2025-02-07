import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Layout from '../Layout/Layout'

const Routers = () => {
      return (
            <BrowserRouter>

                  <Routes>
                        <Route path='/' element={<Layout />}>
                              <Route path='/' element={<Home />} />
                              <Route path='/about' element={<About />} />
                        </Route>

                  </Routes>

            </BrowserRouter>
      )
}

export default Routers







// import React from 'react'
// import { Route, Routes } from 'react-router'
// import Home from '../pages/Home'
// import About from '../pages/About'
// import Contact from '../pages/Contact'
// import Errors from '../pages/Errors'
// import Header from '../components/Header'
// import Layout from '../Layout/Layout'
// import PrivateRoute from './PrivateRoute'

// const Routers = () => {
//       const isAuth = false;
//       return (
//             <>
//                   <Routes>
//                         <Route path="/" element={<Layout />}>
//                               <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
//                                     <Route path="/contact" element={<Contact />} />
//                               </Route>
//                               <Route path="/about/:id" element={<About />} />
//                               <Route path="*" element={<Errors />} />
//                         </Route>

//                   </Routes>
//             </>
//       )
// }

// export default Routers
