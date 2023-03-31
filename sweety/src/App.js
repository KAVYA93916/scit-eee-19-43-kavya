import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import'./App.css';
import Aboutus from './Pages/Aboutus';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Qualification from './Pages/Qualification';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="Aboutus" element = {<Aboutus/>}/>
      <Route path="Hobbies" element = {<Hobbies/>}/>
      <Route path="Skills" element = {<Skills/>}/>
      <Route path="Experience" element = {<Experience/>}/>
      <Route path="Qualification" element = {<Qualification/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );

}

export default App;
