import './App.css';
import BarraHerramientas from './componentes/BarraHerramientas';
import TemaContext from './contexts/TemaContext';
import temas from './mocks/mock-temas'
import Texto from './componentes/Texto';


function App() {
   
    return (
      <div>
        <TemaContext.Provider value={temas.light}> 
          
          
            <BarraHerramientas></BarraHerramientas>
          
          
          </TemaContext.Provider> 
      
        <Texto> </Texto>

      </div>
    )
  }

export default App
