import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import ShowProduct from './components/ShowProduct';
import EditProduct from './components/EditProduct'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreateProduct></CreateProduct>}></Route>
        <Route path='/show/:id' element={<ShowProduct></ShowProduct>}></Route>
        <Route path='/edit/:id' element={<EditProduct></EditProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
