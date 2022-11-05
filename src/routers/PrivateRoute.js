import { useContext } from "react"
import { AuthContext } from "../auth/authContext"
import { Navigate, useLocation } from "react-router-dom";



export const PrivateRoute = ({ children }) => {

    const { state } = useContext(AuthContext);
    const {pathname, search} = useLocation()

    localStorage.setItem('lastPath', pathname + search)

    return state.logged
            ? children  
            : <Navigate to="/login"/>
}
