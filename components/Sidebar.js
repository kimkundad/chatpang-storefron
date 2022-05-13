import React from 'react'
import { useRouter } from 'next/router'
import { Scrollbars } from 'react-custom-scrollbars';
import Link from 'next/link';

import useUser from '../Hooks/useUser'

const Sidebar = () => {
    const router = useRouter()
    const { user } =useUser()
    const packageInfo = user.package

    let pathName = router.pathname 

    console.log(pathName);

    const isActive = (path) =>{
        const n = '/user/manage'.length
            return pathName.slice(n) === path
    }
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
                    <div className='sidePackageInfo'>
                        <div style={{color:'black'}} className='cardTitle'>{packageInfo.name}</div>
                        <div className='packInfo'>
                                <span>{packageInfo.price} บาท/เดือน</span>
                                <span>ใช้งานได้ {packageInfo.periodOfUse} เดือน</span>
                                <span>หมดอายุ {packageInfo.exp}</span>
                        </div>
                    </div>
                    <ul>
                        <li className={`menu-title ${isActive('') ? "active":""}`}><Link href='/user/manage' >หน้าหลัก</Link></li>
                        <li className={`menu-title ${isActive('/chatbot') ? "active":""}`}><Link href='/user/manage/chatbot' >สร้าง chatbot</Link></li>
                        <li className={`menu-title ${isActive('/welcometext') ? "active":""}`}><Link href='/user/manage/welcometext' >ข้อความต้อนรับ</Link></li>
                        <li className={`menu-title ${isActive('/replykeyword') ? "active":""}`}><Link href='/user/manage/replykeyword' >ตอบกลับตาม keyword</Link></li>
                        <li className={`menu-title ${isActive('/linenoti') ? "active":""}`}><Link href='/user/manage/linenoti' >Line เเจ้งเตือน</Link></li>
                        <li className={`menu-title ${isActive('/manuel') ? "active":""}`}><Link href='/user/manage/manuel' >วิธีการใช้งาน</Link></li>
                        <li className={`menu-title ${isActive('/ad') ? "active":""}`}><Link href='/user/manage/ad' >ระบบเพิ่มยอดขาย</Link></li>
                    </ul>
                </div>
            </div>


        </Scrollbars>
    </div>
  )
}

export default Sidebar