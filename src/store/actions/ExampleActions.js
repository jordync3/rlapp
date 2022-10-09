import axios from 'axios'




export const getExampleData = (date) => {
  return (dispatch) => {

    axios.post('/example/getExampleData', {
      date:date,
    }).then(res => {

        console.log(res)

        dispatch({
            type: 'UPDATE_DATA',
            data: res.data
        })
    })
  }
}

export const getExampleName = (name) => {
  return (dispatch) => {

      dispatch({
          type: 'UPDATE_EXAMPLE_NAME',
          data: name
    })
  }
}






    
