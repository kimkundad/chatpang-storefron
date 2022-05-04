
import { useRouter } from 'next/router'
import Stepper from '../components/Stepper'

const Confirmorder = () => {
  const router = useRouter()

  return (
    <div className='page-wrapper' >
    <div className='row' >
        <div className='col-lg-12 d-flex justify-content-center'>
            <Stepper step="2"/>
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
            </div>
            <div className='d-flex flex-column mx-3'>
                <span>กรุณาระบุเวลาการโอนเงิน</span>
            </div>
        </div>
    </div>
    <div className='row m-auto w-75 mt-4' >
        <div className='col-lg-12 d-flex justify-content-center' >
            <div className='d-flex flex-column mx-3'>
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

export default Confirmorder