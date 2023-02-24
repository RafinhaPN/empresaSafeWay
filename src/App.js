import {Routes,Route} from 'react-router-dom';
import Home from './pages/Produtos/Listar';
import Pesquisar from './pages/Produtos/Pesquisar';
import Visualizar from './pages/Produtos/Visualizar';
function App() {
  return (
    <>
     <Routes>
        <Route  path='/'  element={<Home/>}  />
        <Route  path='/pesquisar/:categoria_id'  element={<Pesquisar/>}  />
        <Route  path='/Visualizar/:id'  element={<Visualizar/>}  />
      
          
   </Routes>
    </>
  );
}

export default App;
