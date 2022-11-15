import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Add, Delete, ContentCopy } from '@mui/icons-material'
import { Table, Form } from 'react-bootstrap';
import axios from '../../../api/axios';
import useUser from '../../../../Hooks/useUser';
import PageDropdown from '../../../../components/PageDropdown';

import UserLayout from '../../../../components/layouts/userLayout/userLayout';
import ChatBotStyle from './style';

const Chatbot = () => {
    const router = useRouter();
    const { user } = useUser();
    const [pageID, setPageID] = useState(user?.pages[0]?.id);

    const [selectedItem, setSelectedItem] = useState();
    const [itemList, setItemList] = useState([]);
    const [data, setData] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);

    const onEdit = (id, page_id) => {
        router.push({ pathname: `${router.pathname}/edit/${id}`, query: { id: id, pageId: page_id } }, `${router.pathname}/edit/${id}`);
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
    // const checkFreeTrial = () => {
    //   return user?.user?.status === 'inactive'
    // }

    const onCopy = async () => {
        try {
            for (const id of itemList) {
                let temp = data.filter((item) => item.id === id);
                const copyData = {
                    messages: {
                        active: temp[0].messages.active,
                        values: temp[0].messages.values,
                    },
                    comments: {
                        active: temp[0].comments.active,
                        values: temp[0].comments.values,
                    },
                    keywords: temp[0].keywords,
                    hashtags: temp[0].hashtags,
                    hiddens: temp[0].hiddens,
                    name: '(copy) ' + temp[0].name,
                    likeComment: temp[0].like_comment,
                    replySamePerson: temp[0].reply_same_person,
                    hideComment: temp[0].hide_comment,
                    facebookUser: temp[0].facebook_user,
                    page: temp[0].page,
                };
                // setData([...data, copyData])
                setCopyData(copyData);
            }
            setItemList([]);
        } catch (error) {
            console.log(error);
        }
    };

    const setCopyData = async (copyData) => {
        try {
            const res = await axios.post('/campaigns', copyData, { headers: { Authorization: `Bearer ${user?.accessToken}` } });
            setData([...data, res.data.data]);
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = async () => {
        try {
            for (const id of itemList) {
                const res = await axios.delete(`/campaigns/${id}`, {
                    headers: {
                        Authorization: `Bearer ${user?.accessToken}`,
                    },
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
        const Ids = data.map((item) => item.item._id);
        if (itemList.length !== 0) {
            setItemList([]);
            setIsCheckAll(false);
        } else {
            setItemList(Ids);
            setIsCheckAll(true);
        }
    };
    //* select page by id
    const onSelect = (id) => {
        // console.log(id)
        setPageID(id);
    };

    const onChangeStatus = async (index, item) => {
        // console.log(id)
        let temp = [...data];
        // console.log(item);
        temp[index] = item.status === 'active' ? await setStatusInActive(item.id) : await setStatusActive(item.id);
        setData(temp);
    };

    const setStatusActive = async (id) => {
        // console.log(id);
        try {
            const res = await axios.patch(
                `/campaigns/${id}/active`,
                { id: id },
                {
                    headers: { Authorization: 'Bearer ' + user?.accessToken },
                }
            );
            // console.log(res.data);
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    };

    const setStatusInActive = async (id) => {
        // console.log(id);
        try {
            const res = await axios.patch(
                `/campaigns/${id}/inactive`,
                { id: id },
                {
                    headers: { Authorization: 'Bearer ' + user?.accessToken },
                }
            );
            // console.log(res.data);
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    };
    const renderTable = () => {
        return data.map((item, index) => {
            return (
                <tr key={index}>
                    <td className='text-center' >
                        <input className='checkbox-customer' type="checkbox" name={item?.id} checked={itemList.includes(item?.id)} onClick={(e) => onChecked(e)} />
                    </td>
                    <td>
                        <span>{item?.status}</span>
                        <Form.Check
                            type="switch"
                            checked={item?.status === 'active'}
                            // label={item.status}
                            onClick={() => onChangeStatus(index, item)}
                        />
                    </td>
                    <td>{item?.name}</td>
                    <td>
                        <div>
                            <div onClick={() => onEdit(item?.id, item?.page)} className="userEditButton">
                                แก้ไข
                            </div>
                        </div>
                    </td>
                </tr>
            );
        });
    };

    const getChatbotList = async () => {
        //id from pageId
        try {
            const res = await axios.get(`/campaigns/${user.user.id}/facebook-user`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            // console.log(res.data)
            setData(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        user.user.id && getChatbotList();
    }, []);
    return (
        <UserLayout>
            <ChatBotStyle>
                <div className="page-header">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <span className="text-uppercase userDropdown">
                                {/* <Avatar className="me-2" icon={<FontAwesomeIcon icon={faUser} />} />
                  Board pang */}
                                <PageDropdown onSelect={onSelect} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* content */}

                <div className="row">
                    <div className="col d-flex justify-content-center my-2">
                        <div onClick={() => router.push({ pathname: `${router.pathname}/create-bot`, query: { pageId: pageID } })} className="userButton">
                            <Add className="me-2" />
                            สร้างแคมเปญ
                        </div>
                        <div onClick={onCopy} className="userButton">
                            <ContentCopy className="me-2" />
                            สร้างซ้ำ
                        </div>
                        <div onClick={onDelete} className="userButton">
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
                                        <th className='text-center' >
                                            <input className='checkbox-customer' onChange={onCheckAll} type="checkbox" name="checkAll" checked={isCheckAll} />
                                        </th>
                                        <th>สถานะ</th>
                                        <th>แคมเปญ</th>
                                        <th>จัดการ</th>
                                    </tr>
                                </thead>
                                <tbody>{renderTable()}</tbody>
                            </Table>
                        )}
                    </div>
                </div>
            </ChatBotStyle>
        </UserLayout>
    );
};

export default Chatbot;
