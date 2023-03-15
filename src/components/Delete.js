import { deleteOne } from "../services/authservice"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Delete = () =>{
    const {questId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{deleteOne(questId).then(()=> navigate('/catalog'))})
    return(null)
}