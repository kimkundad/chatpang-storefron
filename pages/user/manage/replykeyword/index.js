import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPenToSquare, faCopy, faUser } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../../../components/Sidebar'
import { Table } from 'react-bootstrap'
import { Avatar } from 'antd';

const Replykeyword = () => {
  const data = [
    {
      name:'test_1',
      isActive:false,
      msgInbox:{
        active:false,
        msg:'',
        image:''
      },
      comment:{
        active:false,
        msg:'',
        image:'',
        option:{
          like:false,
          repeat:false,
          hideComment:false
        }
      },
      words:[],
      tag:[],
      hiddenWord:[]
    },
  ]

  const onEdit = (id) => {
    console.log(id);
  }

  const renderTable = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td><input type='checkbox' name={item.name} checked={item.isActive} /></td>
          <td>{item.name}</td>
          <td>
          <div>
          <span onClick={()=> onEdit(index)} className='userEditButton' >แก้ไข</span>
          </div>
          </td>
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
              </div>
              {/* content */}
              
              <div className='row'>
                <div className='col d-flex justify-content-center my-2'>
                  <span className='userButton'><FontAwesomeIcon className='me-2' icon={faPlus} />สร้างแคมเปญ</span>
                  <span className='userButton'><FontAwesomeIcon className='me-2' icon={faCopy} />สร้างซ้ำ</span>
                  {/* <span className='userButton'><FontAwesomeIcon className='me-2' icon={faPenToSquare} />แก้ไข</span> */}
                  <span className='userButton'><FontAwesomeIcon className='me-2' icon={faTrashCan} />ลบ</span>
                </div>
              </div>
              <div className='row'>
                <div className='col d-flex justify-content-center mt-3'>
                    <Table bordered style={{width:"70%"}}>
                      <thead style={{background:"black", color:"#FFFF", fontSize:"1.5rem"}}>
                        <th><input type='checkbox' /></th>
                        <th>แคมเปญ</th>
                        <th></th>
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

export default Replykeyword