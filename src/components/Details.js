
import { Link, useParams } from "react-router-dom"
import { getOne } from "../services/authservice"
import { useState, useEffect } from "react"
import { useContext } from "react"
import { authContext } from "../contexts/authcontext"

export const Details = () =>{
    const {questId} = useParams()
    const [currentquest, setQuest] = useState({})
    const { user } = useContext(authContext)
    console.log(user);

    useEffect(()=> { getOne(questId).then(quest=> setQuest(quest))},[questId])
    



    return(
        <div className="maindetails">
        <div className="detailsDiv">
            <img className="detailsimg" src={currentquest.imageUrl} alt="nothing"/>
            
            
            
            <div className="descdiv">
                <h1 id="desch4" > {currentquest.name}</h1>
                <p id="requiredleveldesc" >Required level: {currentquest.levelreq}</p>
                <p id="rewarddesc" >Reward: {currentquest.reward}</p>
                <h1 id="questdesch1">Quest description:</h1>
                
                <div className="descriptionDiv">
                <p id="detailsdesc">{currentquest.description}</p>
                </div>


                    {user._id === currentquest._ownerId? 
                        
                        <>
                        <Link>
                        <button className="submitbutton">Edit</button> 
                        </Link>
                        
                        <Link to= {`/catalog/${currentquest._id}/delete`}> 
                            <button className="submitbutton">Delete</button>
                        </Link>
                        </> 
                        
                        :

                        <>
                        </>
                    }

            </div>

            
        </div>
        </div>
    )


}