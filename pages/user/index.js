import { useState } from 'react';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';
import UserLoginStyle from './style'

const UserLogin = (props) => {
    const [navHeight, setNavHeight] = useState(64);

    const onLogin = async (props) => {
        //*got ot new tap
        window.open('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/auth');
    };

    return (
        <MainLayout  setNavHeight={setNavHeight}>
            <UserLoginStyle navHeight={navHeight}>
                <h4 className="text-center facebook-header">เข้าสู่ระบบ</h4>
                <div className="text-center facebook-body">
                    <button onClick={() => onLogin()} className="btn btn-primary btn-lg my-4 rounded-pill fs-4">
                        เข้าสู่ระบบด้วย FACEBOOK
                    </button>
                    <div>
                        <span>คุณจะถูกขอสิทธิในการเข้าถึงเพจต่างๆ เพื่อใช้ในการตอบคอมเม้นต์ และคอมเม้นต์เข้า inbox</span>
                    </div>
                </div>
            </UserLoginStyle>
        </MainLayout>
    );
}

export default UserLogin;
