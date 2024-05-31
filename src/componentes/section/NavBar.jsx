import style from './NavBar.module.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function NavBar () {
    return(
        <div className={style.navBar} >
            <ul>
                <li>
                    <Nav.Link href='#Presentations'>Apresentação</Nav.Link> 
                </li>
                <li>
                    <Nav.Link href='#Skill'>Habilidades </Nav.Link> 
                </li>   
                <li>
                    <Nav.Link href='#Projects'>Projetos</Nav.Link> 
                </li>
            </ul>

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
        </div>
    )
}
export default NavBar