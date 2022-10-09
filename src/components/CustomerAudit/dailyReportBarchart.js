import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const DailyReportBarChart = (props) => {


    useEffect(() => {
    
    
    }, []);
  


    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Dog" stackId="a" fill="#9EDAD1" />
          <Bar dataKey="Cat" stackId="a" fill="#F69382" />
          <Bar dataKey="Rabbit" stackId="a" fill="#E8C1A0" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}


const mapStateToProps = (state) => {
    return {
  
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
  
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DailyReportBarChart);  
  
