import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navber from './Pages/Home/Navber';


function App() {
  return (
    <div className="Ap">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
