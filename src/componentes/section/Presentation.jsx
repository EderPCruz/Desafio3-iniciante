import style from './Presentation.module.css';
import ButtonA from '../elemernts/ButtonA'; 
import { useEffect, useState } from 'react';

function Presentation () {
    const [text, setText] = useState('');
    // const toRotate = ['testanto', 'Branch', 'version-1']
    const toRotate = ['Éder Paulino da cruz    ', 'Desenvolvedor...', '...Frontend   ', '...BackEnd    '];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 200;
    const [delta, setDelta] = useState(200);

    useEffect(()=>{
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return() => {clearInterval(ticker)}

    }, [text])

    const toType =() => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let upDatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
    
        setText(upDatedText);

        if(!isDeleting && upDatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && upDatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div id='Presentations' className={style.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras.Como <br/>
               Product Manager, eu tenho o compromisso de resolver <br/>
               problemas complexos e trazer resultados excepcionais para os <br/>
               negócios.Meus projetos já geraram milhões de reais em receita <br/>
               anual, estou sempre em busca de novos desafios para superar.
            </p>

            <ButtonA link='https://github.com/EderPCruz' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation