import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TaskIcon from '@mui/icons-material/Task';
import StepperStyle from './style';
const Stepper = (props) => {
    const step = props.step;
    return (
        <StepperStyle>
            <ul className="breadcrumb">
                <li className={`breadcrumb-item ${step === '0' && 'active'}`}>
                    <div>
                        <ShoppingCartIcon className="icon" />
                        <span>เลือกแพ็คเกจ</span>
                    </div>
                </li>
                <li className={`breadcrumb-item ${step === '1' && 'active'}`}>
                    <div>
                        <CreditCardIcon className="icon" />
                        <span>การชำระเงิน</span>
                    </div>
                </li>
                <li className={`breadcrumb-item ${step === '2' && 'active'}`}>
                    <div>
                        <TaskIcon className="icon" />
                        <span>ยืนยันการสั่งซื้อ</span>
                    </div>
                </li>
            </ul>
        </StepperStyle>
    );
};

export default Stepper;
