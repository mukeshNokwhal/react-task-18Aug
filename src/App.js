
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Form from './Form/Form';
import Data from './Data/Data';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/data' element={<Data/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
