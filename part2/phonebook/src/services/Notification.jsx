import React from 'react';


export default function Notification() {

    const [notification, setNotification] = React.useState({
        message: "",
        type: ""
    });

    const [timeoutID, setTimeoutID] = React.useState(0);
    function sendNotification(notification) {
        clearTimeout(timeoutID);
        const { message, type } = notification;
        setNotification({message, type});
        const newTimeoutID = setTimeout(() =>
            setNotification({message: "", type: ""})
            , 5000);
        setTimeoutID(newTimeoutID);
    }
    

    return {notification, sendNotification};
}

