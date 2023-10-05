import React from 'react'
import './Header.css'
import HeaderContent from './HeaderContent'

function Header() {
  return (

    <div className="container">
      <div className='headerImage'>
        <img src="https://whitefoobank.netlify.app/assets/img/whitefoologohead.png" width={30}></img>
        <img src="https://whitefoobank.netlify.app/assets/img/whitefoologocap.png" width={100}></img>
      </div>
      <HeaderContent />
    </div>

  )
}

export default Header