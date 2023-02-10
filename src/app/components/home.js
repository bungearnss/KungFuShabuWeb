import '../../../assets/styles/main.scss'
import testImg2 from '../../../assets/images/testImg2.png'
import testImg from '../../../assets/images/testImg.jpeg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import $ from 'jquery'

var position = 0

export default function SectionHome() {
  const items = [
    { id: 0, img: testImg },
    { id: 1, img: testImg2 },
    { id: 2, img: testImg },
    { id: 3, img: testImg2 },
  ]

  // useEffect(() => {
  //   console.log('test')
  //   return () => {
  //     console.log('test')
  //     $('div#3').addClass('show')
  //     $('.dot#3').addClass('active')
  //   }
  // })

  useEffect(() => {
    setInterval(() => {
      nextSlide()
    }, [3000])
  }, [position])

  function nextSlide() {
    position = $('.slider').find('.show').index() + 1
    if (position > items.length - 1) position = 0

    changeCarousel()
  }

  function prevSlide() {
    position = $('.slider').find('.show').index() - 1
    if (position < 0) position = items.length - 1

    changeCarousel()
  }

  function changeCarousel() {
    $('.slider').find('.show').removeClass('show').fadeOut()
    $('.slider').find('> div').eq(position).fadeIn(800).addClass('show')
    $('.dot-bar').find('.active').removeClass('active')
    $('.dot-bar').find(`.dot#${position}`).addClass('active')
  }

  return (
    <div className='slider'>
      {items.map((item) => (
        <div id={item.id} key={item.id} className='image'>
          <Image src={item.img} alt='' />
        </div>
      ))}

      <div className='dot-bar'>
        {items.map((item) => (
          <div
            id={item.id}
            key={item.id}
            className='dot'
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
