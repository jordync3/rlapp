import React from 'react'
import {  Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;





const dashboardCards = (props) => {

    var image

    console.log(props.dashboard)

    try {
        image = require('../../containers/Dashboards/'+props.dashboard+'.PNG')
    } catch (error) {
        console.log(error)
    }
    
    

    return (

        <Link to={"/"+props.dashboard+""} >
            <Card
            className = 'dashboard-card mobile-friendly-cards'
            hoverable
            style={{ width: 290, background:"whitesmoke"}}
            cover={<div style = {{ backgroundImage: `url(${image})`}} className = "title-card"> </div>}
            >
            <Meta className = "title-meta" title={props.title} description={<div style = {{fontStyle: 'italic', minHeight:90}}>{props.description}</div>} ></Meta>
        </Card> 
        </Link>

    )
     
    }
    
    export default dashboardCards