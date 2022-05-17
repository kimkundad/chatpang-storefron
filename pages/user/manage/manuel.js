import React, {useState} from 'react'
import Sidebar from '../../../components/Sidebar'

import Player from 'react-player'

const Manuel = () => {
  const [ url , setUrl] =useState('https://www.youtube.com/watch?v=1F9_V0ub2H8')

  const onChangeUrl = (url) => {
    setUrl(url)
  }
  return (
    <div className='page-wrapper'>
        <div className='content container-fluid'>
            <Sidebar />
            <div className='userpage-wrapper'>
              {/* <div className="page-header"> */}
                <div className="row">
                  <div className="col-6 manuelOpContainer">
                    <strong className="page-title">วิธีการใช้งาน</strong>
                    <span style={{cursor:'pointer'}} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=1F9_V0ub2H8')} className='manuelButton'>การสร้าง Chatbot</span>
                    <span style={{cursor:'pointer'}} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=Faow3SKIzq0')} className='manuelButton'>ข้อความต้อนรับ</span>
                    <span style={{cursor:'pointer'}} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=CVHj7Wxhvdo')} className='manuelButton'>ตอบกลับตาม Keyword</span>
                    <span style={{cursor:'pointer'}} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=TqFU1vle48k')} className='manuelButton'>การสร้าง Line แจ้งเตือน</span>
                    <span style={{cursor:'pointer'}} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=Ez3vlhC_n98')} className='manuelButton'>วิธีเพิ่ม ลด เพจ</span>
                  </div>
                  <div className="col-6">
                    <Player 
                    url={url}
                    width={460}
                    height={320} 
                    controls={true}
                    muted={true}
                    className=''
                    />
                  </div>
                </div>
              {/* </div> */}
              {/* content */}
            </div>
        </div>
    </div>
  )
}

export default Manuel