import React from 'react'
import {  Card } from 'antd';
import { Link } from 'react-router-dom';

import { Button, notification, Alert } from 'antd';

const { Meta } = Card;

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
    duration: 0,
  };
  notification.open(args);
};




const notificationCards = (props) => {


    return (

        // <Link to={"/"+props.dashboard+""} onClick={() => props.appLog(authProvider.account.userName, props.dashboard)}>
           <Alert
                message={props.notifications.title}
                showIcon
                description={props.notifications.description}
                type={props.notifications.type}
                style ={{minHeight:110}}
                action={ props.notifications.dashboard != 'csr' ?
                    <Link to={"/"+props.notifications.dashboard+""} >
                        <Button size="small" type="text" >
                        Details
                        </Button>
                    </Link> : ''
                }
                closable
                onClose = {() => props.onClose(props.user, props.notifications.uid)}
                />
        // {/* </Link> */}

    )
     
    }
    
    export default notificationCards