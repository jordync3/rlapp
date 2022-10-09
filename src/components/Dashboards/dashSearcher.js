import { AutoComplete } from 'antd';
import React, {Component} from 'react';
import { connect } from 'react-redux'





class DashSearcher extends Component {


  constructor(props){
      super(props)

      this.state = {
        value:props.value
      }

      this.onSelect = this.onSelect.bind(this)
     
  }



  // onSearch = searchText => {
  //   this.setState({
  //     dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
  //   });
  // };
  

  onChange = value => {
    this.setState({ value });
    this.props.getDashboards(this.props.groups, value)
  };

  onSelect(value) {
    
  }
  testq(one, two){

  }


  render() {

    
    return (
      <div>
        <AutoComplete
         className = {'mobile-friendly-cards'}
          style={{ width: 300 }}
          onSelect={this.onSelect}
          onChange={this.onChange}
          value={this.state.value}
          filterOption={(inputValue, option) =>
            this.testq(inputValue, option)
            // option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          placeholder=""
          allowClear= {true}
          
        />
      </div>
    );
  }




}

const mapStateToProps = (state) => {
  return{
      
  }
}

const mapDispatchToProps = (dispatch) => {
      return{
        
      }
  }



export default connect(mapStateToProps, mapDispatchToProps)(DashSearcher)