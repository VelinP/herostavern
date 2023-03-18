// import scroll from '../images/scroll.png'
import { create } from '../services/authservice.js'
import { useNavigate } from 'react-router-dom'

export const Create = () =>{
    const navigate = useNavigate()
    
    const obsubmit = (e) =>{
        e.preventDefault()
        
        const currentdata = new FormData(e.target)
        const data = Object.fromEntries(currentdata)

        const name = currentdata.get('name')
        const type= currentdata.get('questType')
        const levelreq = currentdata.get('levelreq')
        const imageurl = currentdata.get('imageUrl')
        const reward = currentdata.get('reward')
        const description = currentdata.get('description')

        if(name === "" || type === "" || levelreq === "" || imageurl === "" || description === "" || reward === ""){
            alert('You have missing fields')
            return
        }



        create(data).then(()=> navigate('/catalog'))

    }

    return(
        <section id="create-page" className="auth">
            
            <form id="create" onSubmit={obsubmit}>
            <div className="formcontainercreate">
                
                <h1>Create Quest</h1>
                    <label htmlFor="quest">Quest name</label>
                    <input
                    type="text"
                    id="title"
                    name="name"
                    placeholder="Give a quest"
                    maxLength="30"
                />

                <label htmlFor="questType">Type</label>
                    <input
                    type="text"
                    id="questType"
                    name="questType"
                    placeholder="What type of a quest is it?"
                />

                <label htmlFor="levelreq">Required level</label>
                <input
                    type="number"
                    id="requiredlevel"
                    name="levelreq"
                    min={1}
                    placeholder={1}
                />

                <label htmlFor="quest-img">Picture</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Add a picture..."
                />

                <label htmlFor="reward">Reward</label>
                <input
                    type="text"
                    id="reward"
                    name="reward"
                    placeholder="Quest reward..."
                />

                <label htmlFor="description">Description</label>
                <textarea className="textarea"name="description" id="description" placeholder="Describe your quest" maxLength="330"/>
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

