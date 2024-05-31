import style from './Footer.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer () {
    return(
        <div  className={style.footer}>
                    
            <ul>
                <li>
                   <a href='https://www.instagram.com/'><FaInstagram size={30}/></a> 
                </li>
                <li>
                <a href='https://github.com/'><FaGithub size={30}/></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/'><FaLinkedin size={30}/></a>
                </li>
            </ul>
            <p>ederpaulinodacruz@yahoo.com.br</p>
            <p>Éder P. Cruz © 2024</p>
        </div>
    )
}

export default Footer