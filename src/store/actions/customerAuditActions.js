import axios from 'axios'

export const clearData = (value) => {
  return (dispatch) => {


        dispatch({
          type: 'SL_CLEAR_DATA',
          data: ''
      })
    
  }
}

export const onDateChange = (dates) => {
  return (dispatch) => {


        dispatch({
            type: 'SL_ON_DATE_CHANGE',
            data: dates
        })

  }
}


export const handleApplyFilter = () => {
  return (dispatch) => {
 

        dispatch({
            type: 'SL_HANDLE_APPLY_FILTER',
            data: ''
        })

  }
}

export const getDailyReportTable = (dates) => {
  return (dispatch) => {

    axios.post('/shelterluv/getDailyReportTable', {
      dates:dates,
    }).then(res => {


        dispatch({
            type: 'SL_GET_DAILY_REPORT_TABLE',
            data: res.data
        })
    })
  }
}

export const getDailyReportBarChart = (dates) => {
  return (dispatch) => {

    axios.post('/shelterluv/getDailyReportBarChart', {
      dates:dates,
    }).then(res => {


        dispatch({
            type: 'SL_GET_DAILY_REPORT_BAR_CHART',
            data: res.data
        })
    })
  }
}











    
