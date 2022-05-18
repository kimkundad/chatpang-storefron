import React,{useState} from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faCopy, faUser } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from 'antd';
import Sidebar from '../../../../components/Sidebar'
import { Table } from 'react-bootstrap'

const Chatbot = () => {
const router = useRouter()
const [ checkAll, setCheckAll] = useState(false)
const [selectedItem, setSelectedItem] =useState()
  const data = [
    { 
      id: 1,
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
    {
      id:2,
      name:'test_2',
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

  const onCheckAll = () => {
    setCheckAll(!checkAll)
  }

  const onEdit = (id) => {
    const item = data.filter(obj => obj.id === id)[0]
      setSelectedItem(item)
      router.push({pathname:`${router.pathname}/edit/${id}`, query:{id:id}})
  }

  const renderTable = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td><input type='checkbox' name={item.name} checked={item.isActive} /></td>
          <td>{item.name}</td>
          <td>
          <div>
          <span onClick={()=> onEdit(item.id)} className='userEditButton' >แก้ไข</span>
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
                  <div className="col-md-12 d-flex justify-content-center">
                    <span className='text-uppercase userDropdown' ><Avatar className='me-2' icon={<FontAwesomeIcon icon={faUser} />} />Board pang</span>
                  </div>
                </div>
              </div>
              {/* content */}
              
              <div className='row'>
                <div className='col d-flex justify-content-center my-2'>
                  <span onClick={() => router.push(`${router.pathname}/create-bot`)} className='userButton'><FontAwesomeIcon className='me-2' icon={faPlus} />สร้างแคมเปญ</span>
                  <span className='userButton'><FontAwesomeIcon className='me-2' icon={faCopy} />สร้างซ้ำ</span>
                  {/* <span className='userButton'><FontAwesomeIcon className='me-2' icon={faPenToSquare} />แก้ไข</span> */}
                  <span className='userButton'><FontAwesomeIcon className='me-2' icon={faTrashCan} />ลบ</span>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8 mx-auto d-flex mt-3'>
                    <Table bordered >
                      <thead style={{background:"black", color:"#FFFF", fontSize:"1.5rem"}}>
                        <th><input onChange={onCheckAll} type='checkbox' name='checkAll'/></th>
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

export default Chatbot