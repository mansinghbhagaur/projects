import React from 'react'
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = ({ isAuth }) => {

      return isAuth ? <Outlet /> : <Navigate to="/" replace={true} />;
}

export default PrivateRoute
