import React from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  return (
    <div className="nosidebar-wrapper text-center">
        <p className='error-text' >เกิดข้อผิดพลาด</p>
        <p className='error-text'>กรุณาติดต่อแอดมิน</p>
        <button className='error-text error-btn' onClick={()=> router.replace("/")}>หน้าหลัก</button>
    </div>
  )
}

export default Index