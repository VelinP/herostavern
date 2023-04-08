import { Card } from "./Card"
import { useEffect, useState } from "react"
import { get3 } from "../services/authservice"

export const Main = ()=>{
    const [three, setThree] = useState([])
    useEffect(()=> {get3().then(data=> {setThree(data)})},[])
    
    return(

        <div className="main">
            <h1 id="questparagraph"> Most recent quests:</h1>
            <div className="homepagecarddiv">
                {
                
                three?.length >0
                ? three.map(card=> <Card card={card} key={card._id}/>) 
                : <h1 className="nocontentp">No quests</h1>
                
                }
            </div>
        </div>
        
    )
}