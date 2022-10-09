import React, {Component} from 'react'
import { connect } from 'react-redux'
import './TestContainer.css'
import { Card, Col, Row, Container } from 'react-bootstrap';
import TestComponent from '../../components/TestComponent/TestComponent';
// import { getExampleName, getExampleData } from '../../store/actions/ExampleActions.js'



class TestContainer extends Component {


    constructor(props){
        super(props)

        this.state = {

        }


    }


    componentDidMount(){
        // this.props.getExampleName('Jordyn')
        // this.props.getExampleData()
    }





    render(){

        console.log(this.props.exampleData)



        return (

            <Col span= {24}>
                <Row>
                    <Col span = {24}>
                        <img src='https://www.shelterluv.com/sites/default/files/animal_pics/1224/2021/03/31/07/20210331073522.png' alt="Logo" width={500} height ={500} />
                    </Col>
                </Row>
            </Col>

            
    
        )

    }


}

const mapStateToProps = (state) => {
    return{
        name:state.exampleReducer.name,
        exampleData: state.exampleReducer.exampleData
    }
}

const mapDispatchToProps = (dispatch) => {
        return{
            // getExampleName: (name) => dispatch(getExampleName(name)),
            // getExampleData: (name) => dispatch(getExampleData(name))
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)