import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faCopy } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../../../components/Sidebar'
import { Table } from 'react-bootstrap'
import useUser from '../../../../Hooks/useUser'
import PageDropdown from '../../../../components/PageDropdown'
import axios from '../../../api/axios'

const Replykeyword = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [pageID, setPageID] = useState(user?.selectedPage[0]?.pageId)
  const [itemList, setItemList] = useState([])
  const [data, setData] = useState([])
  const [isCheckAll, setIsCheckAll] = useState(false)
  console.log(user)
  const onEdit = (id) => {
    router.push({ pathname: `${router.pathname}/edit/${id}`, query: { campaignId: id } },`${router.pathname}/edit/${id}`)
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
            <input type="checkbox" name={item.item._id} checked={itemList.includes(item.item._id)} onClick={(e) => onChecked(e)} />
          </td>
          <td>{item.item.campaignName}</td>
          <td>
            <div>
              <span onClick={() => onEdit(item.item._id)} className="userEditButton">
                แก้ไข
              </span>
            </div>
          </td>
        </tr>
      )
    })
  }

  const onSelect = (id) => {
    console.log(id)
    setPageID(id)
  }
  const getKeywordsList = async () => {
    //id from pageId
    try {
      const res = await axios.get(`/keywords/${pageID}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      console.log(res.data)
      setData(res.data.keywords)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getKeywordsList()
  }, [])
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Sidebar />
        <div className="userpage-wrapper text-center">
          <div className="page-header">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <span className="text-uppercase userDropdown">
                  <PageDropdown onSelect={onSelect} />
                </span>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="row">
            <div className="col d-flex justify-content-center my-2">
              <span
                onClick={() =>
                  router.push({ pathname: `${router.pathname}/create-replykeyword`, query: { pageId: pageID } })
                }
                className="userButton"
              >
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
              {data?.length === 0 ? (
                <p className="mx-auto">ไม่มีข้อมูล กรุณาสร้าง แคมเปญ</p>
              ) : (
                <Table bordered>
                  <thead>
                    <tr>
                      <th>
                        <input onChange={onCheckAll} type="checkbox" name="checkAll" checked={isCheckAll} />
                      </th>
                      <th>แคมเปญ</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{renderTable()}</tbody>
                </Table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Replykeyword
