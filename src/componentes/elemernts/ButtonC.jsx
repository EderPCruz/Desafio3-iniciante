import style from './ButtonC.module.css'

function ButtonC ({text, link}){
    return(
        <div>
            <a href={link}>
                <button className={style.Btn}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonC