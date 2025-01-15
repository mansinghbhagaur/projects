import { Route, Routes } from 'react-router';
import { Layout } from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contactus from '../pages/Contactus';
import { Error } from '../pages/Error';


const PublicRoute = () => {
      return (
            <Routes>
                  <Route path="/" element={<Layout />}>
                        <Route path='*' element={<Error />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contactus />} />
                  </Route>
            </Routes>
      )
}

export default PublicRoute;