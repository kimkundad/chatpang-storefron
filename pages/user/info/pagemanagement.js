import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import axios from '../../api/axios'
import useUser from '../../../Hooks/useUser'

const Pagemanagement = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  const [isFreeTrail, setIsFreeTrial] = useState(true)
  const { user } = useUser()
  const facebookUserId = router.query.fb
  // console.log(user);
  const getPageList = async () => {
    try {
      const res = await axios.get('/pages', { headers: { Authorization: 'Bearer ' + user?.accessToken } })
      // console.log(res.data);
      const arr = res.data.pages.map(item => item.item)
      setData(arr)
      // console.log(arr);
    } catch (error) {
      console.log(error)
    }
  }

    //* check Free trail 15 days
  const checkFreeTrial = () => {
    return user?.user?.status === 'freetrial' && user?.user?.status === 'inactive'
  }
  const column = [
    {
      title: <strong className="fs-4">เพจของคุณ ({data.length})</strong>,
      dataIndex: 'pageName',
      key: 'pageName',
      render: (text) => <p className="fs-5">{text}</p>,
    },
    {
      title: <strong className="fs-4">คอมเม้นต์</strong>,
      dataIndex: 'comments',
      key: 'comments',
      render: (text) => <p className="fs-5">{text}</p>,
    },
    {
      title: <strong className="fs-4">เงื่อนไขทั้งหมด</strong>,
      dataIndex: 'conditions',
      key: 'conditions',
      render: (text) => <p className="fs-5">{text}</p>,
    },
  ]

  useEffect(() => {
    getPageList()
    checkFreeTrial()
  }, [])
  return (
    <div className="page-wrapper">
      <div className="content" style={{ margin: '0 150px' }}>
        <div className="row">
          <div className="col-12">
            <div className="numberComment d-flex flex-column justify-content-center align-items-center">
              <strong>0 / 100</strong>
              <span>คอมเม้นต์วันนี้</span>
            </div>
          </div>
          <div className="col-12">
            <Button
              style={{ fontSize: '1.5rem', height: 'fit-content', width: '190px' }}
              className="my-4 d-flex justify-content-center align-items-center"
              type="primary"
              icon={<SettingOutlined />}
              disabled={isFreeTrail}
            >
              เพิ่มหรือลบเพจ
            </Button>
          </div>
          <span className="text-secondary fs-5">กดเลือกเพจทำการตั้งค่าการตอบคอมเม้นต์ และดึงคอมเม้นต์เข้า inbox</span>
        </div>
        <div className="row">
          <div className="table-responsive">
            <Table dataSource={data} columns={column} bordered />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagemanagement
