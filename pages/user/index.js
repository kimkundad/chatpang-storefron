// import Login from './login'
export default function Home() {
  const onLogin = async () => {
    //*got ot new tap
    window.open('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/auth')
    //*stay same page
    // router.replace('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/auth')
  }

  return (
    <div className={`nosidebar-wrapper`}>
      <h4 className="text-center facebook-header">เข้าสู่ระบบ</h4>
      <div className="text-center mt-5 facebook-body">
        {/* <FacebookLogin onShowWarning={onShowWarning} /> */}
        <button onClick={() => onLogin()} className="btn btn-primary btn-lg my-4 rounded-pill fs-2">
          เข้าสู่ระบบด้วย FACEBOOK
        </button>
        <div>
          <span>คุณจะถูกขอสิทธิในการเข้าถึงเพจต่างๆ เพื่อใช้ในการตอบคอมเม้นต์ และคอมเม้นต์เข้า inbox</span>
        </div>
      </div>
    </div>
  )
}
