import { Route, Routes } from 'react-router';
import { Layout } from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contactus from '../pages/Contactus';
import { Error } from '../pages/Error';
import { PrivateRoute } from './PrivateRoute';

const routers = [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact/:id', element: <Contactus /> },
      { path: '*', element: <Error /> },
]


const PublicRoute = () => {
      return (
            <Routes>
                  <Route path="/" element={<Layout />}>
                        {routers.map(({ path, element }, index) => (
                              <Route path={path} element={element} key={index} />
                        ))}
                  </Route>
            </Routes>
      )
}

export default PublicRoute;