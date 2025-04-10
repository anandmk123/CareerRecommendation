import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import FooterBar from '../Components/FooterBar'
import UserInputForm from '../Components/UserInputForm'

function PredictionPage() {
  return (
    <>
    
    <NavigationBar />
      
      {/* Ensure space below navbar */}
      <div className="pt-26 sm:pt-20 md:pt-24">
        <UserInputForm></UserInputForm>
      </div>
      <FooterBar />
    </>
  )
}

export default PredictionPage
