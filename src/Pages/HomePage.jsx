import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import FooterBar from '../Components/FooterBar'
import Main from '../Components/Main'

function HomePage() {
  return (
    <>
      <NavigationBar />
      
      {/* Ensure space below navbar */}
      <div className="pt-26 sm:pt-20 md:pt-24">
        <Main />
      </div>
      
      <FooterBar />
    </>
  )
}

export default HomePage
