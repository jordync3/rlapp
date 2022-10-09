import React from 'react';
import * as PropTypes from 'prop-types';
import { Menu, Select } from 'antd';
import ButtonDropdown from './ButtonDropdown'; // Can't be a Pure Component due to Dropdown lookups overlay component type to set appropriate styles

const memberMenu = (onClick, availableMembers) => <Menu>
    {availableMembers.length ? <Menu.ItemGroup>
        <Select 
            showSearch
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange = {(e) =>{console.log(e); onClick({name:e})}}
            style={{
            width: '100%',
            height:'100%',
            paddingBottom:10
            //marginRight: 8
            }}>
            {availableMembers.length ? availableMembers.map(m => <Select.Option key={m.name} value={m.name}>
              {m.title}
            </Select.Option>) : <Select.Option disabled>No members found</Select.Option>}
        </Select> 
      </Menu.ItemGroup>
        
         : <Menu.Item disabled>No members found</Menu.Item>}
  </Menu>;

const MemberDropdown = ({
  onClick,
  availableMembers,
  ...buttonProps
}) => <ButtonDropdown overlay={memberMenu(onClick, availableMembers)} {...buttonProps} />;

MemberDropdown.propTypes = {
  onClick: PropTypes.func.isRequired,
  availableMembers: PropTypes.array.isRequired
};
export default MemberDropdown;