import style from './Project.module.css'
import ButtonC from '../elemernts/ButtonC'
import Cards from '../elemernts/Cards'
import image10 from '../Image/projets/image10.png'
import image22 from '../Image/projets/image22.png'
import lampada from '../Image/projets/lampada.png'

function Project () {
    return(
        <div id='Projects' className= {style.projects}>
            <h1>Projeto</h1>
            
            
            <Cards
                img={image10}
                site='https://desafio1-base.netlify.app/'
                title='Desafio1-Base'
                tech='html e css'
                description='Desenvolvimento de uma landing page.'
                repository='https://github.com/EderPCruz/Desafio1-base'
                
            />
            <Cards
                img={image22}
                site='https://desafio2-iniciante.netlify.app'
                title='Desafio2-Iniciante'
                tech='html, css e javascript'
                description='Desenvolvimento de uma API'
                repository='https://github.com/EderPCruz/Desafio2-Iniciante'
            />
            <Cards
                img={lampada}
                site='https://lampadaeder.netlify.app'
                title='Projeto-Lampada'
                tech='html, css, javascript'
                description='Acender, apagar e quebrar a lampada'
                repository='https://github.com/EderPCruz/Lampada/tree/main'
            />
        {/*    <Cards
                img={}
                site=''
                title=''
                tech=''
                description=''
                repository=''
            /> */}
            <ButtonC text='Acesse meu repositorio completo' link='https://github.com/EderPCruz'/>
        </div>
    )
}

export default Project