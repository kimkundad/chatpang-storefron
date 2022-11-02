import React, { useState, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronLeft, faCircleChevronDown, faCircleChevronUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Divider, Input } from 'antd';
import { useRouter } from 'next/router';

import useUser from '../../../../Hooks/useUser';
import PageDropdown from '../../../../components/PageDropdown';
import axios from '../../../api/axios';
import { Alert } from 'react-bootstrap';
import UserLayout from '../../../../components/layouts/userLayout/userLayout';
import GreetingStyle from './style';

const CreateWelcome = () => {
    const router = useRouter();
    const { user } = useUser();
    const [pageID, setPageID] = useState(router.query.pageId);
    const { TextArea } = Input;
    // console.log(pageID);
    const [campaignName, setCampaignName] = useState('');
    const [details, setDetails] = useState(['']);
    //*check status
    const [isSuccess, setIsSuccess] = useState({
        show: false,
        isSuccess: false,
        text: '',
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            messages: details,
            name: campaignName,
            page: pageID,
            facebookUser: user?.user?.id,
        };
        // console.log(data)
        try {
            const res = await axios.post('/greeting-messages', data, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            // console.log(res.data)
            //set Id for publish
            //*Error 500
            const greetingId = res.data.data.id;
            const res1 = await axios.post(
                `/greeting-messages/${greetingId}/publish`,
                { accessToken: user?.accessToken },
                {
                    headers: { Authorization: `Bearer ${user?.accessToken}` },
                }
            );
            console.log(res1.data);
            setIsSuccess({
                show: true,
                isSuccess: true,
                text: 'สร้างแคมเปญสำเร็จ',
            });
            handleNotify();
            setCampaignName('');
            setDetails(['']);
        } catch (error) {
            console.log(error);
            setIsSuccess({
                show: true,
                isSuccess: false,
                text: 'สร้างแคมเปญไม่สำเร็จ',
            });
            handleNotify();
        }
    };
    const handleNotify = () => {
        setTimeout(() => {
            setIsSuccess({
                show: false,
                isSuccess: false,
                text: '',
            });
        }, 2000);
    };

    const onSelect = (id) => {
        // console.log(id)
        setPageID(id);
    };

    //* function handle text and image

    const inputRef = details.reduce((acc, value, index) => {
        acc[index] = createRef();
        return acc;
    }, {});

    const onHandleChangeDetail = async (e, index) => {
        let temArr = [...details];
        temArr[index] = e.target.value;
        setDetails(temArr);
    };
    const handleAddText = () => {
        setDetails([...details, '']);
    };
    const onDeleteDetails = (index) => {
        let tempArr = [...details];
        tempArr.splice(index, 1);
        setDetails(tempArr);
    };
    const onClickNext = (index) => {
        // console.log(inputRef[index].current)
        index + 1 <= Object.values(inputRef).length - 1 &&
            inputRef[index + 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'end',
            });
    };
    const onClickPrev = (index) => {
        index - 1 >= 0 &&
            inputRef[index - 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'start',
            });
    };
    const renderTextInput = () => {
        return details.map((text, index) => {
            return (
                <div key={index} className="row g-md-3 createContainer">
                    {/* <> */}
                    <div className="col-md-3 col-xs-12 commentHeader">
                        <strong className="ms-md-3 me-auto me-md-0">ข้อความ {details?.length > 1 && `(${index + 1})`}</strong>
                    </div>
                    <div ref={inputRef[index]} className="col-md-6 col-9 commentInput">
                        <TextArea
                            showCount
                            value={text}
                            onChange={(e) => onHandleChangeDetail(e, index)}
                            maxLength={200}
                            placeholder="พิมพ์ข้อความที่นี้..."
                            autoSize={{ minRows: 4, maxRows: 6 }}
                        />
                    </div>
                    <div className="col-md-2 col-2 d-flex justify-content-center align-items-start align-items-md-center replyKeywordBtn">
                        <div className="h-auto d-flex flex-column me-4">
                            <span>
                                <FontAwesomeIcon onClick={() => onClickPrev(index)} icon={faCircleChevronUp} />
                            </span>
                            <span>
                                <FontAwesomeIcon onClick={() => onClickNext(index)} icon={faCircleChevronDown} />
                            </span>
                        </div>
                        <div className="">
                            <span style={{ color: 'red' }}>
                                <FontAwesomeIcon onClick={() => onDeleteDetails(index)} icon={faTrashAlt} />
                            </span>
                        </div>
                    </div>
                    {/* </> */}
                </div>
            );
        });
    };
    //* function handle text and image
    return (
        <UserLayout>
            <GreetingStyle>
                {isSuccess.show && (
                    <Alert className="text-center" variant={isSuccess.isSuccess ? 'success' : 'danger'}>
                        <span>{isSuccess.text}</span>
                    </Alert>
                )}
                <div className="page-header">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <span onClick={() => router.back()} className="userBackButton">
                                <FontAwesomeIcon className="me-2-md" icon={faChevronLeft} />
                                <span className="textBTN">ย้อนกลับ</span>
                            </span>
                            <span className="text-uppercase userDropdown">
                                <PageDropdown onSelect={onSelect} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="row g-3 createHeader">
                    <div className="col-md-4 text-md-end text-start">
                        <strong className="me-3">ชื่อแคมเปญ</strong>
                    </div>
                    <div className="col-md-4 mx-auto chatNameInput">
                        <input type="text" name="name" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} autoFocus={true} />
                    </div>
                    <div className="col-md-4 text-center chatButtonContainer">
                        <button onClick={(e) => onSubmit(e)} className="chatCustomBtn">
                            บันทึก
                        </button>
                        <button className="chatCustomBtn">ยกเลิก</button>
                    </div>
                </div>
                <Divider />
                <div className="text-container">{renderTextInput()}</div>
                {/* can not according to facebook greeting function */}
                {/* <Divider />
          {renderImageInput()} */}
                <Divider />
                <div className="row g-3 justify-content-center">
                    <div className="col-md-4 replyButtonContainer">
                        <button onClick={handleAddText} className="replyCustomBtn">
                            <FontAwesomeIcon icon={faPlus} />
                            <span>เพิ่มข้อความ</span>
                        </button>
                    </div>
                    {/* can not according to facebook greeting function */}
                    {/* <div className="col-md-4 text-center replyButtonContainer">
              <button onClick={handleAddImage} className="replyCustomBtn">
                <FontAwesomeIcon icon={faPlus} />
                <span>เพิ่มรูปภาพ</span>
              </button>
            </div> */}
                </div>
            </GreetingStyle>
        </UserLayout>
    );
};

export default CreateWelcome;
