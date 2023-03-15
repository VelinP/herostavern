import { Quest } from "./Quest"
import { useState , useEffect } from "react"
import { getAll } from "../services/authservice"

export const AllQuests = () =>{
    const [quests , setQuests] = useState([])

    useEffect(()=> 
    {
        getAll().then(
            (allquests)=> 
            setQuests(allquests)).catch((e)=> console.log(e))},[])
    
      return(
        <div className="griddiv">
            {quests.map(quest=> <Quest key={quest._id} id={quest._id} quest={quest}/>)}

        </div>


    )
}