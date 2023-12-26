import Image from 'next/image'
import React from 'react'
import Facebook from '../../../../assets/images/facebook.svg'
import Tel from '../../../../assets/images/tel.svg'
import { useEffect, useState } from 'react';

const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>

export default function SectionContact() {
  const [windowWidth, setWindowWIdth] = useState(0);
  const defaultProps = {
    center: [16.3770787701, 100.731630192],
    zoom: 7,
    khonkaen: { lat: 16.40539518014576, lng: 102.81647402944779 },
    chiangmai: { lat: 18.809886384421567, lng: 98.97668214856283 },
  }
  useEffect(() => {
    setWindowWIdth(window.innerWidth);
  }, []);
  return (
    <>
      <div className='contact-info'>
        <div className='contact-header'>ADDRESS</div>
        <div>
          <div className='contact-location'>Nonthaburi</div>
          <div className='contact-detail'>
            <strong>Hours:</strong> Monday - Thursday 12.00 - 23.00
          </div>
          <div className='contact-detail'>
            &emsp; &emsp; &emsp;Friday - Sunday 12.00 - 00.30
          </div>
          <div className='contact-detail'>
            <strong>Location:</strong> 11/11-12 Moo 3, Pimolrach, Bangbuathong,
            <div>Nonthaburi 11110</div>
            <span>
              <a
                className='contact-detail'
                href='https://goo.gl/maps/CbkrVotiDskRyN6LA'
              >
                See More
              </a>
            </span>
          </div>
        </div>
        <div>
          <div className='contact-location'>Khon Kaen</div>
          <div className='contact-detail'>
            <strong>Location:</strong> Monday - Thursday 12.00 - 23.00
          </div>
          <div className='contact-detail'>
            &emsp; &emsp; &emsp; &emsp;Friday - Sunday 12.00 - 00.30
          </div>
          <div className='contact-detail'>
            <strong>Location:</strong> 107 Moo 12, Mueng Kao, Mueng Khon Kaen,
            <div>Khon Kaen 40000</div>
            <span>
              <a
                className='contact-detail'
                href='https://goo.gl/maps/6GjTTJejQy3BETfE8'
              >
                See More
              </a>
            </span>
          </div>
        </div>
        <div>
          <div className='contact-location'>Chiangmai</div>
          <div className='contact-detail'>
            <strong>Hours:</strong> Monday - Thursday 12.00 - 23.00
          </div>
          <div className='contact-detail'>
            &emsp; &emsp; &emsp;Friday - Sunday 12.00 - 00.30
          </div>
          <div className='contact-detail'>
            <strong>Location:</strong> 400/19 Chiangmai-Lampang road, Fahham,
            Mueng Chiangmai,
            <div>Chiangmai 50200</div>
            <span>
              <a
                className='contact-detail'
                href='https://goo.gl/maps/HYdi71BxM3gbAtKN8'
              >
                See More
              </a>
            </span>
          </div>
        </div>
        <div>
          <div className={windowWidth > 768
            ? 'contact-location-nextline'
            : 'contact-location'
          }>Chiang Rai</div>
          <div className='contact-detail'>
            <strong>Hours:</strong> Monday - Thursday 12.00 - 23.00
          </div>
          <div className='contact-detail'>
            &emsp; &emsp; &emsp;Friday - Sunday 12.00 - 00.30
          </div>
          <div className='contact-detail'>
            <strong>Location:</strong> 99/22 Moo 13, Sansai, Mueng Chiangrai,
            <div>Chiangrai 57000</div>
            <span>
              <a
                className='contact-detail'
                href='https://goo.gl/maps/4eqPcRNrDM6YA7jc8'
              >
                See More
              </a>
            </span>
          </div>
        </div>
        <div>
          <div className={windowWidth > 768
            ? 'contact-location-nextline'
            : 'contact-location'
          }>Ubon Ratchathani</div>
          <div className='contact-detail'>
            <strong>Hours:</strong> Monday - Thursday 12.00 - 23.00
          </div>
          <div className='contact-detail'>
            &emsp; &emsp; &emsp;Friday - Sunday 12.00 - 00.30
          </div>
          <div className='contact-detail'>
            <strong>Location:</strong> 330 Moo 10, Jaeramae, Mueng Ubon Ratchathani,
            <div>Ubon Ratchathani 34000</div>
            <span>
              <a
                className='contact-detail'
                href='https://goo.gl/maps/fu8zUjavnUU9GGCC9'
              >
                See More
              </a>
            </span>
          </div>
        </div>
        <div>
        <div className={windowWidth > 768
            ? 'contact-location-nextline'
            : 'contact-location'
          }>Udon Thani</div>
          <div className='contact-detail'>
            <strong>Hours:</strong> Monday - Thursday 12.00 - 23.00
          </div>
          <div className='contact-detail'>
            &emsp; &emsp; &emsp;Friday - Sunday 12.00 - 00.30
          </div>
          <div className='contact-detail'>
            <strong>Location:</strong> 54/3 Moo 2, Bannongtu, Makkang, Mueng Udon Thani,
            <div>Udon Thani 41000</div>
            <span>
              <a
                className='contact-detail'
                href='https://bit.ly/3N1UGLo'
              >
                See More
              </a>
            </span>
          </div>
        </div>
        <div>
          <div className='contact-header'>CONTACT</div>
          <div className='contact-flex'>
            <div className='contact-icon'>
              <Image src={Tel} alt='' /> :
            </div>
            <a className='contact-detail'> 088-999-2585, 094-853-0101 </a>
          </div>
          <div className='contact-flex'>
            <div className='contact-icon'>
              <Image src={Facebook} alt='' /> :
            </div>
            <a
              className='contact-detail'
              href='https://www.facebook.com/kungfugrillshabu'
            >
              facebook.com/kungfugrillshabu
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
