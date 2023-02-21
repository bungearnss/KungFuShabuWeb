import '../../../assets/styles/main.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ban01 from '../../../assets/images/ban01.webp'
import ban02 from '../../../assets/images/ban02.webp'
import ban03 from '../../../assets/images/ban03.webp'
import ban04 from '../../../assets/images/ban04.jpg'
import ban01_mobile from '../../../assets/images/ban02_mobile.webp'
import ban02_mobile from '../../../assets/images/ban01_mobile.webp'
import ban03_mobile from '../../../assets/images/ban03_mobile.webp'

export default function SectionHome() {
  const items = [
    { id: 0, imgDesktop: ban01, imgMobile: ban01_mobile },
    { id: 1, imgDesktop: ban02, imgMobile: ban02_mobile },
    { id: 2, imgDesktop: ban03, imgMobile: ban03_mobile },
    { id: 3, imgDesktop: ban04, imgMobile: ban04 },
  ]
  const [current, setPosition] = useState(0)
  const [mouseOver, setMouseOver] = useState(false)
  const [windowWidth, setWindowWIdth] = useState(0)

  useEffect(() => {
    setWindowWIdth(window.innerWidth)
    if (mouseOver) {
      const timer = setInterval(() => {
        nextSlide()
      }, [3000])
      return () => clearInterval(timer)
    }
  }, [mouseOver])

  function nextSlide() {
    setPosition((prev) => (prev + 1) % items.length)
  }

  function prevSlide() {
    setPosition((prev) => Math.abs((prev - 1) % items.length))
  }

  return (
    <div
      className='slider'
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <div className='image'>
        <Image
          src={
            windowWidth > 768
              ? items[current].imgDesktop
              : items[current].imgMobile
          }
          alt=''
          priority
          placeholder='blur'
        />
      </div>

      <div className='dot-bar'>
        {items.map((item) => (
          <div
            id={item.id}
            key={item.id}
            className={`dot ${item.id == current ? 'active' : ''}`}
            onClick={(e) => {
              position = e.target.id
              changeCarousel()
            }}
          />
        ))}
      </div>

      <i
        className='left arrows'
        style={{ zIndex: '2', position: 'absolute' }}
        onClick={() => {
          prevSlide()
        }}
      >
        <svg viewBox='0 0 100 100'>
          <path d='M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z'></path>
        </svg>
      </i>
      <i
        className='right arrows'
        style={{ zIndex: '2', position: 'absolute' }}
        onClick={() => {
          nextSlide()
        }}
      >
        <svg viewBox='0 0 100 100'>
          <path
            d='M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z'
            transform='translate(100, 100) rotate(180) '
          ></path>
        </svg>
      </i>
    </div>
  )
}
