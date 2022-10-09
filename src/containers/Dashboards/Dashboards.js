import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Breadcrumb, Drawer } from 'antd';
import DashSearcher from '../../components/Dashboards/dashSearcher.js'
import { Row, Col, Badge } from 'antd';
import "./Dashboards.css";
import { getDashboards, getNotifications, closeNotification, setNotifications } from '../../store/actions/DashboardActions.js'
import DashboardCards from '../../components/Dashboards/dashboardCards.js';
import NotificationCards from '../../components/Dashboards/notificationCards.js';
import { appLog } from '../../store/actions/AuthActions.js';
import { SettingOutlined, FileAddOutlined, BellOutlined } from '@ant-design/icons';
import NotificationBell from '../../components/Dashboards/notificationBell.js';



class Dashboards extends Component {


    constructor(props){
        super(props)

        this.state = {
          visible: false,
        }


    }


    componentDidMount(){
      this.props.getDashboards()

    }

    componentDidUpdate(prevProps, prevState, snapshot){
    }

    // showDrawer = () => {
    //   this.setState({
    //   visible: true,
    //   });
    // };
    
    // toggleDrawer = () => {
    //     this.setState(prevState => ({
    //     visible: !prevState.visible
    //     }));
    // }
    
    // onClose = () => {
    //     this.setState({
    //     visible: false,
    //     });
    // };
    
    // onNotificationClose = (user,uid) => {

    //   this.setState({ notificationCount: this.state.notificationCount-1 });

    //   this.props.closeNotification(user,uid);
    // }





    render(){


      var dashboards = []

      for(var i in this.props.dashboards){
          dashboards.push(<DashboardCards dashboard = {this.props.dashboards[i].dashboard} title ={this.props.dashboards[i].title} description = {this.props.dashboards[i].description } appLog = {this.props.appLog}/>)
      }

      
        return (
            <div>

                {/* <Drawer
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
                >
                {notifications}
                </Drawer> */}


               <Col span = {24}>
                {/* <NotificationBell/> */}
               
                <Breadcrumb style={{ margin: "12px 0" }}>
                  <Breadcrumb.Item>Dashboards</Breadcrumb.Item>
                </Breadcrumb>
                </Col>
                <Row>
                  <Col span= {24}>
                    <div className = 'mobile-friendly' style={{ paddingTop:15, paddingLeft:35 , paddingBottom:20,  background:"#fff"}}>
                      <div style = {{float:"left", marginTop:5, marginRight:15, fontSize:16}}>
                        Search Dashboards: </div>
                        <DashSearcher  groups={this.props.groups} getDashboards= {this.props.getDashboards}/>
                      </div>
                    
                  </Col>
                </Row>
                <div style={{ overflowY:"auto",paddingLeft:15, paddingRight:15, marginTop:0 ,height:775,  background:"#fff"}}>
                  <Row>
                    {dashboards}

                    {/* <Link to="/drugSearch">
                        <Card
                        className = 'dashboard-card'
                          hoverable
                          style={{ width: 290, background:"whitesmoke"}}
                          cover={<div className = "title-card"> </div>}
                        >
                          <Meta className = "title-meta" title="Drug Search" description="Search by Drug" ></Meta>
                      </Card> 
                    </Link>
                    <Link to="/manufacturerSearch">
                        <Card
                        className = 'dashboard-card'
                          hoverable
                          style={{ width: 290, background:"whitesmoke"}}
                          cover={<div className = "title-card"> </div>}
                        >
                          <Meta className = "title-meta" title="Manufacturer Search" description="Search by Manufacturer" ></Meta>
                      </Card> 
                    </Link> */}
                  </Row>
                  </div>
            </div>

    
        )

    }


}

const mapStateToProps = (state) => {
    return{
        groups:state.auth.authGroups,
        user:state.auth.user,
        dashboards:state.dashboards.dashboards,
    }
}

const mapDispatchToProps = (dispatch) => {
        return{
            getDashboards: (groups,query) => dispatch(getDashboards(groups, query)),
            appLog: (user,type) => dispatch(appLog(user,type)),
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(Dashboards)                    