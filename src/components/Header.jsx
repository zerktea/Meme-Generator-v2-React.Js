import '../index.css'
import { FaGithub } from 'react-icons/fa';
export default function Header(){
    return(
        <div className="header">
            <div className="header--elements">
                <div className="header--img">
                    <img src="/images/troll.png" alt="meme header" />
                    <h4>Meme Generator</h4>
                </div>
                <div>
                    
                    <h2> <a href="https://github.com/zerktea"> <FaGithub/></a> </h2>
                </div>
            </div>
        </div>
    )


}