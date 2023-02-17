import FindUsCard from "./findCard";
import testImg from "../../../../assets/images/testImg.jpeg";
import testImg2 from "../../../../assets/images/testImg2.png";

import non01 from "../../../../assets/images/locations/nonthaburi/01.jpg";
import non02 from "../../../../assets/images/locations/nonthaburi/02.jpg";
import non03 from "../../../../assets/images/locations/nonthaburi/03.jpg";
import non04 from "../../../../assets/images/locations/nonthaburi/04.jpg";

const nonImage = [non01, non02, non03, non04];

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
      imgGal: [testImg2, testImg, testImg2, testImg],
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
      imgGal: [testImg, testImg2, testImg, testImg2],
    },
  ];
  return (
    <>
      {/* <div className='findUs-header'>Find Us</div> */}
      {items.map((item, index) => (
        <FindUsCard key={index} item={item} />
      ))}
    </>
  );
}
