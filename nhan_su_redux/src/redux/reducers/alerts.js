import Actions from "../../lib/constants/Actions"

const alertsInitialState = {
    alertShow: false,
    alertTitle: '',
    alertType: '',
}
const alertsReducer = (state = alertsInitialState, action) => {
    switch (action.type) {
        case Actions.ALERT_ON_TITLE:
            console.log(action.titles);
        return {
            ...state,
            alertShow: true,
            alertTitle: action.titles,
        }
        case Actions.ALERT_ON_TYPE:
            console.log(action.types);
        return {
            ...state,
            alertShow: true,
            alertType: action.types,
        }
        case Actions.ALERT_OFF:
            return {
                ...state,
                alertShow: false,
                alertTitle: '',
                alertType: '',
            }
        default:
            return state
    }
}

export default alertsReducer;