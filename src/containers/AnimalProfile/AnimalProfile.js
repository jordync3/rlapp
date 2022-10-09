import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Breadcrumb, Drawer, Button, Modal, Card,Carousel, Progress } from 'antd';
import { Row, Col } from 'antd';
import "./AnimalProfile.css";
import { Link } from 'react-router-dom';
import { SettingOutlined, StarTwoTone } from '@ant-design/icons';
import moment from 'moment';
import DateTypeSelector from '../../components/AnimalProfile/dateTypeSelector'
import { getAPAnimals, getAPEvents, getAPNotes } from '../../store/actions/AnimalProfileActions.js'
import AnimalSelect from '../../components/AnimalProfile/animalSelect';
import APNotesTable from '../../components/AnimalProfile/APNotesTable';
import APEventsTable from '../../components/AnimalProfile/APEventsTable';
import APBarchart from '../../components/AnimalProfile/APBarchart';
const _ = require('lodash');




class AnimalProfile extends Component {


    constructor(props){
        super(props)

        this.state = {
            visible: false,
            dates: [moment().add('month', -1),moment()],
            ApplicationCards:[],
            activeID:'100',
            FilteredAnimals:[],
            ApplicationCards:[],
            animalSelected:'',
            pivotNotes:[],


        }
        this.handleFilterApply = this.handleFilterApply.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.handleClose = this.handleClose.bind(this)

        

    }


    componentDidMount(){
      // this.props.getAPAnimals()
        
    }

    componentDidUpdate(prevProps, prevState, snapshot){
      // if (prevProps.apAnimals !== this.props.apAnimals) {
      //   this.setState({
      //     FilteredAnimals: this.props.apAnimals,
      //     });

      // }
      // if (prevState.FilteredAnimals !== this.state.FilteredAnimals) {
      //     this.createCards()
      // }
      // if (prevState.activeID !== this.state.activeID) {
      //   this.props.getAPEvents(this.state.activeID)
      //   this.props.getAPNotes(this.state.activeID)
      //   this.createCards()
      // }
      // if (prevProps.apNotes !== this.props.apNotes) {
      //   this.pivotNotes()

      // }
      } 
      

    



    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    handleFilterApply(){
      let apply  = async() =>{
        this.setState({
          changes: false,
          });
  
  
        this.props.onDateChange(this.state.dates)
  
        await this.sleep(1000)
  
        return 0
      }
  
      apply().then(() =>{
        this.props.handleApplyFilter();
      })
    }

    thousands_separators(num){
      if(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
      }else{
          return 0
      }
    }
    
onDateChange = (moment) => {

  this.setState({
    changes: true,
    dates: moment,
    });
    
  };

  pivotNotes = () => {



    var apNotesObj = []
    if(this.props.apNotes){
      for(var i in this.props.apNotes[0]){
        console.log(this.props.apNotes[0][i])
      
        apNotesObj.push({NoteNumber: i, Note:this.props.apNotes[0][i]})
      }
    this.setState({
      pivotNotes:apNotesObj
    });

  }

    }

    

    


  loadingCheck(val){
      if(this.props[val]){
          return false
      }else{
          return true
        }
  }
  


  showDrawer = () => {
    this.setState({
    visible: true,
    });
};

toggleDrawer = () => {
    this.setState(prevState => ({
    visible: !prevState.visible
    }));
}

onClose = () => {
    this.setState({
    visible: false,
    });
};


showModal = (type, title) => {
  this.setState({
  mVisible: true,
  title:title,
  type:type,
  });
};

handleClose = e => {
  this.setState({
  mVisible: false,
  });
};

handleCancel = e => {
  this.setState({
    mVisible: false,
  });
};

cardSelect = (q) => {
  console.log(q)
  this.setState({
    activeID: q ? q.InternalID : '',
    animalSelected: q
  });

}

handleSearch = (v) => {

  this.setState({
    ApplicationCards:[]
  });
  
  var v = v.split(',')

 if(this.props.apAnimals){

  var result = []

 

  for(var i in v){
    if(v[i]){
      if(i == 0){
        result = (this.props.apAnimals).filter(o => o.Name.toLowerCase().includes(v[i].toLowerCase()) || o.Status.toLowerCase().includes(v[i].toLowerCase()) || o.Type.toLowerCase().includes(v[i].toLowerCase()) || o.Sex.toLowerCase().includes(v[i].toLowerCase()))
      }else{
        result = result.filter(e => (this.props.apAnimals).filter(o => o.Name.toLowerCase().includes(v[i].toLowerCase()) || o.Status.toLowerCase().includes(v[i].toLowerCase()) || o.Type.toLowerCase().includes(v[i].toLowerCase()) || o.Sex.toLowerCase().includes(v[i].toLowerCase())).some(f => f.InternalID == e.InternalID));
      }
    }
  }
   
  console.log(result)

   this.setState({
    FilteredAnimals:result
  });
  this.createCards()
 }
 if(!v[0]){
  this.setState({
    FilteredAnimals:this.props.apAnimals
  });
  this.createCards()
 }
}

createCards = () => {
  
  var appCardArr = []

  for(let i in this.state.FilteredAnimals){

    appCardArr.push(
      <div>
        <Card id = {this.state.FilteredAnimals[i]} onClick = {(e) => {this.cardSelect(this.state.FilteredAnimals[i]);this.setState({apAnimalselected:this.props.apAnimals[i].Name});}} className = {this.state.activeID == this.state.FilteredAnimals[i].InternalID ?'ETLCardActive' : 'ETLCard'}>
      {/* <Card id = {i} onClick = {(e) => {this.cardSwitch(e);this.next();this.setState({apAnimalselected:this.props.apAnimals[i].APPLICATIONGROUP});}} className = {this.state.activeID == i ?'ETLCard' : 'ETLCard'}> */}

        {/* <h3>{this.props.apAnimals[i].APPLICATIONGROUP}</h3> */}
        <Row>      
          <Col span ={8} style ={{margin:'20px 0 40px 0'}}>
          <img src= {this.state.FilteredAnimals[i].Photos0} alt="Logo" style={{height:'90%', width:'100%', objectFit:'contain'}} />
            {/* <Progress  type="circle" percent={this.props.apAnimals ? Math.round(((this.props.apAnimals[i].COMPLETED/this.props.apAnimals[i].TOTAL)*100)) :0} 
              strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
              }} 
            /> */}
          </Col>
          <Col span ={16}>
            <Row>
              <Col span = {24} style = {{padding:'20px 12px 0 12px'}}>
                <h3>{this.state.FilteredAnimals[i].Name}</h3>
                <h5>Status: {this.state.FilteredAnimals[i].Status}</h5>
                <h5>Type: {this.state.FilteredAnimals[i].Type}</h5>
                <h5>Sex: {this.state.FilteredAnimals[i].Sex}</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      </div>
      )

  }

  this.setState({
    ApplicationCards:appCardArr
  });

}



  render(){

    console.log(this.state.activeID)


      const props = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    


        return (
            <div>
                <Drawer
                title="Animal Profile"
                placement="right"
                closable={true}
                onClose={this.onClose}
                visible={this.state.visible}
                width= {300}
                getContainer={false}
                style={{ position: 'fixed' }}
                mask={false}
                >
                <p>Select Date Range: <DateTypeSelector onDateChange={this.onDateChange}/></p>
                
                <Button style = {{marginTop:10, float:'left'}} type="primary" disabled = {!this.state.changes} onClick = {this.handleFilterApply}>Apply Changes</Button>
                </Drawer>

                <Modal
                onCancel={this.handleCancel}
                title={this.state.title}
                visible={this.state.mVisible}
                onOk={this.handleClose}
                width={this.state.type =='Manage' ? '80%': '40%'}
                footer={
                    <Button key="close" type="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                }>   
                    {/* <AlertsTable data = {this.props.alertsTable} loading ={this.loadingCheck('alertsTable')} user = {this.props.user} updateAlerts = {this.props.updateAlerts}/> */}
                    {/* {this.state.type =='Manage' ? <AlertsTable data = {this.props.alertsTable} loading ={this.loadingCheck('alertsTable')} user = {this.props.user} updateAlerts = {this.props.updateAlerts}/>:''}
                    {this.state.type =='Comment' ? <ManageAlertsModal data = {this.state.commentSelected} onSend = {this.addComment} editComment = {this.editComment} UIDSubRowSelected = {this.state.UIDSubRowSelected} title = {this.state.title}/> :''} */}
              </Modal>

            <div >
                <Row>
                  <Col span={12}>
                    <Breadcrumb style={{ margin: "12px 0" }}>
                      <Breadcrumb.Item><Link to ="/">Dashboards</Link></Breadcrumb.Item>
                      <Breadcrumb.Item  onClick = {() =>{this.cardSelect()}}><a href='#/animalprofile' >Animal Profile</a></Breadcrumb.Item>
                      { this.state.animalSelected ? <Breadcrumb.Item>{this.state.animalSelected.Name}</Breadcrumb.Item> : null}
                      {/* { this.props.subExtractSelected ? <Breadcrumb.Item>{this.props.subExtractSelected}</Breadcrumb.Item> : null} */}

                    </Breadcrumb>
                  </Col>
                  <Col span = {12} style = {{paddingRight:8, paddingTop: 15}}>
                        <div style = {{float:'right', marginLeft:10, paddingTop:3}}>
                            <SettingOutlined className = 'settingsIcon' style = {{float:'right'}} size='large' onClick={this.toggleDrawer} />
                        </div>
                  </Col>
                </Row>
                <Row style = {{}}>
                <Col span = {24} style = {{ height:'89vh'}}>
                      <Row style = {{height:'100%'}}>
                        <Col span = {5} style = {{background:'white', height:'100%'}}>
                          <div style={{paddingRight:5, background:'#F3F2F1'}}>
                            <AnimalSelect data = {this.props.apAnimals} handleSearch = {this.handleSearch}/>
                          </div>
                          
                          {/* {this.state.ApplicationCards} */}
                          {/* <Col span = {24} style = {{background:'#F3F2F1'}}> <Button onClick = {this.previous}>Back</Button></Col> */}
                          <Col span = {24} className = 'ETLApplications' style = {{background:'#F3F2F1', height:'100%', overflowY:'auto'}}>
                          <Carousel ref={node => (this.carousel = node)} {...props}  style = {{background:'#F3F2F1', height:'100%', overflowY:'auto'}} >
                              <div className = 'ETLApplications' style = {{background:'#F3F2F1', height:'100%', overflowY:'auto'}}>
                                <div style={{ height: '100%',
                                  color: '#fff',
                                  lineheight: '100%',
                                  background: '#F3F2F1'}}>
                                  {this.state.ApplicationCards}
                                  <Card className = {'ETLCard'}></Card>
                                  <Card className = {'ETLCard'}></Card>
                                  <Card className = {'ETLCard'}></Card>
                                  <Card className = {'ETLCard'}></Card>
                                  <Card className = {'ETLCard'}></Card>
                                  </div>
                              </div>
                              {/* <div className = 'ETLApplications' style = {{background:'#F3F2F1', height:'100%', overflowY:'auto'}}>
                                <div style={{ height: '100%',
                                  color: '#fff',
                                  lineheight: '100%',
                                  background: '#F3F2F1'}}>
                                  {TaskCards}
                                  <Card className = {'ETLCard'}></Card>
                                  <Card className = {'ETLCard'}></Card>
                                  <Card className = {'ETLCard'}></Card>
                                  <Card className = {'ETLCard'}></Card>
                                  <Card className = {'ETLCard'}></Card>
                                  </div>
                              </div> */}
                              <div>
                                <h3 style={{ height: '100%',
                                  color: '#fff',
                                  lineheight: '100%',
                                  textAlign: 'center',
                                  background: '#364d79'}}>1</h3>
                              </div>
                            </Carousel>
                            </Col>
                          </Col>
                          <Col span = {19}>
                            <Row style = {{padding:'0px 8px'}}>
                              <Col span = {6} style = {{background:'#FFFFFF', height:250, padding:'8px'}}>
                              { this.state.animalSelected ? <img src= {this.state.animalSelected.Photos0} style={{height:'100%', width:'100%', objectFit:'contain'}} /> : ''} 
                              </Col>
                              <Col span = {18} style = {{ height:250}}>
                                <Row style = {{ marginLeft:12, height:'50%', width:'100%'}}> 
                                  <Col span ={6} style = {{ background:'white', height:'100%', padding:'12px', margin:'0 6px 0 0'}}>
                                    <div >
                                      <h6 style = {{color:'rgb(188, 188, 188)'}}>Time with Animal Friends</h6>
                                    </div>
                                    <div style = {{textAlign:'center', width:'100%', fontSize:36, color:'#B45B79'}}>
                                    {this.state.animalSelected ? '36 Months': ''}
                                    </div>
                                  </Col>
                                  <Col span ={6} style = {{ background:'white', height:'100%', padding:'12px', margin:'0 0 0 6px'}}>
                                    <div >
                                      <h6 style = {{color:'rgb(188, 188, 188)'}}>Age</h6>
                                    </div>
                                    <div style = {{textAlign:'center', width:'100%', fontSize:36, color:'#9DD17B'}}>
                                    {this.state.animalSelected ? this.state.animalSelected.Age+ ' Months': ''}
                                    </div>
                                  </Col>
                                  <Col span ={11} style = {{ background:'white', height:'100%', padding:'12px', margin:'0 0 0 12px'}}>
                                    <div >
                                      <h6 style = {{color:'rgb(188, 188, 188)'}}>Current Status</h6>
                                    </div>
                                    <div style = {{textAlign:'center', width:'100%', fontSize:36, color:'#6297BA'}}>
                                    {this.state.animalSelected ? this.state.animalSelected.Status: ''}
                                    </div>
                                  </Col>
                                </Row >
                                <Row style = {{ marginLeft:12, height:'50%', width:'100%'}}>
                                  <Col span = {24}>
                                    <APBarchart data = {this.props.apEvents}/>
                                  </Col>
                                </Row>
                              {/* </Col>
                              <Col span = {24}> */}
                              </Col>
                            </Row>
                            <Row style = {{margin:'16px 12px 12px 12px'}}>
                                <Col span = {12} style = {{paddingRight:'8px'}}>  
                                <Row>
                                    <Col span= {24}>
                                      <div className='ca-graph-title'>Notes</div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col span= {24} style = {{background:'white', height:525}}>
                                      <APNotesTable data = {this.state.pivotNotes}/>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col span = {12} style = {{paddingLeft:'8px'}}>  
                                <Row>
                                    <Col span= {24}>
                                      <div className='ca-graph-title'>Events</div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col span= {24} style = {{background:'white', height:525}}>
                                      <APEventsTable data = {this.props.apEvents}/>
                                    </Col>
                                  </Row>
                                </Col>
                            </Row>
                          </Col>
                      </Row>
                  </Col>
                </Row>
                  
                  

              </div>
            </div>

    
        )

    }


}

const mapStateToProps = (state) => {
    return{
      dates:state.animalprofile.dates,
      apAnimals: state.animalprofile.apAnimals,
      apNotes: state.animalprofile.apNotes,
      apEvents: state.animalprofile.apEvents,

    }
}

const mapDispatchToProps = (dispatch) => {
        return{
          // getAPAnimals: () => dispatch(getAPAnimals()),
          // getAPNotes: (id) => dispatch(getAPNotes(id)),
          // getAPEvents: (id) => dispatch(getAPEvents(id)),
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(AnimalProfile)                    