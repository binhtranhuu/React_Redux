import Actions from "../../lib/constants/Actions"

export const getAlertTitle = (titles) => {
    return {
        type: Actions.ALERT_ON_TITLE,
        titles,
    }
}

export const getAlertType = (types) => {
    return {
        type: Actions.ALERT_ON_TYPE,
        types,
    }
}

export const isAlertOff = () => {
    return {
        type: Actions.ALERT_OFF,
    }
}