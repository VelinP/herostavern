
import { useParams } from "react-router-dom"
import { getOne } from "../services/authservice"
import { useState, useEffect } from "react"

export const Details = () =>{
    const {questId} = useParams()
    console.log(questId)
    const [currentquest, setQuest] = useState({})

    useEffect(()=> { getOne(questId).then(quest=> setQuest(quest))},[questId])
    
    console.log(currentquest);

    return(
        <div className="detailsDiv">
            <img className="detailsimg" src={currentquest.imageUrl} alt="nothing"/>
        </div>
    )


}