import { Card } from 'react-bootstrap'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

import CheckedImg from '../resources/icons/check-mark.png'
import Image from 'next/image'

const CardPrice = ({ data = [], selected, setSelectedPackage }) => {
  const [selectedCard, setSelectedCard] = useState(0)

  const onSelected = (id) => {
    if (selectedCard === id) {
      setSelectedCard(0)
      setSelectedPackage(0)
    } else {
      setSelectedCard(id)
      setSelectedPackage(id)
    }
  }
  if (data.length === 0) {
    return <span>ไม่มีข้อมูล</span>
  } else {
    return data.map((item, index) => {
      return (
        <Card key={index} className="mx-3 cardContainer" onClick={() => onSelected(item.id)}>
          <Card.Body className="cardBody justify-content-center m-0 p-0">
            <Card.Title className="cardTitle mx-auto">
              <span style={{ display: `${item?.special_text?.length !== 0  ? 'block' : 'none'}` }} className="bestSellTag">
                ขายดี
              </span>
              {item.name}
            </Card.Title>
            <Card.Text>
              <div className="d-flex flex-column text-center mb-3 text-price-header">
                <h2>{item?.price}</h2>
                <span className="text-center">บาท/เดือน</span>
              </div>
              <span className="showDetaile text-info">รายละเอียดแพ็คเกจ</span>
              <div style={{ height: `${selectedCard === item?.id ? 'fit-content' : '0'}` }} className="details">
                <ul className="m-0 p-0">
                  {item?.options.map((option, index) => (
                    <li className='d-flex align-items-center' key={index}>
                      <Image width='30px' height='30px'  alt="logo" src={CheckedImg}  />
                      {/* <FontAwesomeIcon className="me-2" icon={faCircleCheck} /> */}
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Text>
            <span style={{ display: `${selected === item.id ? 'grid' : 'none'}` }} className="selectBtnCustom">
              เลือกแพ็คเกจนี้
            </span>
          </Card.Body>
        </Card>
      )
    })
  }
}

export default CardPrice
