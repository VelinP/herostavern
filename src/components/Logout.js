import { useContext, useEffect } from "react"
import { authContext } from "../contexts/authcontext"
import { useNavigate } from "react-router-dom"
import { logout } from "../services/authservice"

export const Logout = ()=>{
    const navigate = useNavigate()
    const {logoutfunc} = useContext(authContext)
    
    useEffect(()=>{logout().then(res=>{
        logoutfunc();
        localStorage.clear()
        navigate('/')
    }).catch((err)=> {console.log(err.message)})})

}