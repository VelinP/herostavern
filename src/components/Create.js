import scroll from '../images/scroll.png'
import { create } from '../services/authservice.js'
import { useNavigate } from 'react-router-dom'

export const Create = () =>{
    const navigate = useNavigate()
    
    const obsubmit = (e) =>{
        e.preventDefault()
        

        const data = Object.fromEntries(new FormData(e.target)) 
        create(data).then(()=> navigate('/'))

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
                />

                <label htmlFor="questType">Category:</label>
                    <input
                    type="text"
                    id="questType"
                    name="questType"
                    placeholder="What type of a quest is it?"
                />

                <label htmlFor="levelreq">MaxLevel:</label>
                <input
                    type="number"
                    id="requiredlevel"
                    name="levelreq"
                    min={1}
                    placeholder={1}
                />

                <label htmlFor="quest-img">Image:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Add a picture..."
                />

                <label htmlFor="description">Summary:</label>
                <textarea name="description" id="description" defaultValue={"Describe your quest"} />
                <input
                    className="btn submit"
                    type="submit"
                    defaultValue="Give a quest"
                />

            </div>
            
            </form>
        </section>

    )
}

