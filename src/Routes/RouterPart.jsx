import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import PredictionPage from '../Pages/PredictionPage'
import ResultPage from '../Pages/ResultPage'

function RouterPart() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/careers' Component={PredictionPage}/>
            <Route path='/results' Component={ResultPage}/>            
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPart
