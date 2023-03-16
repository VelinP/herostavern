import { Link } from "react-router-dom"

export const Card = (props) =>{
   
    return(
    <div className="homepagecardheader">
        <img className="homepagecardimg" src={props.card.imageUrl} alt='nothing'></img>
        <div className="homepagecardbody">
            {props.card.name}
            <p>Reward: {props.card.reward}</p>
        </div>
        
        <div className="homepagecardfooter">
        <Link to={`/catalog/${props.card._id}`}><button className="homepagedetails">Details</button></Link>
        </div>

    </div>


    )
}