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



export const getAPAnimals = (dates) => {
  return (dispatch) => {

    axios.post('/animalprofile/getAPAnimals', {
      dates:dates,
    }).then(res => {


        dispatch({
            type: 'AP_GET_ANIMALS',
            data: res.data
        })
    })
  }
}

export const getAPNotes = (id) => {
  return (dispatch) => {

    axios.post('/animalprofile/getAPNotes', {
      id:id,
    }).then(res => {


        dispatch({
            type: 'AP_GET_NOTES',
            data: res.data
        })
    })
  }
}

export const getAPEvents = (id) => {
  return (dispatch) => {

    axios.post('/animalprofile/getAPEvents', {
      id:id,
    }).then(res => {


        dispatch({
            type: 'AP_GET_EVENTS',
            data: res.data
        })
    })
  }
}











    
