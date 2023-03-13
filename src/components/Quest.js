import { Link } from "react-router-dom"

export const Quest = (props) =>{
    return(
       <div className="card">
        <img className="cardimg" src={props.quest.imageUrl} alt="quest" />
        
        <h4>Objective: {props.quest.name}</h4>
        <p>Type: {props.quest.questType}</p>
        <p><Link to={`/catalog/${props.id}`} >Details</Link></p>
        
        </div>

    )
}

