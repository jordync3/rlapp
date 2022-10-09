const initState = {
    dashboards: null,
    acceptedDashboards:[],
    notifications:'',
}




const dashboardReducer = (state = initState, action) => {

    switch(action.type){
        case 'GET_DASHBOARDS':
                return Object.assign({}, state, {
                    ...state,
                    dashboards:action.data[0],
                    acceptedDashboards:action.data[1]
                })
        case 'GET_NOTIFICATIONS':
            return Object.assign({}, state, {
                ...state,
                notifications:action.data,
            })
        case 'SET_NOTIFICATIONS':
            return Object.assign({}, state, {
                ...state,
                notifications:action.data,
            })
        case 'DISMISS_ALL_NOTIFICATIONS':
            return Object.assign({}, state, {
                ...state,
                notifications:'',
            })

            



    default: return state

    }

}

export default dashboardReducer