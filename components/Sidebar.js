import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Scrollbars } from 'react-custom-scrollbars'
import Link from 'next/link'

import useUser from '../Hooks/useUser'
import axios from '../pages/api/axios'
import moment from 'moment'

const Sidebar = () => {
  const router = useRouter()
  const { user,setUserData } = useUser()
  // const [packageInfo, setPackageInfo] = useState({})

  const packageInfo = user.package

  let pathName = router.pathname

  const isActive = (path) => {
    const n = '/user/manage'.length
    return pathName.slice(n) === path
  }

  const getPackageInfo = async () => {
    try {
      if (user?.user?.packageData !== undefined) {
        const res = await axios.get(`/packages/${user?.user?.packageData[0].id}`,{headers:{Authorization: 'Bearer ' + user?.accessToken}})
        const data = res.data
        data.periodOfUse = moment(moment(user?.user?.packageData[0].endAt) - moment()).format('DD')
        data.exp = moment(user?.user?.packageData[0].endAt).format('DD/MM/YYYY')
        // console.log(data);
       await setUserData({
          ...user,
          package:data
        })
        setPackageInfo(data)
      } else {
        setPackageInfo({})
      }
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    if (Object.values(user?.package).length === 0) {
      getPackageInfo()
    }
  }, [user?.package])
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
            <div className="sidePackageInfo">
              <div style={{ color: 'black' }} className="cardTitle">
                {packageInfo?.name}
              </div>
              <div className="packInfo">
                <span>{packageInfo?.price} บาท/เดือน</span>
                <span>ใช้งานได้ {packageInfo?.periodOfUse} วัน</span>
                <span>หมดอายุ {packageInfo?.exp}</span>
              </div>
            </div>
            <ul>
              <li className={`menu-title ${isActive('') ? 'active' : ''}`}>
                <Link href="/user/manage">หน้าหลัก</Link>
              </li>
              <li
                className={`menu-title ${
                  isActive('/chatbot') || isActive('/chatbot/edit/:id') || isActive('/chatbot/create-bot')
                    ? 'active'
                    : ''
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
