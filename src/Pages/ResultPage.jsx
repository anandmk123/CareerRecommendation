import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import FooterBar from '../Components/FooterBar'
import Results from '../Components/Results'

function ResultPage() {
  return (
    <>
      <NavigationBar/>        
      <div className="pt-26 sm:pt-20 md:pt-24 overflow-hidden">
        <Results></Results>    
      </div>
      <FooterBar/>
    </>
  )
}

export default ResultPage
