import { Navigate, Outlet } from "react-router"

const PrivateRoute = ({ isAuth }) => {
      return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute;
