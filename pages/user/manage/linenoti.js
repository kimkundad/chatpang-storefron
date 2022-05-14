import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEye, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Divider, InputNumber, Select } from 'antd';
import { Table } from 'react-bootstrap'

import Sidebar from '../../../components/Sidebar'

const Linenoti = () => {
  const { Option } = Select;
  const [timeUnit, setTimeUnit] =useState('s')
  const data = [
    {
    name:'แจ้งเตือนตอบช้า live Page',
    qty: 5
    },
    {
      name:'แจ้งเตือนตอบช้า live_2 Page',
      qty: 2
      },
  ]

  const onChangeTimeUnit = (value) => {
        console.log(value);
        setTimeUnit(value)
  }

  const selectAfter = (
    <Select defaultValue={timeUnit} style={{ width: 100 }} onChange={onChangeTimeUnit}>
      <Option value="s">วินาที</Option>
      <Option value="m">นาที</Option>
      <Option value="h">ชั่วโมง</Option>
    </Select>
  );

  function onChange(value) {
    console.log('changed', value);
    console.log(timeUnit);
  }

  const renderTable = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td className='text-start'>{`${index + 1}. ${item.name}`}</td>
          <td>{item.qty} <FontAwesomeIcon icon={faEye} /></td>
        </tr>
      )
    })
  }
  return (
    <div className='page-wrapper'>
        <div className='content container-fluid'>
            <Sidebar />
            <div className='userpage-wrapper text-center'>
              <div className="page-header">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <span className='text-uppercase userDropdown' ><Avatar className='me-2' icon={<FontAwesomeIcon icon={faUser} />} />Board pang</span>
                  </div>
                </div>
                <div style={{width:"35%"}} className="row mx-auto">
                  <div className="lineDetail col mt-3">
                    <div style={{width:"60%"}} className='d-flex flex-column'>
                      <strong className='text-uppercase' >แจ้งเตือนผ่าน Line Notify</strong>
                      <span className='text-secondary' >แจ้งเตือนข้อความที่ยังไม่มีคนอ่าน ผ่านทางไลน์กลุ่มรู้จำนวนข้อความที่ค้างไว้ ลูกค้าไม่ต้องรอนาน</span>
                    </div>
                    <div className="d-flex lineButtonContainer">
                      <button className='lineCustomBtn'>บันทึก</button>
                      <button className='lineCustomBtn'>ยกเลิก</button>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className='row lineTokenContainer mx-auto'>
                <div className='col '>
                  <div className='lineTokenHeader'>
                    <strong>ใส่ Line Token</strong>
                    <span className='text-secondary' ><FontAwesomeIcon icon={faExclamationCircle} /> <i>คลิกเพื่อดูวิดีโอการขอ Token</i> </span>
                  </div>
                  <div className='lineTokenInput'>
                    <input type='text' id='token' />
                    <button className='lineCustomBtn'>บันทึก Token</button>
                  </div>
                </div>
              </div>
              <Divider />
              <div className='row lineTiming mx-auto'>
                <div className='col'>
                      <div className='lineTimingHeader'>
                        <strong>แจ้งเข้าไลน์กลุ่ม เมื่อยังไม่มีใครตอบลูกค้านานเกิน...</strong>
                      </div>
                      <div className='lineTimingInput'>
                        <InputNumber controls={true} min={1} max={timeUnit === 'h' ? 12 : 60} addonAfter={selectAfter} onChange={onChange} />
                      </div>
                </div>
              </div>
              <Divider />
              <div className='row'>
                <div className='col d-flex justify-content-center mt-3'>
                    <Table bordered style={{width:"70%"}}>
                      <thead style={{background:"black", color:"#F5F24F", fontSize:"1.5rem"}}>
                        <th>ชื่อกลุ่มไลน์</th>
                        <th>จำนวนเพจที่แจ้งเตือน</th>
                      </thead>
                      <tbody style={{fontSize:"1.3rem"}}>
                        {renderTable()}
                      </tbody>
                    </Table>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Linenoti