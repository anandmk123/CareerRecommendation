import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from 'react-toastify'
import HomePage from './Pages/HomePage';
import RouterPart from './Routes/RouterPart';

function App() {

  return (
    <>
      <RouterPart></RouterPart>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
