import { useRouter } from 'next/router'

const Pagedone = () => {
  const router = useRouter()

  return (
    <div className='page-wrapper'>
    <div className='text-center'>
        <h2 className='font-weight-bold'>คุณได้เชื่อมต่อกับ Facebook เรียบร้อยเเล้ว</h2>
        <div>
        <p className="mb-0">คุณสามารถอัพเดตสิ่งที่เราสามารถทำได้ใน</p>
        <p className="mb-0"><span className='text-primary' >การตั้งค่าผสานรวมธุรกิจ</span>ของคุณ</p>
        <p>เราอาจมีขั้นตอนอื่นๆให้ดำเนินการในการตั้งค่าให้เสร็จสิ้น</p>
        </div>
    </div>
    <div className="row justify-content-center mt-5">
      <div className="col-lg-12 d-flex w-100 justify-content-center">
            <button onClick={()=> router.push('/packages')} className='btn btn-primary w-50'>ตกลง</button>
      </div>
    </div>
</div>
  )
}

export default Pagedone