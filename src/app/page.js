'use client'
import '../../assets/styles/main.scss'
import SectionHome from '@/app/components/home'
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

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset

    setScrollPosition(position)

    console.log(
      home.current.clientHeight,
      findUs.current.clientHeight,
      menus.current.clientHeight,
      contact.current.clientHeight
    )
    console.log(position / window.innerHeight, position / window.innerWidth)
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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleClick(id) {
    if (id == 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (id == 'findUs') {
      window.scrollTo({ top: home.current.clientHeight, behavior: 'smooth' })
    } else if (id == 'menus') {
      window.scrollTo({
        top: home.current.clientHeight + findUs.current.clientHeight,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo({
        top:
          home.current.clientHeight +
          findUs.current.clientHeight +
          menus.current.clientHeight,
        behavior: 'smooth',
      })
    }
    setShowMenu(false)
  }

  return (
    <main>
      <div className='header'>
        <div className='icon'>
          <Image src={Logo} alt='' />
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
