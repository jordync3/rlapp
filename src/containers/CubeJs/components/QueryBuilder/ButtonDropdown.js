import React from 'react';
import * as PropTypes from 'prop-types';
import { Button, Dropdown, Menu } from 'antd';

class OverlayVisible extends React.Component {
 
  constructor(props){
    super(props)

  this.state = {
    visible: false,
  };
}

  



  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu.</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={this.props.overlay} 
      overlayStyle = {{ width:300}}
      placement="bottomLeft" 
      trigger={['click']}
      onVisibleChange={this.handleVisibleChange}
      visible={this.state.visible}
      >
          <Button type ={this.props.type} children= {this.props.children} icon = {this.props.icon} />
      </Dropdown>
    );
  }
}

const ButtonDropdown = ({
  overlay,
  ...buttonProps
}) => { console.log(overlay);console.log(buttonProps); return };

ButtonDropdown.propTypes = {
  overlay: PropTypes.object.isRequired
};
export default OverlayVisible;