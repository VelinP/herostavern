
import { Link, useParams } from "react-router-dom"
import { getOne } from "../services/authservice"
import { useState, useEffect } from "react"

export const Details = () =>{
    const {questId} = useParams()
    const [currentquest, setQuest] = useState({})

    useEffect(()=> { getOne(questId).then(quest=> setQuest(quest))},[questId])
    
    return(
        <div className="detailsDiv">
            <img className="detailsimg" src={currentquest.imageUrl} alt="nothing"/>
            
            
            
            <div className="descdiv">
                <h1 id="desch4" > {currentquest.name}</h1>
                <p id="requiredleveldesc" >Required level: {currentquest.levelreq}</p>
                <p id="rewarddesc" >Reward: {currentquest.reward}</p>
                <p id="detailsdesc">
                {currentquest.description}</p>
            </div>

            <Link>
            <button id="editbutton">Edit</button> 
            </Link>
            
            <Link to= {`/catalog/${currentquest._id}/delete`}> 
                <button id="deletebutton">Delete</button>
            </Link>
        </div>

    )


}