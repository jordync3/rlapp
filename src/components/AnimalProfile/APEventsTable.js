import { Table, Input, Button, Tooltip} from 'antd';
import React, {Component} from 'react';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux'
import moment from 'moment';
import Icon, { PlusCircleOutlined ,SearchOutlined, HistoryOutlined, FileSyncOutlined } from '@ant-design/icons'


class APNotesTable extends Component {


  constructor(props){
      super(props)

      this.state = {
        searchText: '',
        searchedColumn: '',
        rowId:'',
      }


  }

  
    componentDidUpdate(prevProps, prevState, snapshot){

  }






  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="Search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        />
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

 

  render() {

    const columns = [
      {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
        // width: '20%',
        sorter: {
          compare: (a, b) => moment(a['Date']).unix() - moment(b['Date']).unix(),
          multiple: 0,
        },
        ...this.getColumnSearchProps('Date'),
      },
      {
        title: 'Event',
        dataIndex: 'Type',
        key: 'Type',
        sorter: {
          compare: (a, b) => a.Type.localeCompare(b.Type),
          multiple: 1,
        },
        ...this.getColumnSearchProps('Type'),
      },
      {
        title: 'Owner',
        dataIndex: 'Owner',
        key: 'Owner',
        sorter: {
          compare: (a, b) => a.Owner.localeCompare(b.Owner),
          multiple: 1,
        },
        ...this.getColumnSearchProps('Owner'),
      },

    ];


    return (
    <div style = {{width:'100%',height:'100%'}}>
      
      <Table 
        columns={columns} 
        dataSource={this.props.data} 
        pagination = {{pageSize:8}} 
        // rowSelection={rowSelection}
        height = {'100vh'} 
        loading = {this.props.loading}
        />

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
      }
  }



export default connect(mapStateToProps, mapDispatchToProps)(APNotesTable)