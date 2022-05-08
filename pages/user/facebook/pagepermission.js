import { useRouter } from 'next/router'
import { Switch } from 'antd';

const Pagepermission = () => {
  const router = useRouter()

  return (
    <div className='page-wrapper'>
      <div className='text-center'>
          <h2 className='font-weight-bold'>ได้รับอนุญาตให้ดำเนินการอะไรได้บ้าง</h2>
          <h5>Chatpang อาจไม่ทำงานอย่างเหมาะสมหากคุณปิดตัวเลือกเหล่านี้</h5>
      </div>
    <div className='content'>
      <div className="row justify-content-center">
        <div style={{width:"40%"}} className="col-lg-12 d-flex flex-column">
          <table className="table mb-0">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <span>รับ อีเมล ของคุณ</span>
                </td>
                <td className='text-end' >
                  <Switch size="small" />
                </td>
              </tr>
              <tr>
                <td>
                    <span>จัดการและเข้าถึงการสนทนาบนเพจได้ใน Messenger</span>
                </td>
                <td className='text-end' >
                  <Switch size="small" />
                </td>
              </tr>
              <tr>
                <td>
                    <span>สร้างและจัดการเนื้อหาบนเพจของคุณ</span>
                </td>
                <td className='text-end' >
                  <Switch size="small" />
                </td>
              </tr>
              <tr>
                <td>
                    <span className='fs'>จัดการความคิดเห็นบนเพจของคุณ</span>
                </td>
                <td className='text-end' >
                  <Switch size="small" />
                </td>
              </tr>
              <tr>
                <td>
                    <span>อ่านเนื้อหาที่โพสบนเพจ</span>
                </td>
                <td className='text-end' >
                  <Switch size="small" />
                </td>
              </tr>
              <tr>
                <td>
                    <span>จัดการบัญชี การตั้งค่า และ Webhook ของเพจ</span>
                </td>
                <td className='text-end' >
                  <Switch size="small" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className='d-flex justify-content-between mt-3' >
            <div className='d-flex flex-column'>
              <button onClick={()=> router.push('/user/')} className='btn btn-secondary w-50'>ยกเลิก</button>
              <span><span className='text-primary' >นโยบายความเป็นส่วนตัว</span><span>และ</span><span className='text-primary' >ข้อกำหนดของเรา</span></span>
            </div>
            <div className='d-flex flex-column'>
              <div className='d-flex' >
                  <button onClick={()=> router.push('/user/facebook/pagelist')} className='btn btn-secondary mx-2' >ย้อนกลับ</button>
                  <button onClick={()=> router.push('/user/facebook/pagedone')} className='btn btn-primary' >ถัดไป</button>
              </div>
              <span className='text-primary text-end'>ศูนย์ช่วยเหลือ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Pagepermission