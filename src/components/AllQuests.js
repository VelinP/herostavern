import { Quest } from "./Quest"
import { useState , useEffect } from "react"
import { getAll } from "../services/authservice"
import x from '../images/x.png'



export const AllQuests = () =>{
    const [quests , setQuests] = useState([])

    useEffect(()=> 
    {
        getAll().then(
            (allquests)=> 
            setQuests(allquests)).catch((e)=> console.log(e))},[])
    
      return(
        <div className="griddiv">
            {quests.length >0 ? quests.map(quest=> <Quest key={quest._id} id={quest._id} quest={quest}/>) : <img src= {x} className="quests" alt='nothing'></img>}
            

        </div>


    )
}