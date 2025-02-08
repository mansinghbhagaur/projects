import { useNavigate } from "react-router";
import { Outlet } from "react-router";

const PublicRoute = ({ isAuth }) => {
      const navigate = useNavigate();
      return isAuth ? <Outlet /> : navigate('/');
}

export default PublicRoute;