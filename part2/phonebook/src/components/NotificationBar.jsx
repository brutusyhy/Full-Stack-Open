import React from 'react';
import './NotificationBar.css'


export default function NotificationBar({notification}) {
    const {message, type} = notification;
    return message !== "" ? <div className={type}>{message}</div> : <></>;
}