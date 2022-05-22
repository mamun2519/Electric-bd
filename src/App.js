import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navber from './Pages/Home/Navber';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';


function App() {
  return (
    <div className="Ap">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
