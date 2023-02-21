'use client'
import '../../assets/styles/main.scss'
import SectionHome from './components/home'
import SectionMenus from './components/menus/menus'
import SectionContact from './components/contact/contact'
import SectionFindUs from './components/findUs/findUs'
import $ from 'jquery'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import Hamburger from '../../assets/images/hamburger.svg'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const home = useRef(null)
  const findUs = useRef(null)
  const menus = useRef(null)
  const contact = useRef(null)
  const body = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(0)
  
  const handleScroll = () => {
    var position = -body.current.getBoundingClientRect().top
    
    if (position < home.current.clientHeight) {
      $('.menu').find('.line').removeClass('line')
      $('.menu').find('> #home').addClass('line')
    } else if (
      home.current.clientHeight <= position &&
      position < home.current.clientHeight + findUs.current.clientHeight
    ) {
      $('.menu').find('.line').removeClass('line')
      $('.menu').find('> #findUs').addClass('line')
    } else if (
      home.current.clientHeight + findUs.current.clientHeight <= position &&
      position <
        home.current.clientHeight +
          findUs.current.clientHeight +
          menus.current.clientHeight -
          contact.current.clientHeight
    ) {
      $('.menu').find('.line').removeClass('line')
      $('.menu').find('> #menus').addClass('line')
    } else {
      $('.menu').find('.line').removeClass('line')
      $('.menu').find('> #contact').addClass('line')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleClick(0)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleClick(pixel) {
    window.scrollTo({ top: pixel, behavior: 'smooth' })
  }

  return (
    <main ref={body}>
      <div className='header'>
        <div className='icon'>
          <Image src={Logo} alt='' priority placeholder='blur' />
        </div>
        <div className={`menu ${showMenu ? 'show' : ''}`}>
          <div className='hamburger'>
            <Image
              src={Hamburger}
              alt=''
              onClick={() => {
                setShowMenu(!showMenu)
              }}
            />
          </div>
          <a
            className='menu-list line'
            id='home'
            href='#home'
            onClick={() => {
              handleClick(0)
            }}
          >
            HOME
          </a>
          <a
            className='menu-list'
            id='findUs'
            href='#findUs'
            onClick={() => {
              handleClick(home.current.clientHeight)
            }}
          >
            FIND US
          </a>
          <a
            className='menu-list'
            id='menus'
            href='#menus'
            onClick={() => {
              handleClick(
                home.current.clientHeight + findUs.current.clientHeight
              )
            }}
          >
            MENUS
          </a>
          <a
            className='menu-list'
            id='contact'
            href='#contact'
            onClick={() => {
              handleClick(
                home.current.clientHeight +
                  findUs.current.clientHeight +
                  menus.current.clientHeight
              )
            }}
          >
            CONTACT
          </a>
        </div>
      </div>
      <section ref={home} className='section home' id='home'>
        <SectionHome />
      </section>
      <section ref={findUs} className='section findUs' id='findUs'>
        <SectionFindUs />
      </section>
      <section ref={menus} className='section menus' id='menus'>
        <SectionMenus />
      </section>
      <section ref={contact} className='section contact' id='contact'>
        <SectionContact />
      </section>
    </main>
  )
}
