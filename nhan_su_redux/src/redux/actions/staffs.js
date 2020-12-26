import Actions from "../../lib/constants/Actions"

export const changeIsAdd = () => {
    return {
        type: Actions.CHANGE_ISADD_STATUS,
    }
}

export const getNewDataStaff = (newData) => {
    return {
        type: Actions.GET_NEW_DATA_STAFF,
        newData,
    }
}


export const changeIsEdit = () => {
    return {
        type: Actions.CHANGE_ISEDIT_STATUS,
    }
}

export const getEditData = (info) => {
    return {
        type: Actions.GET_EDIT_DATA,
        info,
    }
}

export const getEditedData = (info) => {
    return {
        type: Actions.GET_EDITED_DATA,
        info,
    }
}

export const getIdStaff = (info) => {
    return {
        type: Actions.GET_ID_STAFF,
        info,
    }
}