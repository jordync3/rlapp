const initState = {
    authGroups: null,
    acceptedGroups: '',
    user:'',
    isTeams: ((((window.location.href).split('#').pop().substring(0,7)) == '/teams/') ? false:true)
}




const authReducer = (state = initState, action) => {

    switch(action.type){
        case 'AUTH_USER':
                return Object.assign({}, state, {
                    ...state,
                    authGroups:action.data,

                })
        case 'GET_ACCEPTED_GROUPS':
            return Object.assign({}, state, {
                ...state,
                acceptedGroups:action.data,

            })
        case 'APP_LOG':
            return Object.assign({}, state, {
                ...state,
                user:action.data,

            })



    default: return state

    }

}

export default authReducer