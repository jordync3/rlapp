import React, {Component} from 'react';
import { connect } from 'react-redux'
// import { Breadcrumb } from 'antd';
// import { Row, Col } from 'antd';
// import "./ErrorPage.css";
// import { Link } from 'react-router-dom';
import './body.css';
import 'antd/dist/antd.css';
import '@ant-design/compatible';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import client from './graphql/client';
import Header from './components/Header';
import ExplorePage from './pages/ExplorePage';
import DashboardPage from './pages/DashboardPage';
const API_URL = "/cube";
const CUBEJS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTIxOTgzNzQsImV4cCI6MTYxMjI4NDc3NH0.h3yjKSRKJKQHGsS3FT_2amCWX8WjsGtuXwuJ9QeClgc";
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`
});


// const AppLayout = ({
//   children
// }) => <Layout style={{
//   height: '100%'
// }}>
//     <Header />
//     <Layout.Content>{children}</Layout.Content>
//   </Layout>;

// const App = ({
//   children
// }) => <div>
//   <CubeProvider cubejsApi={cubejsApi}>
//     <ApolloProvider client={client}>
//       <AppLayout>{children}</AppLayout>
//     </ApolloProvider>
//   </CubeProvider>;
//   </div>



class CubeJs extends Component {


    constructor(props){
        super(props)

        this.state = {
            pageSelected:'dashboard',
            itemId:null
        }

        this.changePage = this.changePage.bind(this)
        this.setItemId = this.setItemId.bind(this)

    }


    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState, snapshot){

  }




  changePage(pageSelected){
    this.setState({ pageSelected: pageSelected });
   }

  setItemId(itemId){
    this.setState({ itemId: itemId });
  }


    render(){


        return (
            <div>

                
                <CubeProvider cubejsApi={cubejsApi}>
                    <ApolloProvider client={client}>
                    
                    
                    <Header changePage = {(e) => this.changePage(e)} pageSelected = {this.state.pageSelected}  setItemId = {(e) => this.setItemId(e) } />

                    { this.state.pageSelected == 'dashboard' ?  <DashboardPage changePage = {(e) => this.changePage(e)} setItemId = {(e) => this.setItemId(e)} itemId = {this.state.itemId}/> : <ExplorePage changePage = {(e) => this.changePage(e)} setItemId = {(e) => this.setItemId(e)} itemId = {this.state.itemId}/>}


                    </ApolloProvider>
                </CubeProvider>

            </div>

    
        )

    }


}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
        return{
            // getExampleName: (name) => dispatch(getExampleName(name))

        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(CubeJs)                    