import '../../../../assets/styles/main.scss'
import testImg from '../../../../assets/images/menutest.webp'
import ลิ้นวัว from '../../../../assets/images/ลิ้นวัว.webp'
import แซลม่อนดอง from '../../../../assets/images/แซลม่อนดอง.webp'
import เสือร้องไห้ from '../../../../assets/images/เสื้อร้องไห้.webp'
import ปูไข่ดอง from '../../../../assets/images/ปูไข่ดอง.webp'
import หมูสไลด์เกียวโต from '../../../../assets/images/หมูสไลด์เกียวโต.webp'
import หมูฟูจิ from '../../../../assets/images/หมูฟูจิ.webp'
import หมูบดโอไดมะ from '../../../../assets/images/หมูบดโอไดมะ.webp'
import หมูหม่าล่า from '../../../../assets/images/หมูหม่าล่า.webp'
import หมูกะเพรา from '../../../../assets/images/หมูกะเพรา.webp'
import สันคอหมูสไลด์ from '../../../../assets/images/สันคอหมูสไลด์.webp'
import เนื้อวัวหมักซอส from '../../../../assets/images/เนื้อวัวหมักซอส.webp'
import เบคอนสไลด์ from '../../../../assets/images/เบคอนสไลด์.webp'
import เนื้อวัวสไลด์ from '../../../../assets/images/เนื้อวัวสไลด์.webp'
import หมุสามชั้น from '../../../../assets/images/หมุสามชั้น.webp'
import ตับหมูสไลด์ from '../../../../assets/images/ตับหมูสไลด์.webp'
import เนื้อไก่โอไดมะ from '../../../../assets/images/เนื้อไก่โอไดมะ.webp'
import กุ้ง from '../../../../assets/images/กุ้ง.webp'
import หอยเชลล์ from '../../../../assets/images/หอยเชลล์.webp'
import หมึกสด from '../../../../assets/images/หมึกสด.webp'
import ปูม้า from '../../../../assets/images/ปูม้า.webp'
import หอยแมลงภู่ from '../../../../assets/images/หอยแมลงภู่.webp'
import ปลาดอลลี่ from '../../../../assets/images/ปลาดอลลี่.webp'
import แองกรี้เบิร์ด from '../../../../assets/images/แองกรี้เบิร์ด.webp'
import ชิคุวะปูอัด from '../../../../assets/images/ชิคุวะปูอัด.webp'
import ลูกชิ้นกุ้งมังกร from '../../../../assets/images/ลูกชิ้นกุ้งมังกร.webp'
import มอนซัง from '../../../../assets/images/มอนชัง.webp'
import เต้าหูขาว from '../../../../assets/images/เต้าหูขาว.webp'
import เต้าหู้ from '../../../../assets/images/เต้าหู้.webp'
import ผักกาดขาว from '../../../../assets/images/ผักกาดขาว.webp'
import ฮ่องเต้น้อย from '../../../../assets/images/ฮ่องเต้น้อย.webp'
import ผักบุ้ง from '../../../../assets/images/ผักบุ้ง.webp'
import ขึ้นช่าย from '../../../../assets/images/ขึ้นช่าย.webp'
import ข้าวโพดอ่อน from '../../../../assets/images/ข้าวโพดอ่อน.webp'
import สาหร่ายวากาเมะ from '../../../../assets/images/สาหร่ายวากาเมะ.webp'
import ยำสาหร่าย from '../../../../assets/images/ยำสาหร่าย.webp'
import มาม่า from '../../../../assets/images/มาม่า.webp'
import วุ้นเส้น from '../../../../assets/images/วุ้นเส้น.webp'
import บะหมี่หยก from '../../../../assets/images/บะหมี่หยก.webp'
import ชีส from '../../../../assets/images/ชีส.webp'
import ไข่ไก่ from '../../../../assets/images/ไข่ไก่.webp'
import ไข่ปลาหมึก from '../../../../assets/images/ไข่ปลาหมึก.webp'
import คอมโบฟิชบัน from '../../../../assets/images/คอมโบฟิชบัน.webp'
import เต้าหู้ปลา from '../../../../assets/images/เต้าหู้ปลา.webp'
import กระหล่ำฝอย from '../../../../assets/images/กระหล่ำฝอย.webp'
import MenusCard from './menusCard'

export default function SectionMenus() {
  const items = [
    {
      header: 'FAMOUS',
      menus: [
        { id: 1, img: ลิ้นวัว, name: 'ลิ้นวัว' },
        { id: 2, img: แซลม่อนดอง, name: 'แซลมอนดอง' },
        { id: 3, img: เสือร้องไห้, name: 'เสือร้องไห้' },
        { id: 4, img: ปูไข่ดอง, name: 'ปูไข่ดอง' },
        { id: 5, img: ไข่ปลาหมึก, name: 'ไข่ปลาหมึก' },
      ],
    },
    {
      header: 'RECOMMEND',
      menus: [
        { id: 1, img: หมูสไลด์เกียวโต, name: 'หมูสไลด์เกียวโต' },
        { id: 2, img: หมูฟูจิ, name: 'หมูฟูจิ' },
        { id: 3, img: หมูบดโอไดมะ, name: 'หมูบดโอไดมะ' },
        { id: 4, img: หมูหม่าล่า, name: 'หมูหม่าล่า' },
        { id: 5, img: หมูกะเพรา, name: 'หมูกะเพรา' },
        { id: 6, img: สันคอหมูสไลด์, name: 'สันคอหมูสไลด์' },
        { id: 8, img: เบคอนสไลด์, name: 'เบคอนสไลด์' },
      ],
    },
    {
      header: 'BEEF',
      menus: [
        { id: 1, img: เนื้อวัวสไลด์, name: 'เนื้อวัวสไลด์' },
        { id: 2, img: เนื้อวัวหมักซอส, name: 'เนื้อวัวหมักซอส' },
      ],
    },
    {
      header: 'PORK & CHICKEN',
      menus: [
        { id: 1, img: หมุสามชั้น, name: 'หมูสามชั้นฮอกไกโด' },
        { id: 2, img: ตับหมูสไลด์, name: 'ตับหมูสไลด์' },
        { id: 3, img: เนื้อไก่โอไดมะ, name: 'เนื้อไก่โอไดมะ' },
      ],
    },
    {
      header: 'SEAFOOD',
      menus: [
        { id: 1, img: กุ้ง, name: 'กุ้ง' },
        { id: 2, img: หอยเชลล์, name: 'หอยเชลล์' },
        { id: 3, img: หมึกสด, name: 'หมึกสด' },
        { id: 4, img: ปูม้า, name: 'ปูม้า' },
        { id: 5, img: หอยแมลงภู่, name: 'หอยแมลงภู่' },
        { id: 6, img: ปลาดอลลี่, name: 'ปลาดอลลี่' },
      ],
    },
    {
      header: 'MEATBALL',
      menus: [
        { id: 1, img: แองกรี้เบิร์ด, name: 'ลูกชิ้นแองกรี้เบิร์ด' },
        { id: 2, img: ชิคุวะปูอัด, name: 'ชิคุวะปูอัด' },
        { id: 3, img: ลูกชิ้นกุ้งมังกร, name: 'ลูกชิ้นกุ้งมังกร' },
        { id: 4, img: มอนซัง, name: 'ไซมอนซัง' },
        { id: 5, img: คอมโบฟิชบัน, name: 'คอมโบฟิชบัน' },
        { id: 6, img: เต้าหูขาว, name: 'เต้าหู้ขาว' },
        { id: 7, img: เต้าหู้, name: 'เต้าหู้ไข่' },
        { id: 8, img: เต้าหู้ปลา, name: 'เต้าหู้ปลา' },
      ],
    },
    {
      header: 'VEGETABLE',
      menus: [
        { id: 1, img: ผักกาดขาว, name: 'ผักกาดขาว' },
        { id: 2, img: ฮ่องเต้น้อย, name: 'ฮ่องเต้น้อย' },
        { id: 3, img: ผักบุ้ง, name: 'ผักบุ้ง' },
        { id: 4, img: ขึ้นช่าย, name: 'คื่นฉ่าย' },
        { id: 5, img: ข้าวโพดอ่อน, name: 'ข้าวโพดอ่อน' },
        { id: 6, img: กระหล่ำฝอย, name: 'กะหล่ำปลีฝอย' },
        { id: 7, img: สาหร่ายวากาเมะ, name: 'สาหร่ายวากาเมะ' },
        { id: 8, img: ยำสาหร่าย, name: 'ยำสาหร่าย' },
        { id: 9, img: มาม่า, name: 'มาม่า' },
        { id: 10, img: วุ้นเส้น, name: 'วุ้นเส้น' },
        { id: 11, img: บะหมี่หยก, name: 'บะหมี่หยก' },
        { id: 12, img: ชีส, name: 'ชีส' },
        { id: 13, img: ไข่ไก่, name: 'ไข่ไก่' },
      ],
    },
  ]

  return (
    <>
      {/* <div className='menus-header'>Menus</div> */}
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
