
import { useRouter } from 'next/router'
import React, { useState } from "react";
import Stepper from '../components/Stepper'
import { DatePicker, TimePicker,Upload,Modal  } from 'antd';

const Slipupload = () => {
  const router = useRouter()
  const [transferDate, setTransferDate] = useState("")
  const [transferTime, setTransferTime] = useState("")
  const [fileList, setFileList] = useState([])
  const [preview, setPreview] = useState({
    previewVisible: false,
    previewImage: '',
  })

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    setPreview({
      previewVisible: true,
      previewImage: src,
    })
  };

  function onChangeDate(date, dateString) {
    console.log(date, dateString);
    setTransferDate(dateString)
  }
  function onChangeTime(date, timeString) {
    console.log(date, timeString);
    setTransferTime(timeString)
  }
  function handleCancel () {
    setPreview({previewVisible: false})
  }
  return (
    <div className='page-wrapper' >
    <div className='content'>
      <div className='row' >
          <div className='col-lg-12 d-flex justify-content-center'>
              <Stepper step="1"/>
          </div>
      </div>
      <div className="row m-auto w-75">
          <div className="col-lg-12 d-flex justify-content-center">
              <h1>กรุณาอัพโหลดสลิป</h1>
          </div>
      </div>
      <div className='row m-auto w-75' >
          <div className='col-lg-12 d-flex justify-content-center' >
              <div className='d-flex flex-column mx-3'>
                  <span>กรุณาระบุวันที่ทำการโอนเงิน</span>
                  <DatePicker onChange={onChangeDate} />
              </div>
              <div className='d-flex flex-column mx-3'>
                  <span>กรุณาระบุเวลาการโอนเงิน</span>
                  <TimePicker onChange={onChangeTime}/>
              </div>
          </div>
      </div>
      <div className='row m-auto w-75 mt-4' >
          <div className='col-lg-12 d-flex justify-content-center' >
              <div className='d-flex flex-column mx-3'>
              <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                >
                {fileList.length < 5 && '+ Upload'}
              </Upload>
              <Modal
              visible={preview.previewVisible}
              title="หลักฐานการโอนของคุณ"
              footer={null}
              onCancel={handleCancel}
              >
                <img alt="example" style={{ width: '100%' }} src={preview.previewImage} />
              </Modal>
              </div>
          </div>
      </div>
      <div className='row justify-content-center'>
          <div style={{width:"35%"}} className='col-12 d-flex justify-content-end mt-3'>
              <span onClick={()=> router.back()} className='btn text-secondary'>ย้อนกลับ</span>
              <button onClick={()=> router.push('/confirmorder')} className='customBTN'>ต่อไป</button>
          </div>
      </div>
    </div>
</div>
  )
}

export default Slipupload