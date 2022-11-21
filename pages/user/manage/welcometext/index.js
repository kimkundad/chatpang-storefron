import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { Add, Delete, ContentCopy } from '@mui/icons-material';
import { Table } from 'react-bootstrap';
import PageDropdown from '../../../../components/PageDropdown';
import useUser from '../../../../Hooks/useUser';
import axios from '../../../api/axios';
import UserLayout from '../../../../components/layouts/userLayout/userLayout';
import GreetingStyle from './style';

const Welcometext = () => {
    const router = useRouter();
    const { user } = useUser();
    const [pageID, setPageID] = useState(user?.pages[0]?.id);

    const [itemList, setItemList] = useState([]);
    const [data, setData] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);

    const onEdit = (id, page_id) => {
        router.push({ pathname: `${router.pathname}/edit/${id}`, query: { id: id, pageID: page_id } }, `${router.pathname}/edit/${id}`);
    };

    const onChecked = async (e) => {
        setIsCheckAll(false);
        const newId = e.target.name;
        if (itemList.indexOf(newId) === -1) {
            setItemList([...itemList, newId]);
        } else {
            setItemList((prev) => prev.filter((value) => value !== newId));
        }
    };
    //* check user status
    const checkFreeTrial = () => {
        return user?.user?.status === 'inactive';
    };
    const onCopy = async () => {
        try {
            for (const id of itemList) {
                let temp = data.filter((item) => item.id === id);
                const copyData = {
                    page: temp[0].page,
                    name: '(copy) ' + temp[0].name,
                    messages: temp[0].messages,
                    facebookUser: user?.user?.id,
                };
                // console.log(copyData)
                const res = await axios.post('/greeting-messages', copyData, {
                    headers: { Authorization: `Bearer ${user?.accessToken}` },
                });
                // console.log(res.data)
                setData([...data, res.data.data]);
            }
            setItemList([]);
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = async () => {
        try {
            for (const id of itemList) {
                const res = await axios.delete(`/greeting-messages/${id}`, {
                    headers: { Authorization: `Bearer ${user?.accessToken}` },
                });
                // console.log(res.data)
                setData((prev) => prev.filter((item) => item.id !== id));
            }
            setItemList([]);
        } catch (error) {
            console.log(error);
        }
    };

    const onCheckAll = () => {
        const Ids = data.map((item) => item.id);
        if (itemList.length !== 0) {
            setItemList([]);
            setIsCheckAll(false);
        } else {
            setItemList(Ids);
            setIsCheckAll(true);
        }
    };
    const onSelect = (id) => {
        // console.log(id)
        setPageID(id);
    };
    const campaignsList = useMemo (()=>{
        return data.filter((campaign) => campaign.page === pageID)
    },[pageID, data])

    const renderTable = () => {
        return campaignsList.map((item, index) => {
            return (
                <tr key={index}>
                    <td className='text-center'>
                        <input className='checkbox-customer' type="checkbox" name={item?.id} checked={itemList.includes(item?.id)} onChange={(e) => onChecked(e)} />
                    </td>
                    <td>{item.name}</td>
                    <td>
                        <div>
                            <div onClick={() => onEdit(item.id, item.page)} className="userEditButton">
                                แก้ไข
                            </div>
                        </div>
                    </td>
                </tr>
                // )
            );
        });
    };
    const getReceptionList = async () => {
        try {
            const res = await axios.get(`/greeting-messages/${user?.user?.id}/facebook-user`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            // console.log(res.data)
            setData(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        user?.user?.id && getReceptionList();
    }, []);
    return (
        <UserLayout>
            <GreetingStyle>
                <div className="page-header">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <span className="text-uppercase userDropdown">
                                <PageDropdown onSelect={onSelect} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* content */}

                <div className="row">
                    <div className="col d-flex justify-content-center my-2">
                        <div
                            style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }}
                            onClick={() => router.push({ pathname: `${router.pathname}/create-welcome`, query: { pageId: pageID } })}
                            className="userButton">
                            <Add className="me-2" />
                            สร้างแคมเปญ
                        </div>
                        <div style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }} onClick={onCopy} className="userButton">
                            <ContentCopy className="me-2" />
                            สร้างซ้ำ
                        </div>
                        <div style={{ pointerEvents: `${checkFreeTrial() ? 'none' : 'auto'}` }} onClick={onDelete} className="userButton">
                            <Delete className="me-2" />
                            ลบ
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mx-auto d-flex mt-3">
                        {data?.length === 0 ? (
                            <p className="mx-auto noData">ไม่มีข้อมูล กรุณาสร้าง แคมเปญ</p>
                        ) : (
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th className='text-center'>
                                            <input className='checkbox-customer' onChange={onCheckAll} type="checkbox" name="checkAll" checked={isCheckAll} />
                                        </th>
                                        <th>แคมเปญ</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>{renderTable()}</tbody>
                            </Table>
                        )}
                    </div>
                </div>
            </GreetingStyle>
        </UserLayout>
    );
};

export default Welcometext;
