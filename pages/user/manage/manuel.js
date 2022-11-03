import React, { useState } from 'react';
// import Sidebar from '../../../components/Sidebar'
import UserLayout from '../../../components/layouts/userLayout/userLayout';
import ManageStyle from './style';
// import Player from 'react-player'

const Manuel = () => {
    const [url, setUrl] = useState('https://www.youtube.com/watch?v=1F9_V0ub2H8');

    const onChangeUrl = (url) => {
        setUrl(url);
    };
    return (
        <UserLayout>
            <ManageStyle>
                <div className="row manuel-container">
                    <div className="col-lg-6 manuelOpContainer order-xs-1">
                        <strong className="page-title">วิธีการใช้งาน</strong>
                        <span style={{ cursor: 'pointer' }} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=1F9_V0ub2H8')} className="manuelButton">
                            การสร้าง Chatbot
                        </span>
                        <span style={{ cursor: 'pointer' }} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=Faow3SKIzq0')} className="manuelButton">
                            ข้อความต้อนรับ
                        </span>
                        <span style={{ cursor: 'pointer' }} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=CVHj7Wxhvdo')} className="manuelButton">
                            ตอบกลับตาม Keyword
                        </span>
                        <span style={{ cursor: 'pointer' }} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=TqFU1vle48k')} className="manuelButton">
                            การสร้าง Line แจ้งเตือน
                        </span>
                        <span style={{ cursor: 'pointer' }} onClick={() => onChangeUrl('https://www.youtube.com/watch?v=Ez3vlhC_n98')} className="manuelButton">
                            วิธีเพิ่ม ลด เพจ
                        </span>
                    </div>
                    <div className="vdo-container col-lg-6 col-xs-12 mx-auto text-center order-xs-0">
                        {/* <Player 
                    url={url}
                    width={460}
                    height={320} 
                    controls={true}
                    muted={true}
                    className='w-auto my-4'
                    /> */}
                        <iframe
                            width="80%"
                            height="60%"
                            className="video-yt"
                            src={url.replace('watch?v=', 'embed/')}
                            allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </ManageStyle>
        </UserLayout>
    );
};

export default Manuel;
