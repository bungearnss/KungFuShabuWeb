'use client'
import '../../assets/styles/main.scss'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'

export default function RootLayout({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset

    setScrollPosition(position)

    console.log(position, window.innerHeight * 4.3)

    if (position < window.innerHeight) {
      console.log(1)
      $('.menu').find('.line').removeClass('line')
      $('.menu').find('> #home').addClass('line')
    } else if (
      window.innerHeight <= position &&
      position <= window.innerHeight * 3.3
    ) {
      console.log(2)
      $('.menu').find('.line').removeClass('line')
      $('.menu').find('> #findUs').addClass('line')
    } else if (
      window.innerHeight * 3.3 <= position &&
      position <= window.innerHeight * 4.2
    ) {
      console.log(3)
      $('.menu').find('.line').removeClass('line')
      $('.menu').find('> #menus').addClass('line')
    } else {
      console.log(4)
      $('.menu').find('.line').removeClass('line')
      $('.menu').find('> #contact').addClass('line')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleClick(id) {
    if (id == 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (id == 'findUs') {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    } else if (id == 'menus') {
      window.scrollTo({ top: window.innerHeight * 3.31, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: window.innerHeight * 4.21, behavior: 'smooth' })
    }
  }
  return (
    <html lang='en'>
      <head />
      <body>
        <div className='header'>
          <div className='icon'>
            <Image src={Logo} alt='' />
          </div>
          <div className='menu'>
            <a
              className='menu-list line'
              id='home'
              href='#home'
              onClick={() => {
                handleClick('home')
              }}
            >
              Home
            </a>
            <a
              className='menu-list'
              id='findUs'
              href='#findUs'
              onClick={() => {
                handleClick('findUs')
              }}
            >
              Find Us
            </a>
            <a
              className='menu-list'
              id='menus'
              href='#menus'
              onClick={() => {
                handleClick('menus')
              }}
            >
              Menus
            </a>
            <a
              className='menu-list'
              id='contact'
              href='#contact'
              onClick={() => {
                handleClick('contact')
              }}
            >
              Contact
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
