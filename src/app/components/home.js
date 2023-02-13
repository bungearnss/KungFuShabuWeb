import '../../../assets/styles/main.scss'
import testImg2 from '../../../assets/images/testImg2.png'
import testImg from '../../../assets/images/testImg.jpeg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import $ from 'jquery'

export default function SectionHome() {
  const items = [
    { id: 0, imgDesktop: testImg, imgMobile: testImg },
    { id: 1, imgDesktop: testImg2, imgMobile: testImg },
    { id: 2, imgDesktop: testImg, imgMobile: testImg },
    { id: 3, imgDesktop: testImg2, imgMobile: testImg },
  ]
  const [current, setPosition] = useState(0)
  const timer = setInterval(() => {
    nextSlide()
  }, [3000])

  // useEffect(() => {
  //   console.log('test')
  //   return () => {
  //     console.log('test')
  //     $('div#3').addClass('show')
  //     $('.dot#3').addClass('active')
  //   }
  // })

  useEffect(() => {
    console.log('inin')
    timer
    return () => clearInterval(timer)
  }, [current])

  function nextSlide() {
    setPosition((prev) => (prev + 1) % items.length)
    clearInterval(timer)
  }

  function prevSlide() {
    setPosition((prev) => Math.abs((prev - 1) % items.length))
    clearInterval(timer)
  }

  return (
    <div className='slider'>
      {items.map((item) => (
        <div id={item.id} key={item.id} className='image'>
          <Image
            src={window.innerWidth > 768 ? item.imgDesktop : item.imgMobile}
            alt=''
            className={`${item.id == current ? 'show' : ''}`}
          />
        </div>
      ))}

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
