import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/authContext"

export const PublicRoute = ({ children }) => {

    const {state} = useContext(AuthContext)


    return state.logged
                ? <Navigate to='/'/>
                : children
}
