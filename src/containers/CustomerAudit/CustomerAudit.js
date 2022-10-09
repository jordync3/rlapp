import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Breadcrumb, Drawer, Button, Modal, DatePicker, Card, Spin } from 'antd';
import { Row, Col } from 'antd';
import "./CustomerAudit.css";
import { Link } from 'react-router-dom';
import { clearData, handleApplyFilter, onDateChange, getDailyReportTable,getDailyReportBarChart} from '../../store/actions/customerAuditActions.js'
import { SettingOutlined, FileAddOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faDog, faHome} from  '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import axios from 'axios';
import XLSX from 'xlsx';
import NotificationBell from '../../components/Dashboards/notificationBell';
import DailyReportTable from '../../components/CustomerAudit/dailyReportTable';
import DateTypeSelector from '../../components/CustomerAudit/dateTypeSelector';
import DailyReportBarChart from '../../components/CustomerAudit/dailyReportBarchart';





class CustomerAudit extends Component {


    constructor(props){
        super(props)

        this.state = {
            visible: false,
            dates: [moment().add('month', -1),moment().add('day', -1)],
            changes:false,
            loadingModal:false,
        }

        this.handleFilterApply = this.handleFilterApply.bind(this)
        this.onDateChange = this.onDateChange.bind(this)


    }


    componentDidMount(){
      // this.props.getDailyReportTable(this.props.dates)
      // this.props.getDailyReportBarChart(this.props.dates)

    }

    componentDidUpdate(prevProps, prevState, snapshot){
      // if (prevProps.dates !== this.props.dates) {
      //   this.props.clearData()
      //   this.props.getDailyReportTable(this.props.dates)
      //   this.props.getDailyReportBarChart(this.props.dates)
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



  loadingCheck(val){
      if(this.props[val]){
          return false
      }else{
          return false
        }

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


onDateChange = (moment) => {

  this.setState({
    changes: true,
    dates: moment,
    });
    
  };

  showLoadingModal = () => {
    this.setState({
        loadingModal: true,
      });
  };

  handleLoadingOk = () => {
      this.setState({
          loadingModal: false,
      });
  };

  handleLoadingCancel = () => {
      this.setState({
          loadingModal: false,
      });
  };

  downloadSIS = () => {
    // this.showLoadingModal()

    // axios.post('/customerAudit/getSISExcel', {
    //   dates: this.props.dates
    //       })
    // .then((res) =>{
      if(this.props.dailyReportTable){
          var SISWS =  XLSX.utils.json_to_sheet(this.props.dailyReportTable);
          var wb = XLSX.utils.book_new();

          XLSX.utils.book_append_sheet(wb, SISWS, 'Daily Report');

          var wopts = {type:'buffer',bookType: 'xlsx', bookSST: true, compression:true};

          XLSX.writeFile(wb, 'Daily Report.xlsx', wopts);
      }
    // this.handleLoadingOk()

    //   })
    }


    getItems(input) {
      if(input){
      var arr = input, obj = {};
      for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i].OutcomeType]) {
          obj[arr[i].OutcomeType] = 1;
        } else if (obj[arr[i].OutcomeType]) {
          obj[arr[i].OutcomeType] += 1;
        }
      }
      return obj;
      }else{
          return {}
      }
      
    }



    render(){


      var tileData = this.getItems(this.props.dailyReportTable)


        return (
            <div>
                <Drawer
                title="ShelterLuv"
                placement="right"
                closable={true}
                onClose={this.onClose}
                visible={this.state.visible}
                width= {300}
                getContainer={false}
                style={{ position: 'fixed' }}
                mask={false}
                >
                  <p>Select Date Range: <DateTypeSelector onDateChange={this.onDateChange} onChangeType={this.onChangeType}/></p>
                  
                  <Button style = {{marginTop:10, float:'left'}} type="primary" disabled = {!this.state.changes} onClick = {this.handleFilterApply}>Apply Changes</Button>
                </Drawer>

                <Modal title="Fetching Data" visible={this.state.loadingModal} onOk={this.handleLoadingOk} onCancel={this.handleLoadingCancel} footer = {false} style = {{marginTop:150}} width= '500px' bodyStyle= {{height:200}}>
                  <div style = {{textAlign:'center', marginTop:50}}>
                      <Spin />
                  </div>
                </Modal>

            <div >
                <Row>
                  <Col span={12}>
                    <Breadcrumb style={{ margin: "12px 0 0 0" }}>
                      <Breadcrumb.Item><Link to ="/">Dashboards</Link></Breadcrumb.Item>
                      <Breadcrumb.Item  onClick = {() =>{}}><a href='#/shelterluv' >ShetlerLuv</a></Breadcrumb.Item>
                    </Breadcrumb>
                  </Col>
                  <Col span = {12} style = {{paddingRight:8, paddingTop: 15}}>
                        <div style = {{float:'right', marginLeft:8, paddingTop:3}}>
                            <SettingOutlined className = 'settingsIcon' style = {{float:'right'}} size='large' onClick={this.toggleDrawer} />
                        </div>
                        {/* <div>
                          <NotificationBell/>
                        </div> */}
                        <div style = {{float:'right', marginLeft:10, paddingTop:3}}>
                            <FileAddOutlined className = 'settingsIcon' style = {{float:'right'}} size='large' onClick={this.downloadSIS} />
                        </div>
                        <div style = {{float:'right', width:400}}>
                          {/* <LAMSearcher data = {this.props.taskNames} value = {this.props.taskNameSelected} changeExtractSelected = {this.props.changeTaskNameSelected}/> */}
                        </div>
                  </Col>
                </Row>
                <Row style = {{marginTop:8}}>
                  <Col span = {24}>
                      <Row>
                        <Col span = {8}>
                          <Card style={{ height: 170, margin: "0 12px 0 0", padding:"20px 0 0 0px" }} loading ={this.loadingCheck('')}>
                              <Row>                            
                                <Col span = {10}>
                                  <div className ='ca-card-icon'><FontAwesomeIcon icon={faDog} size="6x" color={'#9EDAD1'} /></div>
                                </Col>
                                <Col span = {14}>
                                  <h1 className = 'card-data' style = {{textAlign:"center", color:'#9EDAD1', paddingTop:6}}>{tileData ? tileData.Intake : 0}</h1>
                                  <h3 className = "card-titles">Animals Intake</h3>
                                </Col>
                              </Row>
                          </Card>
                        </Col>
                        <Col span = {8}>
                          <Card style={{ height: 170, margin: "0 12px 0 0", padding:"20px 0 0 0px"   }} loading ={this.loadingCheck('')}>
                              <Row>                            
                                <Col span = {10}>
                                  <div className ='ca-card-icon'><FontAwesomeIcon icon={faCat} size="6x" color={'#F69382'} /></div>
                                </Col>
                                <Col span = {14}>
                                  <h1 className = 'card-data' style = {{textAlign:"center", color:'#F69382', paddingTop:6}}>{tileData ? tileData.Outcome : 0}</h1>
                                  <h3 className = "card-titles">Animals Outcome</h3>
                                </Col>
                              </Row>
                          </Card>                        
                        </Col>
                        <Col span = {8}>
                          <Card style={{ height: 170, margin: "0 0 0 0", padding:"20px 0 0 0px"   }} loading ={this.loadingCheck('')}>
                                <Row>                            
                                  <Col span = {10}>
                                    <div className ='ca-card-icon'><FontAwesomeIcon icon={faHome} size="6x" color={'#E8C1A0'} /></div>
                                  </Col>
                                  <Col span = {14}>
                                    <h1 className = 'card-data' style = {{textAlign:"center", color:'#E8C1A0', paddingTop:6}}>{tileData ? tileData.Foster : 0}</h1>
                                    <h3 className = "card-titles">Foster Status</h3>
                                  </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span = {9}>
                          {/* <CustomerAuditSiloTable data = {this.props.customerAuditSiloTable} loading ={this.loadingCheck('customerAuditSiloTable')}/> */}
                        </Col>
                      </Row>
                      <Row style = {{marginTop:12}}>
                      <Col span = {24} style = {{height:200, background:'white'}}> 
                          <DailyReportBarChart data = {this.props.dailyReportBarChart}/>
                      </Col>
                    </Row>
                      <Row style = {{marginTop:'16px'}}>
                        <Col span = {24} >  
                          <DailyReportTable data = {this.props.dailyReportTable} loading ={this.loadingCheck('dailyReportTable')}/>
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
      dates:state.customeraudit.dates,
      dailyReportTable: state.customeraudit.dailyReportTable,
      dailyReportBarChart: state.customeraudit.dailyReportBarChart
    }
}

const mapDispatchToProps = (dispatch) => {
        return{
            // onDateChange: (moment) => dispatch(onDateChange(moment)),
            // clearData: (value) => dispatch(clearData(value)),
            // handleApplyFilter: () => dispatch(handleApplyFilter()),
            // getDailyReportTable: (dates) => dispatch(getDailyReportTable(dates)),
            // getDailyReportBarChart: (dates) => dispatch(getDailyReportBarChart(dates)),
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(CustomerAudit)                    