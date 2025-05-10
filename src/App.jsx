import React, { Children } from 'react'
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Homepage from './Pages/Homepage';
import Product from './Pages/Product'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import Cart from './Components/Card';





function App() {


  return (
    <>
      <div className="min-h-screen bg-base-200 p-4">
        <BrowserRouter>
          <Routes>


            <Route element={<HomeLayout/>}>
              <Route path="/" element={<Homepage />} />
              <Route path="/product/:id" element={<Product />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/Cart" element={<Cart />} />

            <Route path="*" element={<Navigate to="/" />} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
