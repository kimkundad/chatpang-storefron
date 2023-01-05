import React, { useEffect, useState } from 'react';
import { Divider, InputNumber, Select } from 'antd';
import { Table, Form, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';

import ErrorIcon from '@mui/icons-material/Error';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import PageDropdown from '../../../../components/PageDropdown';
import axios from '../../../api/axios';
import useUser from '../../../../Hooks/useUser';

import UserLayout from '../../../../components/layouts/userLayout/userLayout';
import LineNotiStyle from './style';

const Linenoti = () => {
    const { user, setUserData } = useUser();
    const router = useRouter();
    const [pageID, setPageID] = useState(user?.selectedPage || user?.pages[0]?.page_id);
    const [lineName, setLineName] = useState('');
    const [lineAccessToken, setLineAccessToken] = useState('');
    const [lineTimer, setLineTimer] = useState(0);
    // console.log(user?.pages);
    // console.log(pageID);
    const { Option } = Select;
    const [timeUnit, setTimeUnit] = useState('m');
    const [time, setTime] = useState();
    const [data, setData] = useState([]);

    //*check status
    const [isSuccess, setIsSuccess] = useState({
        show: false,
        isSuccess: false,
        text: '',
    });

    const onEdit = (id) => {
        router.push({ pathname: `${router.pathname}/edit/${id}`, query: { id: id, pageId: pageID } }, `${router.pathname}/edit/${id}`);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const newData = {
            facebookUser: user?.user?.id,
            token: lineAccessToken,
            name: lineName,
            duration: lineTimer,
            pages: [pageID],
            status: 'active',
        };
        // console.log(newData)
        try {
            const res = await axios.post(`/public/line-notifications`, newData, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            // console.log(res.data);
            setData([...data, res.data.data]);
            setIsSuccess({
                show: true,
                isSuccess: true,
                text: 'เพิ่มกลุ่มไลน์สำเร็จ',
            });
            onClearData();
        } catch (error) {
            console.log(error);
            setIsSuccess({
                show: true,
                isSuccess: false,
                text: error.response.data.message,
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
    const onChangeTimeUnit = (value) => {
        // console.log(value)
        setTimeUnit(value);
        setTime();
    };

    const onClearData = () => {
        setLineName('');
        setLineAccessToken('');
        setLineTimer(0);
    };

    const selectAfter = (
        <Select defaultValue={timeUnit} style={{ width: 100 }} onChange={onChangeTimeUnit}>
            {/* <Option value="s">วินาที</Option> */}
            <Option value="m">นาที</Option>
            <Option value="h">ชั่วโมง</Option>
        </Select>
    );

    function onChangeTime(value) {
        setTime(value);
        let mili = 0;
        switch (timeUnit) {
            case 's':
                mili = value / 60;
                break;
            case 'm':
                mili = value;
                break;
            case 'h':
                mili = value * 60;
                break;
            default:
                break;
        }
        // console.log(mili)
        setLineTimer(mili);
    }
    const onChangeStatus = async (index, item) => {
        // console.log(id)
        let temp = [...data];
        // temp[index].status = status ? 'inactive' : 'active'
        temp[index] = item.status === 'active' ? await setStatusInActive(item.id) : await setStatusActive(item.id);
        setData(temp);
    };

    const setStatusActive = async (id) => {
        try {
            const res = await axios.patch(
                `/public/line-notifications/${id}/active`,
                { id: id },
                {
                    headers: { Authorization: `Bearer ${user?.accessToken}` },
                }
            );
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    };

    const setStatusInActive = async (id) => {
        try {
            const res = await axios.patch(
                `/public/line-notifications/${id}/inactive`,
                { id: id },
                {
                    headers: { Authorization: `Bearer ${user?.accessToken}` },
                }
            );
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    };
    const onDelete = async (id) => {
        try {
            const res = await axios.delete(`/public/line-notifications/${id}`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            setData([...data.filter((item) => item.id !== id)]);
        } catch (error) {
            console.log(error);
        }
    };
    const renderTable = () => {
        return data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>
                        <span>{item?.status}</span>
                        <Form.Check type="switch" checked={item.status === 'active'} onClick={() => onChangeStatus(index, item)} />
                    </td>
                    <td className="text-start">{`${index + 1}. ${item?.name}`}</td>
                    <td>
                        {item?.pages?.length} <VisibilityIcon />
                    </td>
                    <td>
                        <ModeEditIcon className="lineEditButton" onClick={() => onEdit(item.id)} />
                        <DeleteIcon className="lineEditButton" onClick={() => onDelete(item.id)} />
                    </td>
                </tr>
            );
        });
    };

    //* select page by id
    const onSelect = (id) => {
        // console.log(id)
        setPageID(id);
        setUserData({...user,selectedPage:id})
    };

    //*get line list
    const getLineList = async () => {
        try {
            const res = await axios.get(`/public/line-notifications/${user?.user?.id}/facebook-user`, {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            // console.log(res.data);
            setData(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        user?.user?.id && getLineList();
    }, []);
    return (
        <UserLayout>
            <LineNotiStyle>
                {isSuccess.show && (
                    <Alert className="text-center" variant={isSuccess.isSuccess ? 'success' : 'danger'}>
                        <span>{isSuccess.text}</span>
                    </Alert>
                )}
                <div className="page-header">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <span className="text-uppercase userDropdown">
                                <PageDropdown onSelect={onSelect} />
                            </span>
                        </div>
                    </div>
                    <div className="row mx-auto position-relative g-3 mt-2">
                        {/* <div className="lineDetail col-12 mt-3"> */}
                        <div className="col-xs-12 d-flex flex-column line-header">
                            <strong className="text-uppercase">แจ้งเตือนผ่าน Line Notify</strong>
                            <span className="text-secondary">แจ้งเตือนข้อความที่ยังไม่มีคนอ่าน ผ่านทางไลน์กลุ่มรู้จำนวนข้อความที่ค้างไว้ ลูกค้าไม่ต้องรอนาน</span>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center">
                            <h4 className='me-3 text-md-end my-auto'>ชื่อกลุ่มไลน์</h4>
                        </div>
                        <div className="col-lg-4 w-md-70 lineTokenInput mx-auto  ms-md-auto">
                            <input autoFocus value={lineName} onChange={(e) => setLineName(e.target.value)} className="mt-2" type="text" name="lineName" id="token" />
                        </div>
                        <div className="col-md-12 w-auto d-flex mx-auto lineButtonContainer">
                            <button onClick={(e) => onSubmit(e)} className="lineCustomBtn">
                                บันทึก
                            </button>
                            <button onClick={() => onClearData()} className="lineCustomBtn">
                                ยกเลิก
                            </button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <Divider />
                <div className="row mx-auto">
                    <div className="col-lg-3 flex-column flex-md-row ms-md-auto lineTokenHeader">
                        <strong className="d-inline-block">ใส่ Line Token</strong>
                    </div>
                    <div className="col-lg-6 d-flex flex-xs-column lineTokenHeader">
                        <span className="text-secondary">
                            <ErrorIcon /> <i>คลิกเพื่อดูวิดีโอการขอ Token</i>{' '}
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 lineTokenInput  mx-md-auto flex-column flex-md-row">
                        <input value={lineAccessToken} onChange={(e) => setLineAccessToken(e.target.value)} className="mt-2" type="text" id="token" />
                    </div>
                </div>
                <Divider />
                <div className="row">
                    <div className="col-md-6 col-xs-12 mx-md-auto">
                        <div className="lineTimingHeader">
                            <strong>แจ้งเข้าไลน์กลุ่ม เมื่อยังไม่มีใครตอบลูกค้านานเกิน...</strong>
                        </div>
                        <div className="lineTimingInput">
                            <InputNumber controls={true} value={time} min={1} max={timeUnit === 'h' ? 24 : 60} addonAfter={selectAfter} onChange={onChangeTime} />
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="row">
                    <div className="col-md-8 mx-md-auto mt-3">
                        {data?.length !== 0 ? <Table bordered>
                            <thead>
                                <tr style={{ fontSize: '1rem' }}>
                                    <th>สถานะ</th>
                                    <th>ชื่อกลุ่มไลน์</th>
                                    <th>จำนวนเพจที่แจ้งเตือน</th>
                                    <th>จัดการ</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '1rem' }}>{renderTable()}</tbody>
                        </Table>: <div className='text-center'>ไม่มีข้อมูล LINE NOTIFY</div>}
                    </div>
                </div>
            </LineNotiStyle>
        </UserLayout>
    );
};

export default Linenoti;
