import { Card } from 'react-bootstrap'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const CardPrice = ({data = [],selected, setSelectedPackage}) => {
  // const [selected, setSelected] = useState(null)

  if (data.length===0) {
    return <span>ไม่มีข้อมูล</span>
  }else{
   return data.map((item,index) => {
      
      return (
        <Card key={index} className='mx-3 cardContainer' onClick={()=>setSelectedPackage(index)}>
          <Card.Body className='justify-content-center'>
              <Card.Title className='cardTitle fw-bold'>{item.title}</Card.Title>
              <Card.Text>
                  <div className='text-center mb-3'>
                      <strong className='mb-0 fw-bold fs-3'>{item.price}</strong>
                      <span>บาท/เดือน</span>
                  </div>
                  <ul className='m-0 p-0'>
                  {item.options.map((op, index)=>(
                      <li key={index}><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>{op}</span></li>
                  ))}
                  </ul>
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