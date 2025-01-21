import { useNavigate } from "react-router"
export const PrivateRoute = ({ isAuth, children }) => {
      const Negivate = useNavigate();
      return isAuth ? children : Negivate('/contact/:id');
}