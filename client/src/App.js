import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import ShowProduct from './components/ShowProduct';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreateProduct></CreateProduct>}></Route>
        <Route path='/show/:id' element={<ShowProduct></ShowProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
