import { Drawer ,Badge, Button, Space} from 'antd';
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getNotifications, closeNotification, setNotifications, dismissAllNotifications } from '../../store/actions/DashboardActions.js'
import NotificationCards from '../../components/Dashboards/notificationCards.js';
import { BellOutlined } from '@ant-design/icons';
import { appLog } from '../../store/actions/AuthActions.js';


class NotificationBell extends Component {

  constructor(props){
    super(props)

    this.state = {
      visible: false,
      notificationCount: this.props.notifications.length

    }


}


componentDidMount(){
  this.props.getNotifications(this.props.user, this.props.acceptedDashboards)

}

componentDidUpdate(prevProps, prevState, snapshot){
  if (prevProps.notifications !== this.props.notifications) {
    this.setState({ notificationCount: this.props.notifications.length });
  }
  if (prevProps.acceptedDashboards !== this.props.acceptedDashboards) {
    this.props.getNotifications(this.props.user, this.props.acceptedDashboards)
  }
}

showDrawer = () => {
  this.setState({
  visible: true,
  });
};

toggleDrawer = () => {
    this.setState(prevState => ({
    visible: !prevState.visible
    }));
}

onClose = () => {
    this.setState({
    visible: false,
    });
};

onNotificationClose = (user,uid) => {

  this.setState({ notificationCount: this.state.notificationCount-1 });

  this.props.closeNotification(user,uid);
}





  render() {

    var notifications = []

    for(var i in this.props.notifications){
      notifications.push(<NotificationCards  appLog = {this.props.appLog} notifications = {this.props.notifications[i]} user = {this.props.user} onClose = {this.onNotificationClose}/>)
    }


    return (
      <div>


      <Drawer
      title="Notifications"
      placement="right"
      closable={true}
      bodyStyle = {{padding:'0 0 0 0'}}
      onClose={this.onClose}
      visible={this.state.visible}
      width= {400}
      getContainer={false}
      style={{ position: 'fixed' }}
      mask={false}
      // extra={
      //   <Space>
      //     <Button onClick={this.props.dismissAllNotifications(this.props.user, this.props.acceptedDashboards)}>Cancel</Button>
      //   </Space> 
      // }
      >
          <Button style = {{width:'100%'}} onClick = {()=> {this.props.dismissAllNotifications(this.props.user, this.props.acceptedDashboards)}}>Dismiss All Notifications</Button>
      {notifications}
      </Drawer>
        <div style = {{float:'right', marginLeft:10, paddingTop:3, paddingRight:12}}>
          <Badge count={this.state.notificationCount}>
              <BellOutlined className = 'settingsIcon' style = {{float:'right'}} size='large' onClick={this.toggleDrawer} />
          </Badge>
        </div>
        </div>
    
    )
    
    
  }


}

const mapStateToProps = (state) => {
  return{
    notifications: state.dashboards.notifications,
    user:state.auth.user,
    acceptedDashboards: state.dashboards.acceptedDashboards,
  }
}

const mapDispatchToProps = (dispatch) => {
      return{
        getNotifications: (user, acceptedDashboards) => dispatch(getNotifications(user, acceptedDashboards)),
        closeNotification: (user, uid) => dispatch(closeNotification(user, uid)),
        setNotifications: (data) => dispatch(setNotifications(data)),
        dismissAllNotifications: (user, acceptedDashboards) => dispatch(dismissAllNotifications(user, acceptedDashboards)),
        appLog: (user,type) => dispatch(appLog(user,type)),
      }
  }



export default connect(mapStateToProps, mapDispatchToProps)(NotificationBell)