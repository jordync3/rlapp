import React from 'react';
import { Spin, Button, Alert, Row, Col, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Icon } from '@ant-design/compatible';
import { GET_DASHBOARD_ITEMS } from '../graphql/queries';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';

const deserializeItem = i => ({ ...i,
  layout: JSON.parse(i.layout) || {},
  vizState: JSON.parse(i.vizState)
});

const defaultLayout = i => ({
  x: i.layout.x || 0,
  y: i.layout.y || 0,
  w: i.layout.w || 4,
  h: i.layout.h || 4,
  minW: 1,
  minH: 1
});

const DashboardPage = (props) => {
  const {
    loading,
    error,
    data
  } = useQuery(GET_DASHBOARD_ITEMS);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <Alert message="Error occured while loading your query" description={error.toString()} type="error" />;
  }

  const dashboardItem = item => <div key={item.id} data-grid={defaultLayout(item)} style = {{height:500}}>
      <DashboardItem key={item.id} itemId={item.id} title={item.name} changePage = {(e) => props.changePage('explore')} setItemId = {props.setItemId} >
          <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </div>;

  const Empty = () => <div style={{
    textAlign: 'center',
    padding: 12
  }}>
      <h2>There are no charts on this dashboard</h2>
      
        <Button type="primary" size="large" icon={<Icon type="plus" />} onClick = {(e) => props.changePage('explore')}>
          Add chart
        </Button>
     
    </div>

  return (
    <div>

    <Row>
    <Col span={20}>
      <Breadcrumb style={{ margin: "12px 0 0 0" }}>
        <Breadcrumb.Item><Link to ="/">Dashboards</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Data Explorer</Breadcrumb.Item>
      </Breadcrumb>
    </Col>
    <Col span = {4} style = {{paddingRight:8, paddingTop: 15}}>
    </Col>
  </Row>
    <div>
        {!data || data.dashboardItems.length ? <Dashboard dashboardItems={data && data.dashboardItems}>
          {data && data.dashboardItems.map(deserializeItem).map(dashboardItem)}
        </Dashboard> : <Empty />}
    </div>

    </div>

  

  )
};

export default DashboardPage;