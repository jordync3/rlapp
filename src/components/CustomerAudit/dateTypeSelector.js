import React, { useState, useEffect } from 'react';
import { DatePicker, TimePicker, Select, Space,Col, Row } from 'antd';
import { connect } from 'react-redux';

const { RangePicker } = DatePicker;

const { Option } = Select;

const monthFormat = 'YYYY-MM-DD';

function PickerWithType({  onChange,props }) {

//   if (type === 'day')
   return <RangePicker allowClear={false} defaultValue={[props.dates[0],props.dates[1]]} format = {monthFormat} onChange={onChange} />;
//   return <RangePicker defaultValue={[props.dates[0][0],props.dates[0][1]]} format={monthFormat} picker={type} onChange={onChange} />;
}

const DateTypeSelector = (props) => {

  return (
      <Row>

      <PickerWithType props = {props}  onChange={value => props.onDateChange(value)} />
      </Row>
  
         
  );
}



const mapStateToProps = (state) => {
    return{
        dates:state.customeraudit.dates,

    }
  }
  
  const mapDispatchToProps = (dispatch) => {
        return{
          
        }
    }
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(DateTypeSelector)




