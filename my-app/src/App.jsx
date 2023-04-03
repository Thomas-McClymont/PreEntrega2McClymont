import React from 'react';
import './App.css';

//REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ItemDetailContainer from './pages/ItemDetailContainer';

//COMPONENTS
import NavBar from "./components/NavBar/NavBar"; 

const App = () => {
  return(
    <Router>
      <div className='App'>
        <NavBar />
        <Routes> 
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />  
        </Routes>
      </div>
    </Router>
  )   
}

export default App;