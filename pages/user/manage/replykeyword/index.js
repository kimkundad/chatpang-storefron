import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPenToSquare, faCopy, faUser } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../../../components/Sidebar'
import { Table } from 'react-bootstrap'
import { Avatar } from 'antd'

const initData = [
  {
    id: 1,
    name: 'test_1',
    isActive: false,
    msgInbox: {
      active: false,
      msg: '',
      image: '',
    },
    comment: {
      active: false,
      msg: '',
      image: '',
      option: {
        like: false,
        repeat: false,
        hideComment: false,
      },
    },
    words: [],
    tag: [],
    hiddenWord: [],
  },
  {
    id: 2,
    name: 'test_2',
    isActive: false,
    msgInbox: {
      active: false,
      msg: '',
      image: '',
    },
    comment: {
      active: false,
      msg: '',
      image: '',
      option: {
        like: false,
        repeat: false,
        hideComment: false,
      },
    },
    words: [],
    tag: [],
    hiddenWord: [],
  },
]

const Replykeyword = () => {
  const router = useRouter()
  const [selectedItem, setSelectedItem] = useState()
  const [itemList, setItemList] = useState([])
  const [data, setData] = useState(initData)
  const [isCheckAll, setIsCheckAll] = useState(false)

  const onEdit = (id) => {
    const item = data.filter((obj) => obj.id === id)[0]
    setSelectedItem(item)
    router.push({ pathname: `${router.pathname}/edit/${id}`, query: { id: id } })
  }

  const onChecked = async (e) => {
    setIsCheckAll(false)
    const newId = parseInt(e.target.name)
    if (itemList.indexOf(newId) === -1) {
      await setItemList([...itemList, newId])
    } else {
      await setItemList((prev) => prev.filter((value) => value !== newId))
    }
  }
  const onCopy = () => {
    let lastIndex = data.length
    let arr = []
    // let selected = data.filter(item => itemList.indexOf(item.id) !== -1)
    for (const key of itemList) {
      lastIndex += 1
      let temp = { ...data[key - 1], id: lastIndex }
      arr.push(temp)
    }
    setData([...data, ...arr])
    setItemList([])
  }

  const onDelete = () => {
    const newData = data.filter((item) => itemList.indexOf(item.id) === -1)
    setData(newData)
  }

  const onCheckAll = () => {
    const Ids = data.map((item) => item.id)
    if (itemList.length !== 0) {
      setItemList([])
      setIsCheckAll(false)
    } else {
      setItemList(Ids)
      setIsCheckAll(true)
    }
  }

  const renderTable = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <input type="checkbox" name={item.id} checked={itemList.includes(item.id)} onClick={(e) => onChecked(e)} />
          </td>
          <td>{item.name}</td>
          <td>
            <div>
              <span onClick={() => onEdit(item.id)} className="userEditButton">
                แก้ไข
              </span>
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Sidebar />
        <div className="userpage-wrapper text-center">
          <div className="page-header">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <span className="text-uppercase userDropdown">
                  <Avatar className="me-2" icon={<FontAwesomeIcon icon={faUser} />} />
                  Board pang
                </span>
              </div>
            </div>
          </div>
          {/* content */}

          <div className="row">
            <div className="col d-flex justify-content-center my-2">
              <span onClick={() => router.push(`${router.pathname}/create-replykeyword`)} className="userButton">
                <FontAwesomeIcon className="me-2" icon={faPlus} />
                สร้างแคมเปญ
              </span>
              <span onClick={onCopy} className="userButton">
                <FontAwesomeIcon className="me-2" icon={faCopy} />
                สร้างซ้ำ
              </span>
              {/* <span className='userButton'><FontAwesomeIcon className='me-2' icon={faPenToSquare} />แก้ไข</span> */}
              <span onClick={onDelete} className="userButton">
                <FontAwesomeIcon className="me-2" icon={faTrashCan} />
                ลบ
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto d-flex mt-3">
              <Table bordered>
                <thead>
                  <th>
                    <input onChange={onCheckAll} type="checkbox" name="checkAll" checked={isCheckAll} />
                  </th>
                  <th>แคมเปญ</th>
                  <th></th>
                </thead>
                <tbody>{renderTable()}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Replykeyword
