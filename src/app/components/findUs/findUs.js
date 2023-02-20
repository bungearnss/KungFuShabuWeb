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
import c03 from "../../../../assets/images/locations/chiangmai/c03.jpg";
import c04 from "../../../../assets/images/locations/chiangmai/c04.jpg";

const nonImage = [non01, non02, non03, non04];
const khonkaenImage = [k01, k02, k03, k04];
const chiangmaiImage = [c01, c02, c03, c04];

export default function SectionFindUs() {
  const items = [
    {
      id: 1,
      location: "Nonthaburi",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30",
        "Location:",
        "11/11-12 Moo 3, Pimolrach, Bangbuathong, \n Nonthaburi 11110",
        "Contact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: nonImage,
    },
    {
      id: 2,
      location: "Khon Kaen",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30",
        "Location:",
        "107 Moo 12, Mueng Kao, Mueng Khon Kaen, \n Khon Kaen 40000",
        "Contact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: khonkaenImage,
    },
    {
      id: 3,
      location: "Chiangmai",
      detail: [
        "Hours:",
        "Monday - Thursday 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30",
        "Location:",
        "400/19 Chiangmai-Lampang road, Fahham, Mueng Chiangmai, \n Chiangmai 50200",
        "Contact:",
        "088-999-2585, 094-853-0101",
      ],
      imgGal: chiangmaiImage,
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
