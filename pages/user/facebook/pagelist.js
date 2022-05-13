import { useRouter } from 'next/router'

const Pagelist = () => {
  const router = useRouter()

  return (
    <div className='page-wrapper'>
        <div className='text-center'>
            <h2>เลือกเพจที่ต้องการเชื่อมต่อ</h2>
        </div>
        <div className='content'>
          <div className="row justify-content-center">
            <div className="col-lg-12 d-flex flex-column w-25">
            <div className='d-flex justify-content-between mt-3' >
              <span>FACEBOOK</span>
              <span>USER</span>
            </div>
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
                        <span>ปังไม่หยุด</span>
                    </td>
                    <td className='text-end' >
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <span>ปังไม่หยุด</span>
                    </td>
                    <td className='text-end' >
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <span>ปังไม่หยุด</span>
                    </td>
                    <td className='text-end' >
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <span>ปังไม่หยุด</span>
                    </td>
                    <td className='text-end' >
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='d-flex justify-content-between mt-3' >
                <div className='d-flex flex-column'>
                  <button onClick={()=> router.push('/user/')} className='btn btn-secondary w-50' >ย้อนกลับ</button>
                  <span><span className='text-primary' >นโยบายความเป็นส่วนตัว</span><span>และ</span><span className='text-primary' >ข้อกำหนดของเรา</span></span>
                </div>
                <div className='d-flex flex-column'>
                  <button onClick={()=> router.push('/user/facebook/pagepermission')} className='btn btn-primary' >ถัดไป</button>
                  <span className='text-primary'>ศูนย์ช่วยเหลือ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pagelist