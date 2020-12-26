import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeIsEdit, getEditData, getIdStaff } from '../redux/actions/staffs';
import { getAlertTitle, getAlertType } from '../redux/actions/alerts';

StaffInfo.propTypes = {
    id: PropTypes.string,
    number: PropTypes.number,
    staff_name: PropTypes.string,
    staff_phone: PropTypes.string,
    staff_permission: PropTypes.number,
    info: PropTypes.object,
};

StaffInfo.defaultProps = {
    id: '',
    number: '',
    staff_name: '',
    staff_phone: '',
    staff_permission: 1,
    info: {},
}

function StaffInfo(props) {
    const { id, number, staff_name, staff_phone, staff_permission, info } = props;

    const dispatch = useDispatch();

    function handleChangeIsEdit() {
        const action = changeIsEdit();
        dispatch(action);
    }

    function checkPermisson() {
        if (staff_permission === 1) {
            return "ADMIN";
        } else if (staff_permission === 2) {
            return "MODRATOR";
        } else {
            return "NORMAL";
        }
    }

    function sendEditData() {
        handleChangeIsEdit();

        const action = getEditData(info);
        dispatch(action);
    }

    function sendIdStaff() {
        const action = getIdStaff(id);
        dispatch(action);

        const actionAlertTitle = getAlertTitle('Xóa nhân viên thành công');
        dispatch(actionAlertTitle);

        const actionAlertType = getAlertType('danger');
        dispatch(actionAlertType);
    }
    return (
        <tr>
            <th scope="row">{number}</th>
            <td>{staff_name}</td>
            <td>{staff_phone}</td>
            <td>
                {
                    checkPermisson()
                }
            </td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={sendEditData} type="button" className="btn btn-warning"><i className="fa fa-edit" /> Sửa</button>
                    <button onClick={sendIdStaff} type="button" className="btn btn-danger"><i className="fa fa-trash" /> Xóa</button>
                </div>
            </td>
        </tr>
    );
}

export default StaffInfo;