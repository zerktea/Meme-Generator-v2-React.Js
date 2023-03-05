import '../index.css'
// import Memesdata from '../MemeData'
import React from 'react'
export default function Form(){
    const [meme,setMeme]=React.useState({
        topText : "",
        botomText : "",
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })
    function handleForm(event){
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name] : [event.target.value]
        })
        )
    }



    const [allMemeImages,setAllMemeImages] = React.useState()
    
    React.useEffect(function (){
        fetch("https://api.imgflip.com/get_memes")
         .then((response) => response.json())
         .then((data) => setAllMemeImages(data.data.memes) )
        
     },[])
    
    const [urlImg,setUrlImg]= React.useState()
    function getRandMeme(){
        setMeme(function(prevMeme){
            return {
                ...prevMeme,
                imageUrl: allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url

            };
        })
        
    }
    
    return(
        <div className="meme">
            
                
            <input type="text" value={meme.topText} name='topText' placeholder='Meme on Top' onChange={handleForm}/>
            <input type="text" value={meme.botomText}name="botomText" placeholder='Meme on Bottom' onChange={handleForm}/>
            <button className='form--btn button-3' type="submit" onClick={getRandMeme}>Generate Meme</button>
            <div className="meme--img">
                <img src={meme.imageUrl} alt="soura" />  
                <h3 className='top'>{meme.topText}</h3>
                <h3 className='bot'>{meme.botomText}</h3>
            </div>
        </div>
    )

}