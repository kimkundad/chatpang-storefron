import React from 'react'
import { Button, Table } from 'antd'
import { SettingOutlined } from '@ant-design/icons';

const Pagemanagement = () => {
    const data = [
        {
            pageName:'pagePang',
            comments:'0',
            conditions:'1',
        },
        {
            pageName:'pagePang-2',
            comments:'5',
            conditions:'20',
        },
        {
            pageName:'pagePang-3',
            comments:'10',
            conditions:'15',
        },
        {
            pageName:'pagePang-4',
            comments:'4',
            conditions:'11',
        },
    ]
    const column = [
        {
            title:<strong className='fs-4'>เพจของคุณ ({data.length})</strong>,
            dataIndex:'pageName',
            key:'pageName',
            render: text => <p className='fs-5'>{text}</p>
        },
        {
            title:<strong className='fs-4'>คอมเม้นต์</strong>,
            dataIndex:'comments',
            key:'comments',
            render: text => <p className='fs-5'>{text}</p>
        },
        {
            title:<strong className='fs-4'>เงื่อนไขทั้งหมด</strong>,
            dataIndex:'conditions',
            key:'conditions',
            render: text => <p className='fs-5'>{text}</p>
        },
    ]
  return (
    <div className='page-wrapper'>
        <div className='content' style={{margin:"0 150px"}}>
            <div className='row'>
                <div className='col-12'>
                    <div className='numberComment d-flex flex-column justify-content-center align-items-center'>
                        <strong >0 / 100</strong>
                        <span>คอมเม้นต์วันนี้</span>
                    </div>
                </div>
                <div className='col-12'>
                    <Button style={{fontSize:"1.5rem", height:"fit-content",width:"190px"}} className="my-4 d-flex justify-content-center align-items-center" type="primary" icon={<SettingOutlined />}>เพิ่มหรือลบเพจ</Button>
                </div>
                <span className='text-secondary fs-5'>กดเลือกเพจทำการตั้งค่าการตอบคอมเม้นต์ และดึงคอมเม้นต์เข้า inbox</span>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <Table 
                    dataSource={data} 
                    columns={column}
                    bordered
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pagemanagement