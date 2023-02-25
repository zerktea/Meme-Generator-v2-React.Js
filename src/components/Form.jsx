import '../index.css'
import Memesdata from '../MemeData'
import React from 'react'
export default function Form(){
    const [meme,setMeme]=React.useState({
        topText : "",
        botomText : "",
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages] = React.useState(Memesdata)
    const [urlImg,setUrlImg]= React.useState()
    function getRandMeme(){
        setMeme(function(prevMeme){
            return {
                ...prevMeme,
                imageUrl: Memesdata.data.memes[Math.floor(Math.random()*Memesdata.data.memes.length)].url

            };
        })
        
    }
    
    return(
        <div className="meme">
            
                
            <input type="text" name='hellotoo' placeholder='Meme on Top' />
            <input type="text" name="Hello" placeholder='Meme on Bottom' />
            <button className='form--btn button-3' type="submit" onClick={getRandMeme}>Generate Meme</button>
            <div className="meme--img">
                <img src={meme.imageUrl} alt="soura" />  
            </div>
        </div>
    )

}