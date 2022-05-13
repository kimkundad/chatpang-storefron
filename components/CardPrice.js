import { Card } from 'react-bootstrap'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const CardPrice = ({data = [],selected, setSelectedPackage}) => {
  const [selectedCard, setSelectedCard] = useState("")

  const onSelected = (id) => {
    if (selectedCard === id) {
      setSelectedCard("")
    }else{
      setSelectedCard(id)
    }
    setSelectedPackage(id)
  }
  if (data.length===0) {
    return <span>ไม่มีข้อมูล</span>
  }else{
   return data.map((item,index) => {
      
      return (
        <Card key={index} className='mx-3 cardContainer' onClick={()=>onSelected(index)}>
          <Card.Body className='justify-content-center'>
              <Card.Title className='cardTitle fw-bold'>{item.title}</Card.Title>
              <Card.Text>
                  <div className='d-flex flex-column text-center mb-3'>
                      <strong className='mb-0 fw-bold fs-3'>{item.price}</strong>
                      <span className='text-center'>บาท/เดือน</span>
                  </div>
                  <span className='showDetaile text-info'>รายละเอียดแพ็คเกจ</span>
                  <div style={{height:`${selectedCard === index ? "fit-content":"0"}`}} className='details'>
                  <ul className='m-0 p-0'>
                  {item.options.map((op, index)=>(
                      <li key={index}><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>{op}</span></li>
                  ))}
                  </ul>
                  </div>
              </Card.Text>
              <div className='text-center'>
              <span style={{display:`${selected === index ? "grid":"none"}`}} className='selectBtnCustom'><FontAwesomeIcon icon={faCircleCheck} /></span>
              </div>
          </Card.Body>
        </Card>
      )
    })
  }
}

export default CardPrice