

export const changeTab = (tab) => {
  return (dispatch) => {

      dispatch({
          type: 'CHANGE_TAB',
          data: tab
    })
  }
}


export const changeTabOnStart = (tab) => {
  return (dispatch) => {

      dispatch({
          type: 'CHANGE_TAB',
          data: tab
    })
  }
}







    
