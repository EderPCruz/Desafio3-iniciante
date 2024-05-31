import style from './Cards.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'

function Cards ({img, site, title, tech, description, repository}) {
    const [info, setInfo] = useState(false)

    function infoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }

    return (
        <div onMouseLeave={infoOff} className={style.card}>
            <a onMouseEnter={infoOn} href={site}>
                <img src={img} alt='error'/>
            </a>

            {info === true &&(
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia: </strong>{tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse o repositório' link={repository}/>
                </section>
            )}
        </div>
    )
}

export default Cards