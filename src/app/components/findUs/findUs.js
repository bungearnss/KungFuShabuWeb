import FindUsCard from './findCard'
import testImg from '../../../../assets/images/testImg.jpeg'
import testImg2 from '../../../../assets/images/testImg2.png'

export default function SectionFindUs() {
  const items = [
    {
      id: 1,
      location: 'Nonthaburi',
      detail: [
        'Hours:',
        'Monday - Thursday: 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30',
        'Location:',
        '11/11-12 Moo 3, Pimolrach, Bangbuathong, Nonthaburi 11110',
        'Contact:',
        '088-999-2585, 0948530101',
      ],
      imgGal: [testImg, testImg2, testImg, testImg2],
    },
    {
      id: 2,
      location: 'Nonthaburi',
      detail: [
        'Hours:',
        'Monday - Thursday: 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30',
        'Location:',
        '11/11-12 Moo 3, Pimolrach, Bangbuathong, Nonthaburi 11110',
        'Contact:',
        '088-999-2585, 0948530101',
      ],
      imgGal: [testImg2, testImg, testImg2, testImg],
    },
    {
      id: 3,
      location: 'Nonthaburi',
      detail: [
        'Hours:',
        'Monday - Thursday: 12.00 - 23.00 \n Friday - Sunday 12.00 - 00.30',
        'Location:',
        '11/11-12 Moo 3, Pimolrach, Bangbuathong, Nonthaburi 11110',
        'Contact:',
        '088-999-2585, 0948530101',
      ],
      imgGal: [testImg, testImg2, testImg, testImg2],
    },
  ]
  return (
    <>
      <div className='findUs-header'>Find Us</div>
      {items.map((item, index) => (
        <FindUsCard key={index} item={item} />
      ))}
    </>
  )
}
