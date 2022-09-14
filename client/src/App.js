import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import CreateProduct from './components/CreateProduct';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreateProduct></CreateProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
