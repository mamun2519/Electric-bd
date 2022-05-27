import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navber from './Pages/Home/Navber';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Order from './Pages/Home/Order';
import RequreAuth from './Pages/Login/RequreAuth.js'
import { Toaster } from 'react-hot-toast';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';

import AllUser from './Pages/Dashboard/AllUser'
import Review from './Pages/Dashboard/Review';
import UpdateFofile from './Pages/Dashboard/UpdateFofile';
import RequreAdmin from './Pages/Login/RequreAdmin';
import ManageOrder from './Pages/Dashboard/ManageOrder'
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Payment from './Pages/Dashboard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';






function App() {
  return (
    <div className="Ap">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order/:id' element={<RequreAuth>
          <Order></Order>
        </RequreAuth>}></Route>

        <Route path='/dashboard' element={<RequreAuth>
          <Dashboard></Dashboard>
        </RequreAuth>}>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>

          <Route path='/dashboard/myOrder' element={<MyOrder/>}></Route>
         
          <Route path='/dashboard/addReview' element={<Review></Review>}></Route>
          <Route path='/dashboard/updateProfile' element={<UpdateFofile></UpdateFofile>}></Route>
          <Route path='/dashboard/user' element={<RequreAdmin>
            <AllUser></AllUser>
          </RequreAdmin>}></Route>
          <Route path='/dashboard/manageAllOrders' element={<RequreAdmin>
           <ManageOrder></ManageOrder>
          </RequreAdmin>}></Route>
          <Route path='/dashboard/addProduct' element={<RequreAdmin>
           <AddProduct></AddProduct>
          </RequreAdmin>}></Route>
          <Route path='/dashboard/manageAllprodcts' element={<RequreAdmin>
           <ManageProduct></ManageProduct>
          </RequreAdmin>}></Route>


        </Route>
        <Route path='/myProtfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
     
      <Toaster
        position="top-center"
        reverseOrder={false}
      />


    </div>
  );
}

export default App;
