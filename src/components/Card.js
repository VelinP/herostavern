

export const Card = (props) =>{
   
    return(
    <div className="homepagecardheader">
        <img className="homepagecardimg" src={props.card.imageUrl} alt='nothing'></img>
        <div className="homepagecardbody">
            {props.card.name}
            <p>Reward: {props.card.reward}</p>
        </div>
        
        <div className="homepagecardfooter">
        <button className="homepagedetails">Details</button>
        </div>

    </div>


    )
}