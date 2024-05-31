import style from './Skills.module.css'
import javascript from '../Image/skills/javascript.png'
import html from '../Image/skills/html.png'
import css from '../Image/skills/css.png'
import react from '../Image/skills/react.png'
import typeScript from '../Image/skills/typeScript.png'



function Skills () {
    return(
        <div id='Skill' className={style.skills}>
                      
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div id='habilidades'>
                <img className={style.habilidades} src={javascript} alt='error'/>
                <img className={style.habilidades} src={html} alt='error'/>
                <img className={style.habilidades} src={css} alt='error'/>
                <img className={style.habilidades} src={react} alt='error'/>
                <img className={style.habilidades} src={typeScript} alt='error'/>
            </div>
        </div>
    )
}

export default Skills