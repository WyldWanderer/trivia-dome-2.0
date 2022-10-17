import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/Homepage"
import Nav from './components/Nav'
import SecuredPage from './pages/Securedpage'



const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/secured" element={<SecuredPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
