import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import axios from '../../../api/axios';
import useUser from '../../../../Hooks/useUser';
import { Table, Form, ToastContainer } from 'react-bootstrap';

import DeleteIcon from '@mui/icons-material/Delete';
import CusToasts from '../../../../components/CusToasts';

import InfoStyle from './style';
import UserLayout from '../../../../components/layouts/userLayout/userLayout';

const Pagemanagement = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [isAddAble, setIsAddAble] = useState(true);
    const { user, setUserData } = useUser();
    const [quotaInfo, setQuotaInfo] = useState({});

    const [show, setShow] = useState(false);
    const [toastData, setToastData] = useState({ type: 'Light', text: '' });
    const toggleShow = () => setShow(!show);

    // const facebookUserId = router.query.fb
    // console.log(user.user.id)
    const getQuotaInfo = async () => {
        try {
            const res = await axios.get(`/public/purchases/${user?.user?.id}/quota`, {
                headers: { Authorization: 'Bearer ' + user?.accessToken },
            });
            // console.log(res.data);
            // const arr = res.data.pages.map((item) => item.item)
            // setData(arr)
            setQuotaInfo(res.data.data);
            // console.log(arr);
        } catch (error) {
            console.log(error);
        }
    };

    //* check able to add more than 1 page
    const checkAddPage = () => {
        setIsAddAble(1 < user?.user?.pages);
        // return user?.user.status === 'inactive'
    };

    const onDeletePage = async (id) => {
        try {
            const res = await axios.delete(`/public/facebook-pages/${id}`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            setToastData({ type: 'Light', text: 'ลบเรียบร้อย' });
            toggleShow();
            // console.log(res)
            getPurchaseData();
        } catch (error) {
            console.log(error);
            setToastData({ type: 'Danger', text: 'ลบไม่สำเร็จ' });
            toggleShow();
        }
    };

    const onAddPage = () => {
        console.log('add pages');
        router.replace('https://app.chatpang.co/facebook/pages');
    };

    const getPurchaseData = async () => {
        try {
            const res3 = await axios.get(`/public/purchases/${user.user.id}/facebook-user`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            const res = await axios.get(`/public/orders/${user.user.id}/facebook-user`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            const res1 = await axios.get(`/public/order-histories/${user.user.id}/facebook-user`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            const res2 = await axios.get(`/public/orders/${user.user.order.id}`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            const res4 = await axios.get(`/public/facebook-pages/${user.userId}/facebook-user`, {
                headers: { Authorization: 'Bearer ' + user?.accessToken },
            });
            // console.log(res4.data)
            await setUserData({
                ...user,
                order: res2.data.data,
                orders: res.data.data.results,
                purchases: res3.data.data,
                orderHistory: res1.data.data.results,
                pages: res4.data.data.results,
                pagesActive: res4.data.data.results?.filter((item) => item?.status === 'active'),
            });
            setData(res4.data.data.results);
            checkAddPage();
        } catch (error) {
            console.log(error);
        }
    };
    const renderTable = () => {
        // if (user?.user?.pages === user?.user?.order?.package?.page_limit) {
        //     return data.map((item, index) => {
        //         return (
        //             item?.status === 'active' && (
        //                 <tr key={index}>
        //                     <td className="text-center">
        //                         <span>{item?.status}</span>
        //                         <Form.Check
        //                             type="switch"
        //                             checked={item?.status === 'active'}
        //                             // label={item.status}
        //                             onChange={() => onChangeStatus(index, item)}
        //                         />
        //                     </td>
        //                     <td>{item?.name}</td>
        //                     {/* <td>{item?.name}</td> */}
        //                     <td>
        //                         <div>
        //                             {/* <span onClick={() => onDeletePage(item.id)} className="userEditButton"> */}
        //                             <DeleteIcon onClick={() => onDeletePage(item.id)} style={{ cursor: 'pointer' }} className="text-danger" />
        //                             {/* </span> */}
        //                         </div>
        //                     </td>
        //                 </tr>
        //             )
        //         );
        //     });
        // } else {
            return data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td className="text-center">
                            <span>{item?.status}</span>
                            <Form.Check
                                type="switch"
                                checked={item?.status === 'active'}
                                // label={item.status}
                                onChange={() => onChangeStatus(index, item)}
                            />
                        </td>
                        <td>{item?.name}</td>
                        {/* <td>{item?.name}</td> */}
                        <td>
                            <div>
                                {/* <span onClick={() => onDeletePage(item.id)} className="userEditButton"> */}
                                <DeleteIcon onClick={() => onDeletePage(item.id)} style={{ cursor: 'pointer' }} className="text-danger" />
                                {/* </span> */}
                            </div>
                        </td>
                    </tr>
                );
            });
        // }
    };

    const onChangeStatus = async (index, item) => {
        // console.log(id)
        let temp = [...data];
        // temp[index].status = status ? 'inactive' : 'active'
        temp[index] = item?.status === 'active' ? await setStatusInActive(item.id, item) : await setStatusActive(item.id, item);
        setData(temp);
        //set active to dropdown 
        let tempActive = await temp.filter((item) => item?.status === 'active')
        await setUserData({
            ...user,
            pagesActive: tempActive,
            selectedPage:tempActive[0]?.id
        });
    };

    const setStatusActive = async (id, item) => {
        try {
            const res = await axios.patch(
                `/public/facebook-pages/${id}/active`,
                { id: id },
                {
                    headers: { Authorization: `Bearer ${user?.accessToken}` },
                }
            );
            setToastData({ type: 'Light', text: 'อัพเดตสถานะเป็น active' });
            toggleShow();
            return res.data.data;
        } catch (error) {
            console.log(error);
            if (error.response.data.message === 'Pages amount is exceeded') {
                setToastData({ type: 'Danger', text: 'จำนวนเพจที่ active เต็มเเล้ว ไม่สามารถ active เพิ่มได้' });
            } else {
                setToastData({ type: 'Danger', text: 'ไม่สามารถอัพเดตสถานะได้' });
            }
            toggleShow();
            return item;
        }
    };

    const setStatusInActive = async (id, item) => {
        try {
            const res = await axios.patch(
                `/public/facebook-pages/${id}/inactive`,
                { id: id },
                {
                    headers: { Authorization: `Bearer ${user?.accessToken}` },
                }
            );
            setToastData({ type: 'Light', text: 'อัพเดตสถานะเป็น Inactive' });
            toggleShow();
            return res.data.data;
        } catch (error) {
            console.log(error);
            if (error.response.data.message === 'Pages amount is exceeded') {
                setToastData({ type: 'Danger', text: 'จำนวนเพจที่ active เต็มเเล้ว ไม่สามารถ active เพิ่มได้' });
            } else {
                setToastData({ type: 'Danger', text: 'ไม่สามารถอัพเดตสถานะได้' });
            }
            toggleShow();
            return item;
        }
    };

    const genQuantiy = (data) => {
        if (data > 999999) {
            return data / 1000000 + 'M';
        } else if (data > 999) {
            return data / 1000 + 'K';
        } else {
            return data;
        }
    };

    useEffect(() => {
        let isCancel = false;
        if (!isCancel) {
            user.user.id && getQuotaInfo();
            user.user.id && getPurchaseData();
        }
        return () => {
            isCancel = true;
        };
    }, [user.user.id]);
    return (
        <UserLayout>
            <InfoStyle>
                {/* <div className="content"> */}
                <div className="row">
                    <div className="col-12">
                        <ToastContainer position="top-end" className="toast-container">
                            <CusToasts show={show} toggleShow={toggleShow} type={toastData.type} text={toastData.text} />
                        </ToastContainer>
                        <div className="numberComment d-flex flex-column justify-content-center align-items-center">
                            {quotaInfo ? (
                                <>
                                    <strong>
                                        {genQuantiy(quotaInfo.total_current_reply)} / {genQuantiy(quotaInfo.total_quota_limit)}
                                    </strong>
                                    <span>จำนวนการทำงานของ BOT</span>
                                </>
                            ) : (
                                <span>ไม่มีข้อมูล</span>
                            )}
                        </div>
                    </div>
                    <div className="col-12">
                        {/* {user?.user?.pages !== 0 ? ( */}
                        <Button
                            style={{ fontSize: '1rem', height: 'fit-content', width: '190px' }}
                            className="my-4 d-flex justify-content-center align-items-center"
                            type="primary"
                            icon={<SettingOutlined />}
                            onClick={() => onAddPage()}
                            // disabled={isAddAble}
                        >
                            เพิ่มเพจ
                        </Button>
                        {/* ) : (
              <Button
                style={{ fontSize: '1.5rem', height: 'fit-content', width: 'auto' }}
                className="my-4 d-flex justify-content-center align-items-center"
                type="primary"
                icon={<SettingOutlined />}
                onClick={() => getAuthPages()}
              >
                ขออนุญาตเข้าถึงเพจจาก Facebook
              </Button>
            )} */}
                    </div>
                    {/* <span>คุณได้เลือก {user?.user?.pages} / {user?.user?.order?.package?.page_limit} เพจ</span> */}
                    <span className="text-secondary fs-5">กดเลือกเพจทำการตั้งค่าการตอบคอมเม้นต์ และดึงคอมเม้นต์เข้า inbox</span>
                </div>
                <div className="row">
                    <div className="table-responsive">
                        {/* <Table dataSource={data} columns={column} bordered /> */}
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th className="text-center">สถานะ</th>
                                    <th>เพจของคุณ ({data?.length})</th>
                                    {/* <th>คอมเม้นต์</th> */}
                                    <th>จัดการ</th>
                                </tr>
                            </thead>
                            <tbody>{renderTable()}</tbody>
                        </Table>
                    </div>
                </div>
                {/* </div> */}
            </InfoStyle>
        </UserLayout>
    );
};

export default Pagemanagement;
