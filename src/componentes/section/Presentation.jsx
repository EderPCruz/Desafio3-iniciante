// import style from './Presentation.module.css';
// import ButtonA from '../elemernts/ButtonA'; 
// import { useEffect, useState } from 'react';

// function Presentation () {
//     const [text, setText] = useState('');
//     const toRotate = ['Éder Paulino da cruz', 'Desenvolvedor FullStack'];
//     const [loop, setloop] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const period = 1000;
//     const [delta, setDelta] = useState(100);

//     useEffect(()=>{
//         let ticker = setInterval(() => {
//             toType()
//         }, delta)
//         return() => {clearInterval(ticker)}

//     }, [text])

//     const toType =() => {
//         let i = loop % toRotate.length;
//         let fullText = toRotate[i];
//         let upDatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
    
//         setText(upDatedText);

//         if(!isDeleting && upDatedText === fullText){
//             setIsDeleting(true);
//             setDelta(period);
//         }else if(isDeleting && upDatedText === ''){
//             isDeleting(false);
//             setDelta(period);
//             setloop(loop+1);
//         }
//     }

//     return(
//         <div id='Presentations' className={style.presentation}>
//             <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
//             <h1>Olá, eu sou {text}</h1>
//             <p>Sou um apaixonado por tecnologia e soluções inovadoras.Como <br/>
//                Product Manager, eu tenho o compromisso de resolver <br/>
//                problemascomplexos e trazer resultados excepcionais para os <br/>
//                negócios.Meus projetos já geraram milhões de reais em receita <br/>
//                anualestou sempre em busca de novos desafios para superar.
//             </p>

//             <ButtonA link='https://github.com/EderPCruz' text='Conecte-se comigo!'/>
//         </div>
//     )
// }

// export default Presentation

// __________________________________________________________________________________

// import { useEffect, useState, useCallback, useMemo } from 'react';
import style from './Presentation.module.css';
import ButtonA from '../elemernts/ButtonA.jsx'; // Verifique se o caminho está correto

function Presentation () {
    // const [text, setText] = useState('');
    // const [loop, setLoop] = useState(0);
    // const [isDeleting, setIsDeleting] = useState(false);
    // const period = 2000; // tempo de pausa após digitar/deletar uma frase inteira
    // const [delta, setDelta] = useState(300 - Math.random() * 100);

    // const toRotate = useMemo(() => ['Éder Paulino da cruz', 'Desenvolvedor FullStack'], []);

    // const toType = useCallback(() => {
    //     let i = loop % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //     setText(updatedText);

    //     if (!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setDelta(period);
    //     } else if (isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoop(loop + 1);
    //         setDelta(100);
    //     } else {
    //         setDelta(100 - Math.random() * 100);
    //     }
    // }, [isDeleting, loop, text, toRotate, period]);

    // useEffect(() => {
    //     let ticker = setInterval(() => {
    //         toType();
    //     }, delta);

    //     return () => { clearInterval(ticker); };
    // }, [delta, toType]);

    return (
        <div id='Presentations' className={style.presentation}>
            
             
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Ẽder</h1>
            {/* {text} */}
             <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. Como <br />
                Product Manager, eu tenho o compromisso de resolver <br />
                problemas complexos e trazer resultados excepcionais para os <br />
                negócios. Meus projetos já geraram milhões de reais em receita <br />
                anual e estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://github.com/EderPCruz' text='Conecte-se comigo!' />
            
        </div>
    );
}

export default Presentation;
