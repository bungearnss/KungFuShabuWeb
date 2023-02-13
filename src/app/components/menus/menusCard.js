import Image from 'next/image'
import '../../../../assets/styles/main.scss'

export default function MenusCard({ menus }) {
  return (
    <div className='menus-card'>
      <Image
        className='menu-img'
        src={menus.img}
        alt=''
        priority
        placeholder='blur'
        quality={50}
      />
      <div className='menu-name'>{menus.name}</div>
    </div>
  )
}
