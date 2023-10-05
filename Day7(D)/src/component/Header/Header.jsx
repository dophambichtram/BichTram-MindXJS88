import React from 'react'
import './Header.css'
import HeaderContent from './HeaderContent'

function Header() {
  return (

    <div className='block'>
      <div className='headerImage'>
        <img src="https://whitefoobank.netlify.app/assets/img/whitefoologocap.png" width={150}></img>
      </div>
      <HeaderContent />
    </div>

  )
}

export default Header