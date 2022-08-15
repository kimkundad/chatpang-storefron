import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Scrollbars } from 'react-custom-scrollbars'
import Link from 'next/link'

import useUser from '../Hooks/useUser'
import axios from '../pages/api/axios'
import moment from 'moment'

const Sidebar = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [packageInfo, setPackageInfo] = useState({})

  // const packageInfo = user.order.package
  const latestOrderId = user?.user?.order?.id || ''
  let pathName = router.pathname

  const isActive = (path) => {
    const n = '/user/manage'.length

    if (pathName.slice(n) !== '' && path === '') {
      return false
    } else {
      return pathName.slice(n).includes(path)
    }
  }

  const getOrderById = async () => {
    try {
      const res = await axios.get(`/public/orders/${latestOrderId}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      setPackageInfo(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getExp = () => {
    return moment(packageInfo?.expire_date).format('DD/MM/YYYY')
  }
 
  useEffect(()=>{
    latestOrderId && getOrderById()
  },[])
  return (
    <div className="sidebar">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="95vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded={true}
      >
        <div className="sidebar-inner">
          <div className="sidebar-menu">
            {Object.values(packageInfo).length === 0 ? (
              <div className="text-center">NO DATA</div>
            ) : (
              <div className="sidePackageInfo">
                <div style={{ color: 'black' }} className="sidePackage-title">
                  {packageInfo?.package?.name}
                </div>
                <div className="packInfo">
                  <span>{packageInfo?.package?.price} บาท/เดือน</span>
                  <span>ใช้งานได้ {packageInfo?.package?.days} วัน</span>
                  <span>หมดอายุ</span>
                  <span>{getExp()}</span>
                </div>
              </div>
            )}
            <ul>
              <li className={`menu-title ${isActive('') ? 'active' : ''}`}>
                <Link href="/user/manage">หน้าหลัก</Link>
              </li>
              <li
                className={`menu-title ${
                  isActive('/chatbot') || isActive('/chatbot/edit/') || isActive('/chatbot/create-bot') ? 'active' : ''
                }`}
              >
                <Link href="/user/manage/chatbot">สร้าง chatbot</Link>
              </li>
              <li
                className={`menu-title ${
                  isActive('/welcometext') || isActive('/welcometext/create-welcome') ? 'active' : ''
                }`}
              >
                <Link href="/user/manage/welcometext">ข้อความต้อนรับ</Link>
              </li>
              <li
                className={`menu-title ${
                  isActive('/replykeyword') || isActive('/replykeyword/create-replykeyword') ? 'active' : ''
                }`}
              >
                <Link href="/user/manage/replykeyword">ตอบกลับตาม keyword</Link>
              </li>
              <li className={`menu-title ${isActive('/linenoti') ? 'active' : ''}`}>
                <Link href="/user/manage/linenoti">Line เเจ้งเตือน</Link>
              </li>
              <li className={`menu-title ${isActive('/manuel') ? 'active' : ''}`}>
                <Link href="/user/manage/manuel">วิธีการใช้งาน</Link>
              </li>
              <li className={`menu-title ${isActive('/package') ? 'active' : ''}`}>
                <Link href="/user/manage/package">แพ็คเกจ</Link>
              </li>
              <li className={`menu-title ${isActive('/ad') ? 'active' : ''}`}>
                <Link href="/user/manage/ad">ระบบเพิ่มยอดขาย</Link>
              </li>
            </ul>
          </div>
        </div>
      </Scrollbars>
    </div>
  )
}

export default Sidebar
