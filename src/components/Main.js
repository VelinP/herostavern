import poster from '../images/poster.png'
import removesign from '../images/removesign.png'
import orchuman from '../images/orchuman.png'

export const Main = ()=>{
    return(
        <>
        <div>
            <article className='tavernarticle'>
                The hero's tavern is 
                a tavern far off into the mountains , where
                adventurers of all sorts gather to have a drink , have a laugh
                , and perhaps earn some gold from bounties...?
            </article>
        </div>

        <div className='signDiv'>
        <img src={removesign} alt="poster" className='signimage'></img>
        {/* <img src={orchuman} alt="poster" className='orchuman'></img> */}
        </div>
        </>
    )
}