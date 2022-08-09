import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faCopy, faUser } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from 'antd'
import Sidebar from '../../../../components/Sidebar'
import { Table } from 'react-bootstrap'
import axios from '../../../api/axios'
import useUser from '../../../../Hooks/useUser'
import PageDropdown from '../../../../components/PageDropdown'

const Chatbot = () => {
  const router = useRouter()
  const { user } = useUser()
  const [pageID, setPageID] = useState(user?.selectedPage[0]?.pageId)

  const [selectedItem, setSelectedItem] = useState()
  const [itemList, setItemList] = useState([])
  const [data, setData] = useState([])
  const [isCheckAll, setIsCheckAll] = useState(false)

  const onEdit = (id) => {
    router.push(
      { pathname: `${router.pathname}/edit/${id}`, query: { id: id, pageId: pageID } },
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
  const checkFreeTrial = () => {
    return user?.user?.status === 'inactive'
  }
  const onCopy = async () => {
    try {
      for (const id of itemList) {
        let temp = data.filter((item) => item.item._id === id)
        // console.log(temp[0])
        temp[0].item.campaignName = '(copy) ' + temp[0].item.campaignName
        const copyData = {
          pageId: temp[0].item.pageId,
          campaignName: temp[0].item.campaignName,
          txtInboxComment: temp[0].item.txtInboxComment,
          fileInboxComment: temp[0].item.fileInboxComment,
          isInboxComment: temp[0].item.isInboxComment,
          txtComment: temp[0].item.txtComment,
          fileComment: temp[0].item.fileComment,
          isComment: temp[0].item.isComment,
          isLikeComment: temp[0].item.isLikeComment,
          isDuplicateComment: temp[0].item.isDuplicateComment,
          isHideComment: temp[0].item.isHideComment,
          txtData: temp[0].item.txtData,
        }
        const res = await axios.post('/chatbots', copyData, { headers: { Authorization: `Bearer ${user?.accessToken}` } })
        // console.log(res.data);
        setData([...data,res.data.createdChatbot])
      }
      setItemList([])
    } catch (error) {
      console.log(error)
    }
  }

  const onDelete = async () => {
    const data = {
      isDelete: true,
      deleteAt: new Date(),
    }
    try {
      for (const id of itemList) {
        const res = await axios.patch(`/chatbots/${id}`, data, {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        })
        // console.log(res.data)
        setData((prev) => prev.filter((item) => item.item._id !== id))
      }
      setItemList([])
    } catch (error) {
      console.log(error)
    }
  }

  const onCheckAll = () => {
    const Ids = data.map((item) => item.item._id)
    if (itemList.length !== 0) {
      setItemList([])
      setIsCheckAll(false)
    } else {
      setItemList(Ids)
      setIsCheckAll(true)
    }
  }
  //* select page by id
  const onSelect = (id) => {
    // console.log(id)
    setPageID(id)
  }
  const renderTable = () => {
    return data.map((item, index) => {
      return (
        !item?.item?.isDelete && (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                name={item?.item?._id}
                checked={itemList.includes(item?.item?._id)}
                onClick={(e) => onChecked(e)}
              />
            </td>
            <td>{item?.item?.campaignName}</td>
            <td>
              <div>
                <span onClick={() => onEdit(item?.item?._id)} className="userEditButton">
                  แก้ไข
                </span>
              </div>
            </td>
          </tr>
        )
      )
    })
  }

  const getChatbotList = async () => {
    //id from pageId
    try {
      const res = await axios.get(`/chatbots/${pageID}`, { headers: { Authorization: `Bearer ${user?.accessToken}` } })
      // console.log(res.data)
      setData(res.data.chatbots)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChatbotList()
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
                  {/* <Avatar className="me-2" icon={<FontAwesomeIcon icon={faUser} />} />
                  Board pang */}
                  <PageDropdown onSelect={onSelect} />
                </span>
              </div>
            </div>
          </div>
          {/* content */}

          <div className="row">
            <div className="col d-flex justify-content-center my-2">
              <span
                style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }}
                onClick={() => router.push({ pathname: `${router.pathname}/create-bot`, query: { pageId: pageID } })}
                className="userButton"
              >
                <FontAwesomeIcon className="me-2" icon={faPlus} />
                สร้างแคมเปญ
              </span>
              <span
                style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }}
                onClick={onCopy}
                className="userButton"
              >
                <FontAwesomeIcon className="me-2" icon={faCopy} />
                สร้างซ้ำ
              </span>
              {/* <span className='userButton'><FontAwesomeIcon className='me-2' icon={faPenToSquare} />แก้ไข</span> */}
              <span
                style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }}
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

export default Chatbot
