import '../../../../assets/styles/main.scss'
import testImg from '../../../../assets/images/menutest.webp'
import MenusCard from './menusCard'

export default function SectionMenus() {
  const items = [
    {
      header: 'Header',
      menus: [
        { id: 1, img: testImg, name: 'testtestname' },
        { id: 2, img: testImg, name: 'testtestname' },
        { id: 3, img: testImg, name: 'testtestname' },
        { id: 4, img: testImg, name: 'testtestname' },
        { id: 5, img: testImg, name: 'testtestname' },
        { id: 6, img: testImg, name: 'testtestname' },
        { id: 7, img: testImg, name: 'testtestname' },
        { id: 8, img: testImg, name: 'testtestname' },
      ],
    },
    {
      header: 'Header',
      menus: [
        { id: 1, img: testImg, name: 'testtestname' },
        { id: 2, img: testImg, name: 'testtestname' },
        { id: 3, img: testImg, name: 'testtestname' },
      ],
    },
    {
      header: 'Header',
      menus: [
        { id: 1, img: testImg, name: 'testtestname' },
        { id: 2, img: testImg, name: 'testtestname' },
      ],
    },
    {
      header: 'Header',
      menus: [
        { id: 1, img: testImg, name: 'testtestname' },
        { id: 2, img: testImg, name: 'testtestname' },
        { id: 3, img: testImg, name: 'testtestname' },
        { id: 4, img: testImg, name: 'testtestname' },
        { id: 5, img: testImg, name: 'testtestname' },
        { id: 6, img: testImg, name: 'testtestname' },
        { id: 7, img: testImg, name: 'testtestname' },
        { id: 8, img: testImg, name: 'testtestname' },
      ],
    },
    {
      header: 'Header',
      menus: [
        { id: 1, img: testImg, name: 'testtestname' },
        { id: 2, img: testImg, name: 'testtestname' },
        { id: 3, img: testImg, name: 'testtestname' },
        { id: 4, img: testImg, name: 'testtestname' },
        { id: 5, img: testImg, name: 'testtestname' },
        { id: 6, img: testImg, name: 'testtestname' },
        { id: 7, img: testImg, name: 'testtestname' },
        { id: 8, img: testImg, name: 'testtestname' },
      ],
    },
    {
      header: 'Header',
      menus: [
        { id: 1, img: testImg, name: 'testtestname' },
        { id: 2, img: testImg, name: 'testtestname' },
        { id: 3, img: testImg, name: 'testtestname' },
        { id: 4, img: testImg, name: 'testtestname' },
        { id: 5, img: testImg, name: 'testtestname' },
        { id: 6, img: testImg, name: 'testtestname' },
        { id: 7, img: testImg, name: 'testtestname' },
        { id: 8, img: testImg, name: 'testtestname' },
      ],
    },
    {
      header: 'Header',
      menus: [
        { id: 1, img: testImg, name: 'testtestname' },
        { id: 2, img: testImg, name: 'testtestname' },
        { id: 3, img: testImg, name: 'testtestname' },
        { id: 4, img: testImg, name: 'testtestname' },
        { id: 5, img: testImg, name: 'testtestname' },
        { id: 6, img: testImg, name: 'testtestname' },
        { id: 7, img: testImg, name: 'testtestname' },
        { id: 8, img: testImg, name: 'testtestname' },
      ],
    },
  ]

  return (
    <>
      <div className='menus-header'>Menus</div>
      {items.map((item, index) => (
        <div key={index} className='menus-list'>
          <div className='menu-header'>{item.header}</div>
          <div className='menus-detail'>
            {item.menus.map((menu, i) => (
              <MenusCard key={i} menus={menu} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
