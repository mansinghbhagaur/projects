import React from 'react'
import { useNavigate } from 'react-router';

const PublicRoute = ({ children }) => {
      const Navigate = useNavigate();
      const isAuth = false;
      return isAuth ? children : <Navigate to="/login" replace={true} />
}

export default PublicRoute
