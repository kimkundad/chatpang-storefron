import React,{useState} from 'react'
import { Table } from 'react-bootstrap'
import { Checkbox } from 'antd'
import Sidebar from '../../../components/Sidebar'

const Index = () => {
  const [checkAll, setCheckAll] = useState(false)
  const [checkList, setCheckList] = useState([])
  const data = [
    "Board_1",
    "Board_2",
    "Board_3",
    "Board_4",
    "Board_5",
    "Board_6",
    "Board_7",
    "Board_8",
  ]
  const onCheckAll = () => {
    setCheckList(checkAll ? data : [])
    setCheckAll(!checkAll)
    console.log(checkList);
  }

  const onCheck = (e) => {
    const value = e.target.value
    console.log(value);
    checkList.push(value)
    // setCheckAll(value.length === checkList.length)
    console.log(checkList);
  }
  const renderData = () => {
    return data.map((name,index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td><input type='checkbox' name={name} value={name} onChange={(e)=>onCheck(e)} /></td>
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
                  <div className="col-md-12" >
                    <h3 className="page-title">กรุณาเลือกเพจ เพื่อทำการตั้งค่า Chatbot</h3>
                  </div>
                  {/* <div className="col-md-6">
                    <h5 onClick={()=>onCheckAll()} className="text-info">เลือกทั้งหมด</h5>
                  </div> */}
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-md-8 mx-auto d-flex'>  
                        {/* <Checkbox.Group  onChange={onCheck} > */}
                  <Table bordered hover style={{minWidth:"60%"}}>
                      <tbody>
                        {renderData()}
                      </tbody>
                  </Table>
                        {/* </Checkbox.Group> */}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Index