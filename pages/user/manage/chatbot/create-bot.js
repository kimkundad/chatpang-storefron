import React, { useState } from 'react';

import { useRouter } from 'next/router';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { Divider, Switch } from 'antd';
import useUser from '../../../../Hooks/useUser';
import axios from '../../../api/axios';
import PageDropdown from '../../../../components/PageDropdown';
import { Alert } from 'react-bootstrap';
import TagsInput from '../../../../components/tagsinput/TagsInput';
import UserLayout from '../../../../components/layouts/userLayout/userLayout';
import ChatBotStyle from './style';

const Createbot = () => {
    const router = useRouter();
    const { user } = useUser();

    const [pageID, setPageID] = useState(router.query.pageId);

    const [campaignName, setCampaignName] = useState('');
    const [txtInboxComment, setTxtInboxComment] = useState('');

    const [isInboxComment, setIsInboxComment] = useState(false);
    const [txtComment, setTxtComment] = useState('');

    const [isComment, setIsComment] = useState(false);
    const [isLikeComment, setIsLikeComment] = useState(false);
    const [isDuplicateComment, setIsDuplicateComment] = useState(false);
    const [isHideComment, setIsHideComment] = useState(false);
    const [words, setWords] = useState([]);
    const [tags, setTags] = useState([]);
    const [hiddenWords, setHiddenWords] = useState([]);
    //*check status
    const [isSuccess, setIsSuccess] = useState({
        show: false,
        isSuccess: false,
        text: '',
    });
    const onSubmit = async (e) => {
        e.preventDefault();
        // const pathInbox = await getImagePath(fileInboxComment)
        // const pathComment = await getImagePath(fileComment)
        const data = {
            messages: {
                active: isInboxComment,
                values: [txtInboxComment],
            },
            comments: {
                active: isComment,
                values: [txtComment],
            },
            keywords: words,
            hashtags: tags,
            hiddens: hiddenWords,
            name: campaignName,
            likeComment: isLikeComment,
            replySamePerson: isDuplicateComment,
            hideComment: isHideComment,
            facebookUser: user?.user?.id,
            page:pageID,
        };
        try {
            const res = await axios.post('/campaigns', data, { headers: { Authorization: `Bearer ${user?.accessToken}` } });
            // console.log(res.data)
            setIsSuccess({
                show: true,
                isSuccess: true,
                text: 'สร้างแคมเปญสำเร็จ',
            });
           await handleNotify();
            setCampaignName('');
            setTxtInboxComment('');
            // setFileInboxComment('')
            setIsInboxComment(false);
            setTxtComment('');
            // setFileComment('')
            setIsComment(false);
            setIsLikeComment(false);
            setIsDuplicateComment(false);
            setIsHideComment(false);
            setWords([]);
            setTags([]);
            setHiddenWords([]);
            setTimeout(() => {
                router.back();
            }, 1700);
            // setImg1('')
            // setImg2('')
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
    const handleNotify = async () => {
        setTimeout(() => {
            setIsSuccess({
                show: false,
                isSuccess: false,
                text: '',
            });
           
        }, 1500);
    };
    // const setImageInbox = (e) => {
    //   setFileInboxComment(e.target.files[0])
    //   setImg1(URL.createObjectURL(e.target.files[0]))
    // }
    // const setImageComment = (e) => {
    //   setFileComment(e.target.files[0])
    //   setImg2(URL.createObjectURL(e.target.files[0]))
    // }

    // const getImagePath = async (file) => {
    //   const formData = new FormData()
    //   formData.append('image', file, file.name)
    //   try {
    //     const res = await axios.post('/configs/upload', formData)
    //     // console.log(res.data)
    //     return res.data.data
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    const onClear = () => {
        setCampaignName('');
            setTxtInboxComment('');
            // setFileInboxComment('')
            setIsInboxComment(false);
            setTxtComment('');
            // setFileComment('')
            setIsComment(false);
            setIsLikeComment(false);
            setIsDuplicateComment(false);
            setIsHideComment(false);
            setWords([]);
            setTags([]);
            setHiddenWords([]);
    }
    const onSelect = (id) => {
        // console.log(id);
        setPageID(id);
    };
    return (
        <UserLayout>
            <ChatBotStyle>
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
                                {/* <Avatar className="me-2" icon={<FontAwesomeIcon icon={faUser} />} />
                  Board pang */}
                                <PageDropdown defaultValue={pageID} onSelect={onSelect} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="row g-3">
                    {/* <div className='mx-auto chatNameInput'> */}
                    <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
                        <h4 className="me-3 text-md-end my-auto">ชื่อแคมเปญ</h4>
                    </div>
                    <div className="col-md-4 mx-auto chatNameInput">
                        <input type="text" name="name" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} autoFocus={true} />
                    </div>
                    <div className="col-md-4 text-center chatButtonContainer">
                        <button onClick={(e) => onSubmit(e)} className="chatCustomBtn">
                            บันทึก
                        </button>
                        {/* <button onClick={()=> onClear()} className="chatCustomBtn">ยกเลิก</button> */}
                    </div>
                    {/* </div> */}
                </div>
                <Divider />
                <div className="row g-3">
                    {/* <div className='col-md-8 mx-auto chatComment'> */}
                    <div className="col-lg-3 commentHeader">
                        <h5 className="ms-md-3 me-2">ข้อความตอบ<br />เข้าอินบ็อกซ์</h5>
                        <Switch style={{ width: 'fit-content' }} size="small" value={isInboxComment} onChange={(e) => setIsInboxComment(!isInboxComment)} />
                    </div>
                    <div className="col-lg-9 commentInput">
                        {/* <TextArea
                            showCount
                            value={txtInboxComment}
                            onChange={(e) => setTxtInboxComment(e.target.value)}
                            maxLength={200}
                            placeholder="พิมพ์ข้อความที่นี้..."
                            autoSize={{ minRows: 4, maxRows: 6 }}
                        /> */}
                        <textarea
                            value={txtInboxComment}
                            onChange={(e) => setTxtInboxComment(e.target.value)}
                            maxLength={200}
                            placeholder="พิมพ์ข้อความที่นี้..."
                            rows={4}
                            cols={6}
                        />
                        <div className="text-secondary text-end">{txtInboxComment?.length}/200</div>
                    </div>
                    {/* {img1 ? (
              <div className="col-md-2 uploadComment">
                <img className="imgUpload" src={img1} alt="img" />
                <div className="imgUploadOptions">
                  <div onClick={() => setImg1('')} className="optionsIcon">
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                  </div>
              </div>
            ) : (
              <div className="col-md-2 uploadComment">
                <input
                  ref={hiddenfileInbox}
                  type="file"
                  name="fileInbox"
                  className="inputfile"
                  accept="image/*"
                  onChange={(e) => setImageInbox(e)}
                />
                <label onClick={() => hiddenfileInbox.current.click()} htmlFor="file">
                  UPLOAD
                </label>
              </div>
            )} */}
                </div>
                <Divider />
                <div className="row text-center g-3">
                    {/* <div className='col-md-8 mx-auto chatComment'> */}
                    <div className="col-lg-3 commentHeader">
                        <h5 className="ms-md-3 me-2">คอมเม้นต์ใต้โพสต์</h5>
                        <Switch style={{ width: 'fit-content' }} size="small" value={isComment} onChange={() => setIsComment(!isComment)} />
                    </div>
                    <div className="col-lg-9 commentInput">
                        {/* <TextArea
                            showCount
                            value={txtComment}
                            onChange={(e) => setTxtComment(e.target.value)}
                            maxLength={200}
                            placeholder="พิมพ์ข้อความที่นี้..."
                            autoSize={{ minRows: 4, maxRows: 6 }}
                        /> */}
                        <textarea value={txtComment} onChange={(e) => setTxtComment(e.target.value)} maxLength={200} placeholder="พิมพ์ข้อความที่นี้..." rows={4} cols={6} />
                        <div className="text-secondary text-end">{txtComment?.length}/200</div>
                        <div className="toggleCommentOptions">
                            <div>
                                <Switch size="small" value={isLikeComment} onChange={() => setIsLikeComment(!isLikeComment)} />
                                <h5 className="ms-3 my-auto">ถูกใจคอมเม้นต์</h5>
                            </div>
                            <div>
                                <Switch size="small" value={isDuplicateComment} onChange={() => setIsDuplicateComment(!isDuplicateComment)} />
                                <h5 className="ms-3 my-auto">ตอบซ้ำคนเดิม</h5>
                            </div>
                            <div>
                                <Switch size="small" value={isHideComment} onChange={() => setIsHideComment(!isHideComment)} />
                                <h5 className="ms-3 my-auto">ซ่อนคอมเม้นต์</h5>
                            </div>
                        </div>
                    </div>
                    {/* {img2 ? (
              <div className="col-md-2 uploadComment">
                <img className="imgUpload" src={img2} alt="img" />
                <div className="imgUploadOptions">
                  <div onClick={() => setImg2('')} className="optionsIcon">
                    <FontAwesomeIcon icon={faTrash} />
                  </div></div>
              </div>
            ) : (
              <div className="col-md-2 uploadComment">
                <input
                  ref={hiddenfileComment}
                  type="file"
                  name="fileInbox"
                  className="inputfile"
                  accept="image/*"
                  onChange={(e) => setImageComment(e)}
                />
                <label onClick={() => hiddenfileComment.current.click()} htmlFor="file">
                  UPLOAD
                </label>
              </div>
            )} */}
                </div>
                <Divider />
                <div className="row justify-content-center">
                    <div className="col-md-6 mx-auto chatWording text-start text-md-end">
                        <div className="d-flex flex-column flex-md-row my-3">
                            <h4 className="me-3 my-auto">ตอบเฉพาะคำเหล่านี้</h4>
                            <div className="chatWordInput">
                                <TagsInput tags={words} setTags={setWords} />
                                {/* <input value={words} onChange={(e) => setWords(e.target.value)} name="tags" /> */}
                            </div>
                        </div>
                        <div className="d-flex my-3 flex-column flex-md-row">
                            <h4 className="me-3 my-auto">ตอบเฉพาะแฮทแท็กนี้</h4>
                            <div className="chatWordInput">
                                <TagsInput tags={tags} setTags={setTags} />

                                {/* <input value={tags} onChange={(e) => setTags(e.target.value)} name="specificWord" /> */}
                            </div>
                        </div>
                        <div className="d-flex my-3 flex-column flex-md-row">
                            <h4 className="me-3 my-auto">ซ่อนคำเหล่านี้</h4>
                            <div className="chatWordInput">
                                <TagsInput tags={hiddenWords} setTags={setHiddenWords} />

                                {/* <input value={hiddenWords} onChange={(e) => setHiddenWords(e.target.value)} name="tags" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </ChatBotStyle>
        </UserLayout>
    );
};

export default Createbot;
