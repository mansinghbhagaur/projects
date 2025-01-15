import { Outlet } from 'react-router'
import Header from '../component/Header'
import Footer from '../component/Footer'

export const Layout = () => {
      return (
            <>
                  <Header />
                  <Outlet />
                  <Footer />
            </>
      )
}

