
import './App.css';
import Footer from './componentes/section/Footer';
import NavBar from './componentes/section/NavBar';
import Presentation from './componentes/section/Presentation';
import Project from './componentes/section/Project';
import Skills from './componentes/section/Skills';
import Face from './componentes/section/Face';

function App() {
  

  return (
    
    <div className="App">
      <NavBar/>
      <Face/>
      <Presentation/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
   
  )
}

export default App
