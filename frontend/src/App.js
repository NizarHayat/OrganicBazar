import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Admin from './components/Admin';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import About from './components/About';
import EmailTemp from './components/EmailTemp';
import Footer from './components/Footer';
import Todo from './components/Todo';
import Counter from './components/Counter';
import ForgotPassword from './components/forgotPassword';

function App() {
    return (
        <>
    
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/EmailTemp" element={<EmailTemp />} />
                <Route path='/about' element={<About/>}/>
                <Route path='/Todo' element={<Todo/>}/>
                <Route path='/Counter' element={<Counter/>}/>
                <Route path='/forgotPassword' element={<ForgotPassword/>}/>
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

// App.js