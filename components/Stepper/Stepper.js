import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCreditCard, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import StepperStyle from './style';
const Stepper = (props) => {
    const step = props.step;
    return (
        <StepperStyle>
            <ul className="breadcrumb">
                <li className={`breadcrumb-item ${step === '0' && 'active'}`}>
                    <div>
                        <FontAwesomeIcon className="icon" icon={faCartShopping} />
                        <span>เลือกแพ็คเกจ</span>
                    </div>
                </li>
                <li className={`breadcrumb-item ${step === '1' && 'active'}`}>
                    <div>
                        <FontAwesomeIcon className="icon" icon={faCreditCard} />
                        <span>การชำระเงิน</span>
                    </div>
                </li>
                <li className={`breadcrumb-item ${step === '2' && 'active'}`}>
                    <div>
                        <FontAwesomeIcon className="icon" icon={faFileCircleCheck} />
                        <span>ยืนยันการสั่งซื้อ</span>
                    </div>
                </li>
            </ul>
        </StepperStyle>
    );
};

export default Stepper;
