import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Menu } from 'antd';


const Header = (
  props
) => <Layout.Header style={{
  padding: '0 0',
  marginBottom:0,
  height:'24px'
}}>
    <div style={{
    float: 'left'
  }}>
      <h2 style={{
      color: '#fff',
      margin: 0,
      marginRight: '1em',
      display: 'inline',
      width: 100,
      lineHeight: '20px'
    }}>
      </h2>
    </div>
    <Menu theme="dark" mode="horizontal" selectedKeys={[props.pageSelected]}  style={{
    lineHeight: '24px',
    height:'24px'
  }}>
      <Menu.Item key="explore" onClick = {(e) => {props.changePage('explore'); props.setItemId(null)}}>
        {/* <Link to="/explore"> */}
          Explore
          {/* </Link> */}
      </Menu.Item>
      <Menu.Item key="dashboard" onClick = {(e) => {props.changePage('dashboard'); props.setItemId(null)}} >
        {/* <Link to="/"> */}
          Dashboard
          {/* </Link> */}
      </Menu.Item>
    </Menu>
  </Layout.Header>;

export default withRouter(Header);