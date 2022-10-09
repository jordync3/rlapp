import { Select, Row,Input } from 'antd';
import { connect } from 'react-redux'
import debounce from 'lodash/debounce';
import React, { useState, useEffect, useRef, timeout } from 'react';

const { Option } = Select;





const AnimalSelect = (props) => {


    const timer = useRef(null)
    const isMounted = useRef(false)

    const [value, setValue] = useState(0);
    
    useEffect(() => {
        if(isMounted.current){
            clearTimeout(timer.current)
            timer.current = setTimeout(() => {
                props.handleSearch(value)
            },200)
        }
        else{
            isMounted.current = true
        }
            
    },[value])


    

    return (
        <Row>
            <Input placeholder="Search Animals" onChange={(e) => { setValue(e.target.value); }} />
        </Row>
    
           
    );
  }
  
  
  
  const mapStateToProps = (state) => {
      return{
          dates:state.animalprofile.dates,
  
      }
    }
    
    const mapDispatchToProps = (dispatch) => {
          return{
            
          }
      }
    
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(AnimalSelect)
  