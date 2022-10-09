import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Sidebar.css'
import { changeTab,changeTabOnStart  } from '../../store/actions/SidebarActions.js'
import {  Dropdown, } from 'antd';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { CaretUpOutlined, CaretDownOutlined, TeamOutlined, LayoutOutlined } from '@ant-design/icons';



const { Sider } = Layout;


class Sidebar extends Component {


    constructor(props){
        super(props)

        this.state = {
            collapsed: true,
        }


    }


    componentDidMount(){

        
    }


    changeTab(e, tab){
        this.props.changeTab(tab)

    }

    
    onCollapse = collapsed => {
        this.setState({ collapsed });
      };



    render(){

        const menu = (
            <Menu >
              <Menu.Item onClick = {this.props.logout} key="1">Logout</Menu.Item>
            </Menu>
          );

        return (

            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                className = 'sidebar-main mobile-friendly-none'
                collapsedWidth = '70px'
                width ='175px'
            >   
                <div className="logo" >
                <div className = 'sidebar-circle'>
                
                </div>
                <div className = 'sidebar-user'>

                <Dropdown overlay={menu}>
                <div className="ant-dropdown-link sidebarMenu" >
                    { !this.state.collapsed ? <div>{this.props.user.account.name} <CaretUpOutlined /> </div> : <CaretDownOutlined /> } 
                </div>
                </Dropdown>
                </div>
                </div>
                <Menu theme="dark" defaultSelectedKeys={[window.location.pathname.substring(1) ? window.location.pathname.substring(1) : "Dashboards"]} mode="inline" className ='sidebar-item' >
                <Menu.Item key="Dashboards" className = 'sidebar-item-inner'>
                    <Link to="/">
                    <LayoutOutlined style={{marginLeft:26}} />    
                    <span style ={{textAlign:'center'}}>Dashboards</span>
                    </Link>

                </Menu.Item>
                {/* <Menu.Item key="drugSearch" >
                    <Link to="/drugSearch">
                    <Icon type="pie-chart" />
                    <span>Drug Search</span>
                    </Link>
                    
                </Menu.Item>
                <Menu.Item key="manufacturerSearch">
                    <Link to="/manufacturerSearch">
                    <Icon type="desktop" />
                    <span>Manufacturer Search</span>
                    </Link>
                </Menu.Item> */}
                </Menu>
            </Sider>

            
    
        )

    }


}

const mapStateToProps = (state) => {
    return{
        // currentTab: state.sidebar.currentTab,
    }
}

const mapDispatchToProps = (dispatch) => {
        return{
            changeTab: (data) => dispatch(changeTab(data)),
            changeTabOnStart: (data) => dispatch(changeTabOnStart(data)),
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)