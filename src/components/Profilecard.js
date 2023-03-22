import { Link } from "react-router-dom"

export const ProfileCard = (props) =>{
   
    return(
    <div className="profilepagecardheader">
        <img className="profilepagecardimg" src={props.card.imageUrl} alt='nothing'></img>
        <div className="profilepagecardbody">
            {props.card.name}
            <p>Reward: {props.card.reward}</p>
        </div>
        
        <div >
        <Link to={`/catalog/${props.card._id}`}><button >Details</button></Link>
        </div>

    </div>


    )
}