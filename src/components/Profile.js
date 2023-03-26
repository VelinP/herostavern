import { getUser } from "../services/authservice"
import { useParams } from "react-router-dom"
import { ProfileCard } from "./Profilecard"
import { useState, useEffect } from "react"
import { getAll } from "../services/authservice"
import x from '../images/x.png'

export const Profile = () =>{
    const {userId} = useParams()
    const user = getUser()
    
    const [ cards , setCards] = useState([])

    useEffect(()=> 
    {
        getAll().then(
            allquests=> 
            
            {
            let truecards = allquests.filter(quest => quest._ownerId === userId)
            console.log(truecards)
            setCards(truecards)
        
            }
            

            ).catch((e)=> console.log(e))},[userId])

    return (

         
        <div className="main">
        
            <h1 className="profileh1"> Welcome,{user.email}</h1>
            
            <div>

            {cards.length >0 
            ?
            <div className="profilediv">{cards.map(card=> <ProfileCard key={card._id} card={card}/>)}</div> 
            :  
            <img src= {x} className="quests" alt='nothing'></img>}

        </div>




        </div>


    )
}