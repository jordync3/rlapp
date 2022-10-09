import React, {Component} from 'react';
import { HashRouter, Route, useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import { Layout, Spin, Collapse } from 'antd';
import "./index.css";
import Dashboards from './containers/Dashboards/Dashboards.js';
import { AnimatedSwitch } from 'react-router-transition';
import Sidebar from './containers/Sidebar/Sidebar';
import CustomerAudit from './containers/CustomerAudit/CustomerAudit';
import TestContainer from './containers/TestContainer/TestContainer';
import AnimalProfile from './containers/AnimalProfile/AnimalProfile';
import CubeJs from './containers/CubeJs/CubeJs';
const { Panel } = Collapse;



const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const { Header, Content } = Layout;



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      
    };

}

onChange(key){
  console.log(key);
};

componentDidMount(){

  // this.props.getAcceptedGroups()

}

componentDidUpdate(prevProps, prevState, snapshot){
      // if (prevProps.acceptedGroups !== this.props.acceptedGroups) {
      //   this.props.appLog(authProvider.account.userName, 'login')
      //   checkGroup(this, this.props.acceptedGroups)
      // }
  

}



  
render(){


    return (
        <HashRouter onChange = {this.test} >

        <div className = 'app-background' id ='App'>

                    <Layout style={{ minHeight: "100vh" }}>

                      <div style={{width:'100%', height:200}}>
                        <img src={require('./assets/rllogo.png')} style={{width:'20%', height:200}} />
                        <img src={require('./assets/rlname.png')} style={{float:'right', width:'80%', height:200}} />
                      </div>
                      <div style={{width:'100%', height:400}}>
                        <div style={{width:'50%', height:400, float:'left'}}>
                          <div style={{width:'100%', height:200}}>
                            <img src={require('./assets/rlname2.gif')} style={{width:'100%', height:200}} />
                          </div>
                          <div style={{width:'100%', height:200}}>
                            <img src={require('./assets/rlcarspin2.gif')} style={{width:'100%', height:200}} />
                          </div>
                        </div>
                        <div style={{width:'50%', height:400, float:'right', overflow:'scroll'}}>
                          <Collapse defaultActiveKey={['1']} onChange={this.onChange}>
                              <Panel header="Who am i?" key="8">
                                <p>Hi. I am Goalie McGoaltendie. I am a aspiring rocket league pro and have over 200 hours in the game.</p>
                              </Panel>
                              <Panel header="Did you get beat by me?" key="2">
                                <p>Sorry to hear that.. but dont be too sad! I am a pro. If you are looking to get better I suggest doing the "Airiel", "Goalie", or "Striker" trainings in the training section of rocket league. It took me a while to beat the "All-Star" difficulty, so make sure you start easy and work your way up!</p>
                              </Panel>
                              <Panel header="Do you want to be like me?" key="3">
                                <p>No.</p>
                              </Panel>
                              <Panel header="Why do I have a website?" key="4">
                                <p>Yes.</p>
                              </Panel>
                              <Panel header="How did I get supersonic legend?" key="5">
                                <p>Hard work pays off. I have tens of hours in the game. </p>
                              </Panel>
                              <Panel header="Whats my discord?" key="6">
                                <p>Flick#9649</p>
                              </Panel>
                              <Panel header="Whats my epic?" key="6">
                                <p>DramaticStoat879</p>
                              </Panel>
                              <Panel header="Did I go to school for website design?" key="7">
                                <p>Surprisingly, I have not.</p>
                              </Panel>
                            </Collapse>
                        </div>
                      </div>
                      <div style={{width:'100%', height:400}}>
                        <div style={{width:'33.33%', height:400, float:'left'}}>
                            <img src={require('./assets/rlbad.gif')} style={{width:'100%', height:400}} />
                          </div>
                          <div style={{width:'33.33%', height:400, float:'left'}}>
                            <img src={require('./assets/rlbad2.gif')} style={{width:'100%', height:400}} />
                          </div>
                          <div style={{width:'33.33%', height:400, float:'left'}}>
                            <img src={require('./assets/rlbad3.gif')} style={{width:'100%', height:400}} />
                          </div>
                        </div>




                      {/* <div className="spinner-container">
                        <div className="loading-spinner">
                        <img src={require('./assets/rllogo.png')} style={{width:'100', height:100}} />
                        </div>
                      </div> */}

                    </Layout>

              
        </div>
      </HashRouter>

    ); 


  }

}

const mapStateToProps = state => {
  return {
    // isTeams:state.auth.isTeams,
    // auth:state.auth.authGroups,
    // acceptedGroups:state.auth.acceptedGroups,
    dashboards: state.dashboards.dashboards,
    // acceptedDashboards: state.dashboards.acceptedDashboards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    // authenticateUser: (value) => dispatch(authenticateUser(value)),
    // getAcceptedGroups: () => dispatch(getAcceptedGroups()),
    // getDashboards: (groups,query) => dispatch(getDashboards(groups, query)),
    // appLog: (user,type) => dispatch(appLog(user,type)),
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

