import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import Sidebar from '../../../components/Sidebar';
import axios from '../../api/axios';
import useUser from '../../../Hooks/useUser';

import UserLayout from '../../../components/layouts/userLayout/userLayout';
import ManageStyle from './style';
import Link from 'next/link';

const Index = () => {
    const { user, setUserData } = useUser();
    const [checkAll, setCheckAll] = useState(false);
    const [checkList, setCheckList] = useState(user?.pages?.map((item) => item.page_id));
    const [data, setData] = useState([]);

    const onCheckAll = async () => {
        setCheckList(!checkAll ? data?.map((item) => item.page_id) : []);
        setCheckAll(!checkAll);
        await setUserData({
            ...user,
            selectedPage: !checkAll ? [...data] : [],
        });
    };

    const onCheck = async (e) => {
        const id = e.target.name;
        // console.log(id)
        if (checkList.indexOf(id) === -1) {
            await setCheckList([...checkList, id]);
            const item = data?.filter((item) => item.page_id === id);
            // console.log(item);
            user.selectedPage.push(item[0]);
        } else {
            await setCheckList((prev) => prev.filter((v) => v !== id));
            const temp = user.selectedPage.filter((item) => item.page_id !== id);
            setUserData({ ...user, selectedPage: temp });
        }
    };

    const getPageList = async () => {
        // console.log(user);
        try {
            const res = await axios.get(`/public/facebook-pages/${user.userId}/facebook-user`, {
                headers: { Authorization: 'Bearer ' + user?.accessToken },
            });
            const res2 = await axios.get(`/public/orders/${user.user.order.id}`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            setData(res.data.data.results);
            setUserData({ ...user, order: res2.data.data, pages: res.data.data.results });
            setCheckList(res?.data?.data?.results?.map((item) => item.page_id));
        } catch (error) {
            console.log(error);
        }
    };
    const renderData = () => {
        return data.map((item, index) => {
            return (
                item?.status === 'active' && (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                            <input type="checkbox" name={item.page_id} onClick={(e) => onCheck(e)} defaultChecked={checkList?.includes(item?.page_id)} />
                        </td>
                    </tr>
                )
            );
        });
    };

    useEffect(() => {
        user.userId && getPageList();
    }, [user.userId]);
    return (
        <UserLayout>
            <ManageStyle>
                <div className="page-header">
                    <div className="row">
                        <div className="mx-auto col-md-12">
                            <h2 className="page-title">กรุณาเลือกเพจ เพื่อทำการตั้งค่า Chatbot</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto my-3 d-flex">
                        {data?.length === 0 ? null : (
                            <span style={{ cursor: 'pointer' }} onClick={() => onCheckAll()} className="text-info  ms-auto">
                                เลือกทั้งหมด
                            </span>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-8 mx-auto d-flex">
                        {data?.length === 0 ? (
                            <div className="mx-auto">
                                <span>
                                    ไม่มีข้อมูลกรุณา{' '}
                                    <Link href="/user/info/pagemanagement">
                                        <span className="text-info" style={{ cursor: 'pointer' }}>
                                            เพิ่มเพจ
                                        </span>
                                    </Link>
                                </span>
                            </div>
                        ) : (
                            <Table bordered hover style={{ minWidth: '60%' }}>
                                <tbody>{renderData()}</tbody>
                            </Table>
                        )}
                    </div>
                </div>
            </ManageStyle>
        </UserLayout>
    );
};

export default Index;
