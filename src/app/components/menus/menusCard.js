import Image from 'next/image'
import '../../../../assets/styles/main.scss'

export default function MenusCard({ menus }) {
  return (
    <div className='menus-card'>
      <Image className='menu-img' src={menus.img} alt='' />
      <div className='menu-name'>{menus.name}</div>
    </div>
  )
}
