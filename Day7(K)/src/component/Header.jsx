import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div>
      <div className='Header_container'>
        <div className='Header_body'>
          <div className='Logo'>
            <a href="/">
              <img
                alt="logo"
                srcSet="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/header-logo.a4cff821.svg"
                width={148}
                height={33}
                decoding="async"
                data-nimg={1}
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
          <div className='content'>
            <ul>
              <li className='bKMj'>Blog</li>
              <li className='bKMj'>Socials</li>
              <li className='bKMj' >Past Socials</li>
              <li className='bKMj'>Clubs</li>
              <li className='bKMj'>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
