import Image from 'next/image';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import '../../../../assets/styles/main.scss';

export default function FindUsCard({ item }) {
  const [srcImg, setSrcImg] = useState(item.imgGal[0]);
  const [windowWidth, setWindowWIdth] = useState(0);
  const ref = useRef();
  const [boxHeight, setBoxHeight] = useState(0);
  const [offset, setOffset] = useState(0);

  function handleSelect(item, id) {
    if (item.id == id) {
      $('.findUs-img img').attr('src', '').fadeOut();
      $('.findUs-img img').fadeIn(800).attr('src', item);
    }
    setSrcImg(item);
  }

  useEffect(() => {
    setWindowWIdth(window.innerWidth);
    setBoxHeight(window.innerWidth * 0.75 + ref.current.clientHeight);
    setOffset((window.innerWidth * 0.75 + ref.current.clientHeight) * 0.68);
  }, []);
  return (
    <>
      <div
        id={item.id}
        key={item.id}
        className={`findUs-card ${item.id % 2 != 0 ? 'left' : 'right'}`}
        style={
          windowWidth > 768
            ? {}
            : {
                height: boxHeight,
              }
        }
      >
        <div className='findUs-box'>
          <div className='findUs-rect' />
          <div className='findUs-rect' />
          <div className='findUs-img'>
            <Image
              src={srcImg}
              alt=''
              sizes='90vw'
              priority
              placeholder='blur'
            />
          </div>
        </div>
        <div className='findUs-gallery'>
          {item.imgGal.map((i, index) => (
            <div
              id={index}
              key={index}
              onClick={() => handleSelect(i, item.id)}
            >
              <Image src={i} id={index} alt='' priority placeholder='blur' />
            </div>
          ))}
        </div>
        <div
          ref={ref}
          className='findUs-detail'
          style={
            windowWidth > 768
              ? {}
              : {
                  top: offset,
                }
          }
        >
          <div className='findUs-location'>{item.location}</div>
          {item.detail.map((detail, index) => (
            <div id={index} key={index} className='findUs-det'>
              {detail}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
