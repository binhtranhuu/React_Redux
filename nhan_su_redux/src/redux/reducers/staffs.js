import dataStaff from "../../config";
import Actions from "../../lib/constants/Actions";

const staffInitialState = {
    isAdd: false,
    isEdit: false,
    dataEdit: {},
}
const staffReducer = (state = staffInitialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_ISADD_STATUS:
            return {
                ...state,
                isAdd: !state.isAdd,
            }
        case Actions.GET_NEW_DATA_STAFF:
            dataStaff.push(action.newData);
            return {
                ...state,
            }

        case Actions.CHANGE_ISEDIT_STATUS:
            return {
                ...state,
                isEdit: !state.isEdit,
            }
        case Actions.GET_EDIT_DATA:
            return {
                ...state,
                dataEdit: action.info,
            }
        case Actions.GET_EDITED_DATA:
            dataStaff.child(action.info.id).update(action.info);
            return {
                ...state,
                dataEdit: {},
            }
        case Actions.GET_ID_STAFF:
            dataStaff.child(action.info).remove();
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default staffReducer;