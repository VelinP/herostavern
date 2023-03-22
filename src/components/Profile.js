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

                debugger;
            let truecards = allquests.filter(quest => quest._ownerId === user._id)
            console.log(truecards)
            setCards(truecards)
        
            }
            

            ).catch((e)=> console.log(e))},[])

    console.log(cards)
    return (

         
        <div className="main">
        
            <h1 className="profileh1"> Welcome,{user.email}</h1>
            
            <div>
            <div className="profilediv">
                {cards.length >0 ?cards.map(card=> <ProfileCard key={card._id} card={card}/> ) :  <img src= {x} className="quests" alt='nothing'></img>}
            </div>

        </div>




        </div>


    )
}