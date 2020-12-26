import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlertTitle, getAlertType } from '../redux/actions/alerts';
import { changeIsEdit, getEditedData } from '../redux/actions/staffs';

function EditStaff() {

    const dataEdit = useSelector(state => state.staff.dataEdit);
    const { id, staff_name, staff_phone, staff_permission } = dataEdit;

    const [staffName, setStaffName] = useState(staff_name);
    const [staffPhone, setStaffPhone] = useState(staff_phone);
    const [staffPermission, setStaffPermission] = useState(staff_permission);

    const dispatch = useDispatch();

    function handleChangeIsEdit() {
        const action = changeIsEdit();
        dispatch(action);
    }

    function handleSendEditedData() {
        handleChangeIsEdit();

        const formValue = {
            id: id,
            staff_name: staffName,
            staff_phone: staffPhone,
            staff_permission: parseInt(staffPermission),
        }
        const action = getEditedData(formValue);
        dispatch(action);

        const actionAlertTitle = getAlertTitle('Cập nhật nhân viên thành công');
        dispatch(actionAlertTitle);

        const actionAlertType = getAlertType('warning');
        dispatch(actionAlertType);
    }

    return (
        <div className="col">
            <h3 className="mb-3">Sửa thông tin nhân sự</h3>
            <form className="mt-2">
                <div className="form-group">
                    <label>Họ tên</label>
                    <input value={staffName} onChange={e => setStaffName(e.target.value)} type="text" name="staff_name" className="form-control" placeholder="Trần Văn A" />
                </div>
                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input value={staffPhone} onChange={e => setStaffPhone(e.target.value)} type="text" name="staff_phone" className="form-control" placeholder="0967699314" />
                </div>
                <div className="form-group">
                    <label>Quyền</label>
                    <select value={staffPermission} onChange={e => setStaffPermission(e.target.value)} name="staff_permission" className="form-control">
                        <option value>Chọn quyền mặc định</option>
                        <option value="1">Admin</option>
                        <option value="2">Modrator</option>
                        <option value="3">Normal</option>
                    </select>
                </div>
                <button onClick={handleSendEditedData} type="reset" className="btn btn-success mr-2">Cập nhật</button>
            </form>
        </div>
    );
}

export default EditStaff;