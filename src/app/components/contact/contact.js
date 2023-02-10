import GoogleMapReact from 'google-map-react'
import React from 'react'

const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>

export default function SectionContact() {
  const defaultProps = {
    center: [16.3770787701, 100.731630192],
    zoom: 7,
    khonkaen: { lat: 16.40539518014576, lng: 102.81647402944779 },
    chiangmai: { lat: 18.809886384421567, lng: 98.97668214856283 },
  }

  return (
    <>
      <div className='contact-info'>
        <div className='contact-header'>Address</div>
        <div className='contact-location'>Nonthaburi</div>
        <div className='contact-detail'>
          Hours: Monday - Thursday: 12.00 - 23.00 Friday - Sunday 12.00 - 00.30
        </div>
        <div className='contact-detail'>
          Location: 11/11-12 Moo 3, Pimolrach, Bangbuathong, Nonthaburi 11110
        </div>
        <div className='contact-location'>Khon Kaen</div>
        <div className='contact-detail'>
          Hours: Monday - Thursday: 12.00 - 23.00 Friday - Sunday 12.00 - 00.30
        </div>
        <div className='contact-detail'>
          Location: 107 Moo 12, Mueng Kao, Mueng Khon Kaen, Khon Kaen 40000
        </div>
        <div className='contact-location'>Chiangmai</div>
        <div className='contact-detail'>
          Hours: Monday - Thursday: 12.00 - 23.00 Friday - Sunday 12.00 - 00.30
        </div>
        <div className='contact-detail'>
          Location: 400/19 Chiangmai-Lampang road, Fahham, Mueng Chiangmai,
          Chiangmai 50200
        </div>
        <div className='contact-header'>Contact</div>
        <div className='contact-flex'>
          <div className='contact-location'>Tel:</div>
          <a className='contact-detail'> 088-999-2585, 0948530101 </a>
        </div>
        <div className='contact-flex'>
          <div className='contact-location'>Facebook:</div>
          <a className='contact-detail'>
            https://www.facebook.com/kungfugrillshabu
          </a>
        </div>
      </div>
      <div className='contact-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={13.915954745624894}
            lng={100.4017343991802}
            text={'Nonthaburi'}
          />
          <AnyReactComponent {...defaultProps.khonkaen} text={'KhonKaen'} />
          <AnyReactComponent {...defaultProps.chiangmai} text={'Chiangmai'} />
        </GoogleMapReact>
      </div>
    </>
  )
}
