import style from './Footer.module.css'
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

function Footer () {
    return(
        <div  className={style.footer}>
                    
            <ul>
                <li>
                   <a href='https://www.instagram.com/ederpaulinodacruz/'><FiInstagram size={30}/></a> 
                </li>
                <li>
                <a href='https://github.com/EderPCruz'><FiGithub size={30}/></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/%C3%A9der-paulino-da-cruz/'><FiLinkedin size={30}/></a>
                </li>                
            </ul>
            <p>ederpaulinodacruz@yahoo.com.br</p>
            <p>Éder P. Cruz © 2024</p>
        </div>
    )
}

export default Footer