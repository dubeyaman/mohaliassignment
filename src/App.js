
import './App.css';
import Nav from './components/nav';

import { Signup } from './components/signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
   

        <Route path='/signup' element={ <Signup/>} />
       
      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
