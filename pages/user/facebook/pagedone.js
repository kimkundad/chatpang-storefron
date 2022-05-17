import { useRouter } from 'next/router'
import useUser from '../../../Hooks/useUser'
const Pagedone = () => {
  const router = useRouter()
  const { user,setUserData } = useUser()
  const onSubmit = () => {
    router.push('/user/packages')
    setUserData({
      isLogin:true,
      package:{
          name:'VIP',
          price:'590',
          periodOfUse:'3',
          exp:'30/12/2021'
      }
  })
  }
  return (
    <div className='page-wrapper'>
    <div className='text-center'>
        <h2 className='font-weight-bold'>คุณได้เชื่อมต่อกับ Facebook เรียบร้อยเเล้ว</h2>
        <p>คุณสามารถอัพเดตสิ่งที่เราสามารถทำได้ใน<br/>
        <span className='text-primary' >การตั้งค่าผสานรวมธุรกิจ</span>ของคุณ<br/>
        เราอาจมีขั้นตอนอื่นๆให้ดำเนินการในการตั้งค่าให้เสร็จสิ้น</p>
    </div>
    <div className='content'>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-12 d-flex w-75 justify-content-center">
              <button onClick={onSubmit} className='btn btn-primary w-50'>ตกลง</button>
        </div>
      </div>
    </div>
</div>
  )
}

export default Pagedone