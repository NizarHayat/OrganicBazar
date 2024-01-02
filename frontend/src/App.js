import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import EmailTemp from './components/EmailTemp';
import Footer from './components/Footer';
import Todo from './components/Todo';
import Counter from './components/Counter';
import ForgotPassword from './components/forgotPassword';
import AddProduct from './components/AddProduct';
import CustomerDashboard from './components/Dashboard/CustomerDashboard';
import PrivateRoute from './PrivateRoute';
import ProductDescription from './components/ProductDescription';
import Users from './components/Users';
import EditUser from './components/EditUser';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Cart from './components/Cart';







function App() {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EmailTemp" element={<EmailTemp />} />
        <Route path="/about" element={<About />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path='/AddProduct' element={<AddProduct/>}/>
        <Route path='/customer/dashboard' element={<CustomerDashboard/>}/>
        <Route path='/productdescription/:productId' element={<ProductDescription/>}/>
        <Route path='/Users'element={<Users/>} />
        <Route path="/edituser/:userId" element={<EditUser onUpdate={() => {}} />} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;


// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Admin from "./components/Admin";
// import { Routes, Route } from 'react-router-dom';
// import SignUp from "./components/SignUp";
// import Home from "./components/Home"
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard"
// import EmailTemp from "./components/EmailTemp"
// import Footer from "./components/Footer";

// function App() {
//   return (
//    <>
//    <Navbar />
//    <Routes>
//    <Route path="/" element={<Home />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Admin" element={<Admin />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Dashboard" element={<Dashboard/>}/>
//         <Route path="/EmailTemp" element={<EmailTemp/>}/>
//       </Routes>
   
//    <Footer/>
//    </>
//   );
// }

// export default App;