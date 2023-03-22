import { getUser } from "../services/authservice"
import { useParams } from "react-router-dom"
import { Card } from "./Card"
import { useState, useEffect } from "react"
import { getAll } from "../services/authservice"

export const Profile = () =>{
    const {userId} = useParams()
    const user = getUser()
    
    const [ cards , setCards] = useState([])

    useEffect(()=> 
    {
        getAll().then(
            allquests=> 
            
            {
            // allquests.filter(quest => quest._ownerId === userId)
            setCards(allquests)
        
            }
            

            ).catch((e)=> console.log(e))},[])

    console.log(cards)
    return (

         
        <div className="main">
        
            <h1 className="profileh1"> Welcome,{user.email}</h1>
            
            <div>
            <div className="profilediv">
                {cards.map(card=> <Card key={card._id} card={card}/> )}
            </div>

        </div>




        </div>


    )
}