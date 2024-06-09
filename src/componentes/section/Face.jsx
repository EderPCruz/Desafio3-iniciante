import style from './Face.module.css';
import gato from '../Image/face/gato.avif';

function Face() {
    return(
        <div className={style.rosto} >
            <img 
            src={gato} alt='error' />
        </div>
    )
}

export default Face