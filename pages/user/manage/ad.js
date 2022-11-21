import React from 'react';
import UserLayout from '../../../components/layouts/userLayout/userLayout';
import ManageStyle from './style';

const ad = () => {
    return (
        <UserLayout>
            <ManageStyle>
                <div className="ad-container">
                    {/* <div className="row"> */}
                        <div className="text-center">
                            <h3 className="page-title">ระบบบรอดแคสต์เพิ่มยอดขาย <br />ทั้งเพจ Facebook และ Line OA</h3>
                        </div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                        <div className="col-md-8 col-xs-12 mx-auto vdo-container">
                            <iframe
                                width="90%"
                                height="70%"
                                className="video-yt"
                                src="https://www.youtube.com/embed/1F9_V0ub2H8"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                        <div className="text-center">
                            <h3 className="page-title">สอบถามได้ที่ LINE : @broadpang</h3>
                        </div>
                    {/* </div> */}
                </div>
            </ManageStyle>
        </UserLayout>
    );
};

export default ad;
