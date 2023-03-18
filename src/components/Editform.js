// import scroll from '../images/scroll.png'
import * as authservice from '../services/authservice.js'
import { useState, useEffect } from 'react'

export const EditForm = (props) =>{
    const [data, setData] = useState({})
    useEffect(()=> {authservice.getOne(id).then(info=> setData(info))})
    
    const onsubmit= (e)=>{
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        authservice.edit(id, data).then(info => {setQuest(info);unclick()})

    }
    
    const {id , setIsClicked, setQuest} = props
    
    
    
    
    const unclick = (e)=>{
        setIsClicked(false)
    }
    
    return(
        <section id="create-page" className="auth">
            
        <form id="create" onSubmit={onsubmit}>
        <div className="formcontainercreatedetails">
            <button onClick={unclick}>X</button>
            <h1>Create Quest</h1>
                <label htmlFor="quest">Quest name</label>
                <input
                type="text"
                id="title"
                name="name"
                placeholder="Give a quest"
                maxLength="30"
                defaultValue={data.name}
            />

            <label htmlFor="questType">Type</label>
                <input
                type="text"
                id="questType"
                name="questType"
                placeholder="What type of a quest is it?"
                defaultValue={data.type}

            />

            <label htmlFor="levelreq">Required level</label>
            <input
                type="number"
                id="requiredlevel"
                name="levelreq"
                min={1}
                placeholder={1}
                defaultValue={data.levelreq}

            />

            <label htmlFor="quest-img">Picture</label>
            <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="Add a picture..."
                defaultValue={data.imageUrl}

            />

            <label htmlFor="reward">Reward</label>
            <input
                type="text"
                id="reward"
                name="reward"
                placeholder="Quest reward..."
                defaultValue={data.reward}

            />

            <label htmlFor="description">Description</label>
            <textarea className="textarea"name="description" id="description" placeholder="Describe your quest" maxLength="330" defaultValue={data.description}/>
            <input 
                className="submitbutton"
                type="submit"
                defaultValue="Describe..."
                

                
            />

        </div>
        
        </form>
    </section>



    )
}