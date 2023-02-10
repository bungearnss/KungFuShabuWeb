import Image from 'next/image'
import $ from 'jquery'
import { useState } from 'react'
import '../../../../assets/styles/main.scss'

export default function FindUsCard({ item }) {
  const [srcImg, setSrcImg] = useState(item.imgGal[0])

  function handleSelect(item) {
    $('.findUs-img img').attr('src', '').fadeOut()
    $('.findUs-img img').fadeIn(800).attr('src', item)
    setSrcImg(item)
  }
  return (
    <>
      <div
        id={item.id}
        key={item.id}
        className={`findUs-card ${item.id != 2 ? 'left' : 'right'}`}
      >
        <div className='findUs-box'>
          <div className='findUs-rect' />
          <div className='findUs-rect' />
          <div className='findUs-img'>
            <Image src={srcImg} alt='' />
          </div>
        </div>
        <div className='findUs-gallery'>
          {item.imgGal.map((item, index) => (
            <div id={index} key={index} onClick={() => handleSelect(item)}>
              <Image src={item} id={index} alt='' />
            </div>
          ))}
        </div>
        <div className='findUs-detail'>
          <div className='findUs-location'>{item.location}</div>
          {item.detail.map((detail, index) => (
            <div id={index} key={index} className='findUs-det'>
              {detail}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
