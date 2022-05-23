import React, { useState } from "react";
import './index.css'
import Header from "./components/Header";
import Home from './components/Home'
import Detail from './components/Detail'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
<<<<<<< HEAD
import Login from "./components/Login";
=======
>>>>>>> 2ed3c3b79a2e0f55bd7df9bf0b10eb5a51ba8ca3
function App() {
 
  return (
   <div className="App">
     <Router>
     <Header />
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/detail" element={<Detail/>} />
<<<<<<< HEAD
     <Route path="/login" element={<Login/>} />
=======
>>>>>>> 2ed3c3b79a2e0f55bd7df9bf0b10eb5a51ba8ca3
     </Routes>
     </Router>
     
   
   </div>
    
  );
}

export default App;
  