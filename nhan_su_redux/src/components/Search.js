import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsAdd } from '../redux/actions/staffs';

function Search() {
    const isAdd = useSelector(state => state.staff.isAdd);
    const dispatch = useDispatch();

    function handleClickButton() {

        const action = changeIsAdd();
        dispatch(action);
    }

    function isShowButton() {
        if (isAdd) {
            return <button onClick={handleClickButton} className="btn btn-outline-secondary">Đóng</button>
        } else {
            return <button onClick={handleClickButton} className="btn btn-outline-success">Thêm mới</button>
        }
    }

    return (
        <div className="row my-3">
            <div className="col-md-6">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa ..." />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                {
                    isShowButton()
                }
            </div>
        </div>

    );
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch({actionCreator})
//         }
//     }
// }

export default Search;