import FindUsCard from "./findCard";

import non01 from "../../../../assets/images/locations/nonthaburi/01.jpg";
import non02 from "../../../../assets/images/locations/nonthaburi/02.jpg";
import non03 from "../../../../assets/images/locations/nonthaburi/03.jpg";
import non04 from "../../../../assets/images/locations/nonthaburi/04.jpg";

import k01 from "../../../../assets/images/locations/khonkaen/k01.jpg";
import k02 from "../../../../assets/images/locations/khonkaen/k02.jpg";
import k03 from "../../../../assets/images/locations/khonkaen/k03.jpg";
import k04 from "../../../../assets/images/locations/khonkaen/k04.jpg";

import c01 from "../../../../assets/images/locations/chiangmai/c01.jpg";
import c02 from "../../../../assets/images/locations/chiangmai/c02.jpg";
import c04 from "../../../../assets/images/locations/chiangmai/c04.jpg";
import c05 from "../../../../assets/images/locations/chiangmai/c05.jpg";

import cr01 from "../../../../assets/images/locations/chiangrai/cr1.jpg";
import cr02 from "../../../../assets/images/locations/chiangrai/cr2.jpg";
import cr03 from "../../../../assets/images/locations/chiangrai/cr3.jpg";
import cr04 from "../../../../assets/images/locations/chiangrai/cr4.jpg";

import don01 from "../../../../assets/images/locations/udon/udon01.jpg";
import don02 from "../../../../assets/images/locations/udon/udon02.jpg";
import don03 from "../../../../assets/images/locations/udon/udon03.jpg";
import don04 from "../../../../assets/images/locations/udon/udon04.jpg";

import bon01 from "../../../../assets/images/locations/ubon/ubon01.jpg";
import bon02 from "../../../../assets/images/locations/ubon/ubon02.jpg";
import bon03 from "../../../../assets/images/locations/ubon/ubon03.jpg";
import bon04 from "../../../../assets/images/locations/ubon/ubon04.jpg";

const nonImage = [non01, non02, non03, non04];
const khonkaenImage = [k01, k02, k03, k04];
const chiangmaiImage = [c01, c02, c04, c05];
const chiangraiImage = [cr01, cr02, cr03, cr04];
const udonImage = [don01, don02, don03, don04];
const ubonImage = [bon01, bon02, bon03, bon04];

export default function SectionFindUs() {
  const items = [
    {
      id: 1,
      location: "Nonthaburi",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30 \n จันทร์ - พฤหัสบดี 12.00 - 23.00 \n ศุกร์ - อาทิตย์ 12.00 - 00.30",
        "\n Location:",
        "11/11-12 Moo 3, Pimolrach, Bangbuathong, \n Nonthaburi 11110 \n 11/11-12 หมู่ 3 พิมลราช บางบัวทอง \nนนทบุรี 11110",
        "\nContact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: nonImage,
    },
    {
      id: 2,
      location: "Khon Kaen",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30 \n จันทร์ - พฤหัสบดี 12.00 - 23.00 \n ศุกร์ - อาทิตย์ 12.00 - 00.30",
        "\n Location:",
        "107 Moo 12, Mueng Kao, Mueng Khon Kaen, \n Khon Kaen 40000 \n 107 หมู่ 12 เมืองเก่า เมืองขอนแก่น \n ขอนแก่น 40000",
        "\n Contact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: khonkaenImage,
    },
    {
      id: 3,
      location: "Chiangmai",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30 \n จันทร์ - พฤหัสบดี 12.00 - 23.00 \n ศุกร์ - อาทิตย์ 12.00 - 00.30",
        "\n Location:",
        "400/19 Chiangmai-Lampang road, Fahham, Mueng Chiangmai, \n Chiangmai 50200 \n 400/19 ถนนเชียงใหม่-ลำปาง ฟ้าฮ่าม เมืองเชียงใหม่ \n เชียงใหม่ 50200",
        "\n Contact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: chiangmaiImage,
    },
    {
      id: 4,
      location: "Chiang Rai",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30 \n จันทร์ - พฤหัสบดี 12.00 - 23.00 \n ศุกร์ - อาทิตย์ 12.00 - 00.30",
        "\n Location:",
        "99/22 Moo 13, Sansai, Mueng Chiangrai, \n Chiangrai 57000 \n 99/22 หมู่ที่ 13 ต.สันทราย อ.เมืองเชียงราย \nจ.เชียงราย 57000",
        "\n Contact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: chiangraiImage,
    },
    {
      id: 5,
      location: "Ubon Ratchathani",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30 \n จันทร์ - พฤหัสบดี 12.00 - 23.00 \n ศุกร์ - อาทิตย์ 12.00 - 00.30",
        "\n Location:",
        "330 Moo 10, Jaeramae, Mueng Ubon Ratchathani, \n Ubon Ratchathani 34000 \n 330 หมู่ที่10 ต.แจระแม อ.เมืองอุบลราชธานี \nจ.อุบลราชธานี 34000",
        "\n Contact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: ubonImage,
    },
    {
      id: 6,
      location: "Udon Thani",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30 \n จันทร์ - พฤหัสบดี 12.00 - 23.00 \n ศุกร์ - อาทิตย์ 12.00 - 00.30",
        "\n Location:",
        "54/3 Moo 2, Bannongtu, Makkang, Mueng Udon Thani, \n Udon Thani 41000 \n 54/3 หมู่ที่ 2 ซ.บ้านหนองตุ ต.หมากแข้ง อ.เมืองอุดรธานี \n จ.อุดรธานี 41000",
        "\n Contact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: udonImage,
    },
  ];
  return (
    <>
      {items.map((item, index) => (
        <FindUsCard key={index} item={item} />
      ))}
    </>
  );
}
