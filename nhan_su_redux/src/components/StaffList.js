import React from 'react';
import PropTypes from 'prop-types';
import StaffInfo from './StaffInfo';

StaffList.propTypes = {
    sendData: PropTypes.array,
};

StaffList.defaultProps = {
    sendData: [],
}

function StaffList(props) {
    const { sendData } = props;
    
    return (
        <div className="col">
            <h3 className="mb-3">Thông tin nhân sự</h3>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Họ Tên</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Quyền</th>
                        <th scope="col">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sendData.map((v, k) => (
                            <StaffInfo
                                key={k}
                                id={v.id}
                                number={k + 1}
                                staff_name={v.staff_name}
                                staff_phone={v.staff_phone}
                                staff_permission={v.staff_permission}
                                info={v}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>

    );
}

export default StaffList;