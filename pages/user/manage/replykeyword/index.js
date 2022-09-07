import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faCopy } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../../../components/Sidebar'
import { Table, Form } from 'react-bootstrap'
import useUser from '../../../../Hooks/useUser'
import PageDropdown from '../../../../components/PageDropdown'
import axios from '../../../api/axios'

const Replykeyword = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [pageID, setPageID] = useState(user?.selectedPage[0]?.page_id)
  const [itemList, setItemList] = useState([])
  const [data, setData] = useState([])
  const [isCheckAll, setIsCheckAll] = useState(false)

  const onEdit = (id) => {
    router.push(
      { pathname: `${router.pathname}/edit/${id}`, query: { campaignId: id } },
      `${router.pathname}/edit/${id}`
    )
  }

  const onChecked = async (e) => {
    setIsCheckAll(false)
    const newId = e.target.name
    if (itemList.indexOf(newId) === -1) {
      setItemList([...itemList, newId])
    } else {
      setItemList((prev) => prev.filter((value) => value !== newId))
    }
  }
  //* check user status
  // const checkFreeTrial = () => {
  //   return user?.user?.status === 'inactive'
  // }
  const onCopy = async () => {
    try {
      for (const id of itemList) {
        let temp = data.filter((item) => item.id === id)
        // console.log(temp[0])
        // temp[0].name = '(copy) ' + temp[0].name
        const copyData = {
          facebookUser: user?.user?.id,
          keywords: temp[0].keywords,
          name: '(copy) ' + temp[0].name,
          messages: temp[0].messages,
          images: temp[0].images,
        }
        const res = await axios.post('/auto-replies', copyData, {
          headers: { Authorization: `Bearer ${user?.accessToken}` },
        })
        // console.log(res.data)
        setData([...data, res.data.data])
        // setData([...data, copyData])
      }
      setItemList([])
    } catch (error) {
      console.log(error)
    }
  }

  const onDelete = async () => {
    // const data = {
    //   isDelete: true,
    //   deleteAt: new Date(),
    // }
    try {
      for (const id of itemList) {
        const res = await axios.delete(`/auto-replies/${id}`, {
          headers: { Authorization: `Bearer ${user?.accessToken}` },
        })
        // console.log(res.data)
        setData((prev) => prev.filter((item) => item.id !== id))
      }
      setItemList([])
    } catch (error) {
      console.log(error)
    }
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

  const onChangeStatus = async (index, item) => {
    // console.log(id)
    let temp = [...data]
    // temp[index].status = status ? 'inactive' : 'active'
    temp[index] = item?.status === 'active' ? await setStatusInActive(item.id) : await setStatusActive(item.id)
    setData(temp)
  }

  const setStatusActive = async (id) => {
    try {
      const res = await axios.patch(
        `/auto-replies/${id}/active`,
        { id: id },
        {
          headers: { Authorization: `Bearer ${user?.accessToken}` },
        }
      )
      return res.data.data
    } catch (error) {
      console.log(error)
    }
  }

  const setStatusInActive = async (id) => {
    try {
      const res = await axios.patch(
        `/auto-replies/${id}/inactive`,
        { id: id },
        {
          headers: { Authorization: `Bearer ${user?.accessToken}` },
        }
      )
      return res.data.data
    } catch (error) {
      console.log(error)
    }
  }

  // const onDelete = async (id) => {
  //   try {
  //     const res = await axios.delete(`/public/auto-replies/${id}`, {
  //       headers: { Authorization: `Bearer ${user?.accessToken}` },
  //     })
  //     setData([...data.filter((item) => item.id !== id)])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const onSelect = (id) => {
    // console.log(id)
    setPageID(id)
  }
  const renderTable = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <input
              type="checkbox"
              name={item?.id}
              checked={itemList.includes(item?.id)}
              onClick={(e) => onChecked(e)}
            />
          </td>
          <td>
            <span>{item?.status}</span>
            <Form.Check
              type="switch"
              checked={item?.status === 'active'}
              // label={item.status}
              onClick={() => onChangeStatus(index, item)}
            />
          </td>
          <td>{item?.name}</td>
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

  const getKeywordsList = async () => {
    //id from pageId
    try {
      const res = await axios.get(`/auto-replies/${user?.user?.id}/facebook-user`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      console.log(res.data)
      setData(res.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    user?.user?.id && getKeywordsList()
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
                // style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }}
                onClick={() =>
                  router.push({ pathname: `${router.pathname}/create-replykeyword`, query: { pageId: pageID } })
                }
                className="userButton"
              >
                <FontAwesomeIcon className="me-2" icon={faPlus} />
                สร้างแคมเปญ
              </span>
              <span
                // style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }}
                onClick={onCopy}
                className="userButton"
              >
                <FontAwesomeIcon className="me-2" icon={faCopy} />
                สร้างซ้ำ
              </span>
              {/* <span className='userButton'><FontAwesomeIcon className='me-2' icon={faPenToSquare} />แก้ไข</span> */}
              <span
                // style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }}
                onClick={onDelete}
                className="userButton"
              >
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
                      <th>สถานะ</th>
                      <th>แคมเปญ</th>
                      <th>จัดการ</th>
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
