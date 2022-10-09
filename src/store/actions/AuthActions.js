import axios from 'axios'



export const authenticateUser = (value) => {
  return (dispatch) => {

      dispatch({
          type: 'AUTH_USER',
          data: value
    })
  }
}


export const getAcceptedGroups = () => {
  return (dispatch) => {

    axios.post('/dashboards/getAcceptedGroups', {
      
    }).then(res => {

      console.log(res.data)

        dispatch({
            type: 'GET_ACCEPTED_GROUPS',
            data: res.data
        })
    })
  }
}

export const appLog = (user,type) => {

  return (dispatch) => {

     
    axios.post('/dashboards/appLog', {
      user:user,
      type:type
    }).then(res => {

        
        dispatch({
            type: 'APP_LOG',
            data: user
        })
    })
  }
}






    
