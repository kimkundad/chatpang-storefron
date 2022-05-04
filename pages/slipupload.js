
import { useRouter } from 'next/router'
import React, { useState } from "react";
import Stepper from '../components/Stepper'
import { DatePicker, TimePicker,Upload,message  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

const Slipupload = () => {
  const router = useRouter()
  const { Dragger } = Upload;
  const [transferDate, setTransferDate] = useState("")
  const [transferTime, setTransferTime] = useState("")

  const props = {
    name: 'file',
    multiple: true,
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div className='page-wrapper' >
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
                <DatePicker onChange={onChange} />
            </div>
            <div className='d-flex flex-column mx-3'>
                <span>กรุณาระบุเวลาการโอนเงิน</span>
                <TimePicker onChange={onChange}/>
            </div>
        </div>
    </div>
    <div className='row m-auto w-75 mt-4' >
        <div className='col-lg-12 d-flex justify-content-center' >
            <div className='d-flex flex-column mx-3'>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <FontAwesomeIcon className='uploadicon' icon={faCloudArrowUp} />
                    </p>
                    <p className="ant-upload-text">คลิก หรือ ลาก และ วางไฟล์เพื่ออัพโหลด</p>
                    <p className="ant-upload-hint">
                    </p>
                </Dragger>
            </div>
        </div>
    </div>
    <div className='row justify-content-center'>
        <div className='col-12 d-flex justify-content-end w-50 mt-3'>
            <span onClick={()=> router.back()} className='btn text-secondary'>ย้อนกลับ</span>
            <button onClick={()=> router.push('/confirmorder')} className='customBTN'>ต่อไป</button>
        </div>
    </div>
</div>
  )
}

export default Slipupload