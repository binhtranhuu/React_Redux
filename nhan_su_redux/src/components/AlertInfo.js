import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertContainer } from "react-bs-notifier";
import { useDispatch, useSelector } from 'react-redux';
import { isAlertOff } from '../redux/actions/alerts';

AlertInfo.propTypes = {

};

function AlertInfo(props) {
    const alertShow = useSelector(state => state.alert.alertShow);
    const alertTitle = useSelector(state => state.alert.alertTitle);
    const alertType = useSelector(state => state.alert.alertType);
    // console.log(alertTitle);
    const dispatch = useDispatch();

    function handleDismiss() {
        const action = isAlertOff();
        dispatch(action);
    }
    if (alertShow === true) {
        return (
            <AlertContainer >
                <Alert headline="Thông báo" onDismiss={handleDismiss} type={alertType} timeout={1000}>
                    {alertTitle}
                </Alert>
            </AlertContainer>
        );
    } else {
        return (
            null
        );
    }
}

export default AlertInfo;