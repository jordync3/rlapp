import React from 'react';
import { Card, Menu, Button, Dropdown, Modal } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Icon } from '@ant-design/compatible';
import { GET_DASHBOARD_ITEMS } from '../graphql/queries';
import { DELETE_DASHBOARD_ITEM } from '../graphql/mutations';
import './DashboardItem.css'

const DashboardItemDropdown = ({
  itemId, changePage, setItemId
}) => {
  const [removeDashboardItem] = useMutation(DELETE_DASHBOARD_ITEM, {
    refetchQueries: [{
      query: GET_DASHBOARD_ITEMS
    }]
  });


  const dashboardItemDropdownMenu = <Menu>
      <Menu.Item>
        <Link  onClick = { (e) => {setItemId(itemId); changePage('explore')}}>Edit</Link>
      </Menu.Item>
      <Menu.Item onClick={() => Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk() {
        removeDashboardItem({
          variables: {
            id: itemId
          }
        });
      }

    })}>
        Delete
      </Menu.Item>
    </Menu>;
  return <Dropdown overlay={dashboardItemDropdownMenu} placement="bottomLeft" trigger={['click']}>
      <Button shape="circle" size="small"  icon={<Icon type="menu" style={{fontSize:12}} />} />
    </Dropdown>;
};

const DashboardItem = ({
  itemId,
  children,
  title,
  changePage,
  setItemId,
}) => {   return <Card size="small" title={<span style={{paddingTop:1, height: 100, padding:0, fontSize:15}}>{title}</span>} style={{
  height: '100%',
  width: '100%'
}} bodyStyle={{
  height: '90%',
  width: '100%',
}} extra={<DashboardItemDropdown itemId={itemId} changePage = {changePage} setItemId = {setItemId} />}>
    <div style = {{height:'100%'}}>{children}</div>
  </Card>}

export default DashboardItem;