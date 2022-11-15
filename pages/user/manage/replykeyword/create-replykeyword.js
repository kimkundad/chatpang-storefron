import React, { useState, createRef } from 'react';
import { Divider } from 'antd';
import { useRouter } from 'next/router';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';

import axios from '../../../api/axios';
import PageDropdown from '../../../../components/PageDropdown';
import useUser from '../../../../Hooks/useUser';
import { Alert } from 'react-bootstrap';
import TagsInput from '../../../../components/tagsinput/TagsInput';
import UserLayout from '../../../../components/layouts/userLayout/userLayout';
import KeywordStyle from './style';

const CreateReplyKeyword = () => {
    const router = useRouter();
    const { user } = useUser();
    const [pageID, setPageID] = useState(router.query.pageId);

    const [imgs, setImgs] = useState(['']);
    const [previewImgs, setPreviewImgs] = useState(['']);
    const [campaignName, setCampaignName] = useState('');
    const [keywordName, setKeywordName] = useState([]);
    const [details, setDetails] = useState(['']);
    //*check status
    const [isSuccess, setIsSuccess] = useState({
        show: false,
        isSuccess: false,
        text: '',
    });
    const onSubmit = async (e) => {
        e.preventDefault();
        const arrImages = imgs.length === 0 ? [] : await convertToImagePath();

        const data = {
            keywords: keywordName,
            messages: details,
            images: arrImages,
            name: campaignName,
            facebookUser: user?.user?.id,
            page:pageID
        };
        // console.log(data)
        try {
            const res = await axios.post('/auto-replies', data, { headers: { Authorization: `Bearer ${user?.accessToken}` } });
            // console.log(res.data)
            setIsSuccess({
                show: true,
                isSuccess: true,
                text: 'สร้างแคมเปญสำเร็จ',
            });
            handleNotify();
            setCampaignName('');
            setKeywordName([]);
            setDetails(['']);
            setImgs(['']);
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
            router.back()
        }, 2000);
    };
    const convertToImagePath = async () => {
        let tmpArr = [];
        for (const img of imgs) {
            let url = img !== '' ? await getImagePath(img) : '';
            tmpArr.push(url);
        }
        // setImgs(tmpArr)
        return tmpArr;
    };
    const getImagePath = async (file) => {
        const formData = new FormData();
        formData.append('file', file, file.name);
        try {
            const res = await axios.post('/upload', formData);
            return res.data.data.public_url;
        } catch (error) {
            console.log(error);
        }
    };

    const onClear = () => {
        setCampaignName('');
        setKeywordName([]);
        setDetails(['']);
        setImgs(['']);
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
    const imgsRef = imgs.reduce((acc, value, index) => {
        acc[index] = createRef();
        return acc;
    }, {});
    const imgsInputRef = imgs.reduce((acc, value, index) => {
        acc[index] = createRef();
        return acc;
    }, {});
    const onUpload = async (index, file) => {
        let temImg = URL.createObjectURL(file);
        let tempArr = [...previewImgs];
        tempArr[index] = temImg;
        setPreviewImgs(tempArr);
    };
    const onDeleteImg = (index) => {
        let temp1 = [...imgs];
        let temp2 = [...previewImgs];
        temp1.splice(index, 1);
        temp2.splice(index, 1);
        setImgs(temp1);
        setPreviewImgs(temp2);
    };
    const onClearImg = async (index) => {
        let temp1 = [...imgs];
        let temp2 = [...previewImgs];
        temp1[index] = '';
        temp2[index] = '';
        setImgs(temp1);
        setPreviewImgs(temp2);
    };

    const onHandleChangeDetail = async (e, index) => {
        let temArr = [...details];
        temArr[index] = e.target.value;
        setDetails(temArr);
    };
    const onHandleChangeImg = async (e, index) => {
        let temArr = [...imgs];
        temArr[index] = e.target.files[0];
        await onUpload(index, e.target.files[0]);
        setImgs(temArr);
    };

    const handleAddText = () => {
        setDetails([...details, '']);
    };
    const handleAddImage = () => {
        setImgs([...imgs, '']);
        setPreviewImgs([...previewImgs, '']);
    };
    const onDeleteDetails = (index) => {
        let temp1 = [...details];
        temp1.splice(index, 1);
        setDetails(temp1);
    };
    const handleClickFileInput = (index) => {
        // console.log(inputRef[index])
        imgsInputRef[index].current.click();
    };
    const onInputNext = (index) => {
        // console.log(inputRef)
        index + 1 <= Object.values(inputRef).length - 1 &&
            inputRef[index + 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'end',
            });
    };
    const onInputPrev = (index) => {
        // console.log(inputRef)
        index - 1 >= 0 &&
            inputRef[index - 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'end',
            });
    };
    const onImgNext = (index) => {
        // console.log(inputRef[index].current)
        index + 1 <= Object.values(imgsRef).length - 1 &&
            imgsRef[index + 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'end',
            });
    };
    const onImgPrev = (index) => {
        index - 1 >= 0 &&
            imgsRef[index - 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'end',
            });
    };
    const renderTextInput = () => {
        return details.map((text, index) => {
            // if (data.type === 'text') {
            return (
                <div key={index} className="row g-md-3 createContainer">
                    {/* <> */}
                    <div className="col-md-3 col-xs-12 commentHeader">
                        <strong className="ms-md-3 me-auto me-md-0">ข้อความ {details?.length > 1 && `(${index + 1})`}</strong>
                    </div>
                    <div ref={inputRef[index]} className="col-md-6 col-9 commentInput">
                        <textarea value={text} onChange={(e) => onHandleChangeDetail(e, index)} maxLength={200} placeholder="พิมพ์ข้อความที่นี้..." rows={4} cols={6} />
                        <div className="text-secondary text-end">{details[index]?.length}/200</div>
                    </div>
                    <div className="col-md-2 col-2 d-flex justify-content-center align-items-center replyKeywordBtn">
                        <div className="h-auto d-flex flex-column me-4">
                            <span>
                                <KeyboardArrowUpIcon onClick={() => onInputPrev(index)} />
                            </span>
                            <span>
                                <KeyboardArrowDownIcon onClick={() => onInputNext(index)}  />
                            </span>
                        </div>
                        <div className="replyDeleteBTN">
                            <span style={{ color: 'red' }}>
                                <DeleteIcon onClick={() => onDeleteDetails(index)} />
                            </span>
                        </div>
                    </div>
                    {/* </> */}
                </div>
            );
            // }
        });
    };
    const renderImageInput = () => {
        return imgs.map((img, index) => {
            // if (data.type === 'image') {
            return (
                <div key={index} className="row g-md-3 createContainer">
                    <div className="col-md-3 col-xs-12 commentHeader">
                        <strong className="ms-md-3 me-auto me-md-0">รูป {imgs?.length > 1 && `(${index + 1})`}</strong>
                    </div>
                    <div ref={imgsRef[index]} className="col-md-6 col-9 commentInput">
                        {img !== '' ? (
                            <div onClick={() => onClearImg(index)} className="uploadIMG">
                                <img src={previewImgs[index]} alt="img" />
                                <span>ลบรูป</span>
                            </div>
                        ) : (
                            <>
                                <input type="file" ref={imgsInputRef[index]} className="inputfile" onChange={(e) => onHandleChangeImg(e, index)} />
                                <label onClick={() => handleClickFileInput(index)} htmlFor="file">
                                    อัพโหลดรูป
                                </label>
                            </>
                        )}
                    </div>
                    <div className="col-md-2 col-2 d-flex justify-content-center align-items-center replyKeywordBtn">
                        <div className="d-flex flex-column me-4">
                            <span>
                                <KeyboardArrowUpIcon onClick={() => onImgPrev(index)} />
                            </span>
                            <span>
                                <KeyboardArrowDownIcon onClick={() => onImgNext(index)} />
                            </span>
                        </div>
                        <div className="replyDeleteBTN">
                            <span style={{ color: 'red' }}>
                                <DeleteIcon onClick={() => onDeleteImg(index)} />
                            </span>
                        </div>
                    </div>
                </div>
            );
            // }
        });
    };
    //* function handle text and image

    return (
        <UserLayout>
            <KeywordStyle>
                {isSuccess.show && (
                    <Alert className="text-center" variant={isSuccess.isSuccess ? 'success' : 'danger'}>
                        <span>{isSuccess.text}</span>
                    </Alert>
                )}
                <div className="page-header">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <span onClick={() => router.back()} className="userBackButton">
                                <NavigateBeforeIcon className="me-2-md" />
                                <span className="textBTN">ย้อนกลับ</span>
                            </span>
                            <span className="text-uppercase userDropdown">
                                <PageDropdown onSelect={onSelect} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="row g-3">
                    <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
                        <h4 className="me-3 text-md-end my-auto">ชื่อแคมเปญ</h4>
                    </div>
                    <div className="col-md-4 mx-auto chatNameInput">
                        <input type="text" name="name" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} autoFocus={true} />
                    </div>
                    <div className="col-md-4 text-center order-md-0 order-3 chatButtonContainer">
                        <button onClick={(e) => onSubmit(e)} className="chatCustomBtn">
                            บันทึก
                        </button>
                        <button onClick={onClear} className="chatCustomBtn">
                            ยกเลิก
                        </button>
                    </div>
                    <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
                        <strong className="me-3 text-md-end my-auto">Keywords</strong>
                    </div>
                    <div className="col-md-4 px-5 px-md-0">
                        <TagsInput tags={keywordName} setTags={setKeywordName} />
                    </div>
                </div>
                <Divider />
                {renderTextInput()}
                <Divider />
                {renderImageInput()}
                <Divider />
                <div className="row g-3 justify-content-center">
                    <div className="col-6 replyButtonContainer">
                        <button onClick={handleAddText} className="replyCustomBtn">
                            <AddIcon />
                            <span>เพิ่มข้อความ</span>
                        </button>
                    </div>
                    <div className="col-6 text-center replyButtonContainer">
                        <button onClick={handleAddImage} className="replyCustomBtn">
                            <AddIcon />
                            <span>เพิ่มรูปภาพ</span>
                        </button>
                    </div>
                </div>
            </KeywordStyle>
        </UserLayout>
    );
};

export default CreateReplyKeyword;
