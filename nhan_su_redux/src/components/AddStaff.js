import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getNewDataStaff } from '../redux/actions/staffs';
import { getAlertTitle, getAlertType } from '../redux/actions/alerts';

AddStaff.propTypes = {

};

function AddStaff() {

    const [staff_name, setStaffName] = useState('');
    const [staff_phone, setStaffPhone] = useState('');
    const [staff_permission, setStaffPermisson] = useState('');

    const dispatch = useDispatch();

    function handleSubmit() {
        const formValues = {
            staff_name: staff_name,
            staff_phone: staff_phone,
            staff_permission: parseInt(staff_permission),
        }

        const actionNewData = getNewDataStaff(formValues);
        dispatch(actionNewData);

        const actionAlertTitle = getAlertTitle('Thêm nhân viên thành công');
        dispatch(actionAlertTitle);

        const actionAlertType = getAlertType('success');
        dispatch(actionAlertType);
    }

    return (
        <div className="col-md-3">
            <h3 className="mb-3">Thêm mới nhân sự</h3>
            <form>
                <div className="form-group">
                    <label>Họ tên</label>
                    <input value={staff_name} onChange={e => setStaffName(e.target.value)} name="staff_name" type="text" className="form-control" placeholder="Trần Văn A" />
                </div>
                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input value={staff_phone} onChange={e => setStaffPhone(e.target.value)} name="staff_phone" type="text" className="form-control" placeholder="0967699314" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Quyền</label>
                    <select value={staff_permission} onChange={e => setStaffPermisson(e.target.value)} name="staff_permisson" className="form-control">
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Modrator</option>
                        <option value={3}>Normal</option>
                    </select>
                </div>
                <button onClick={handleSubmit} type="reset" className="btn btn-success btn-block">Thêm mới</button>
            </form>
        </div>

    );
}

export default AddStaff;