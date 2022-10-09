import axios from 'axios'


export const getDashboards = (groups, query) => {
  return (dispatch) => {


    axios.post('/dashboards/getDashboards', {
      groups:groups,
      query:query
    }).then(res => {

      var acceptedDashbords = []


      for(var i in res.data){ // creates a list of the accepted dashboards and then only allows the routes to be accessed if in array
        acceptedDashbords.push(res.data[i].dashboard)
      }
         

        dispatch({
            type: 'GET_DASHBOARDS',
            data: [res.data, acceptedDashbords]
        })
    })
  }
}

export const getNotifications = (user, acceptedDashboards) => {
  return (dispatch) => {

    axios.post('/dashboards/getNotifications', {
      user:user,
      acceptedDashboards:acceptedDashboards
    }).then(res => {

        dispatch({
            type: 'GET_NOTIFICATIONS',
            data: res.data
        })
    })
  }
}

export const dismissAllNotifications = (user, acceptedDashboards) => {
  return (dispatch) => {

    axios.post('/dashboards/dismissAllNotifications', {
      user:user,
      acceptedDashboards:acceptedDashboards
    }).then(res => {

        dispatch({
            type: 'DISMISS_ALL_NOTIFICATIONS',
            data: res.data
        })
    })
  }
}



export const closeNotification = (user, uid) => {
  return (dispatch) => {

    axios.post('/dashboards/closeNotification', {
      user:user,
      uid:uid
    }).then(res => {

        dispatch({
            type: 'CLOSE_NOTIFICATION',
            data: 'Closed!'
        })
    })
  }
}

export const setNotifications = (data) => {
  return (dispatch) => {

        dispatch({
            type: 'SET_NOTIFICATIONS',
            data: data
        })
  }
}



// export const getExampleName = (name) => {
//   return (dispatch) => {

//       dispatch({
//           type: 'UPDATE_EXAMPLE_NAME',
//           data: name
//     })
//   }
// }






    
