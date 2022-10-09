
const initState = {
    exampleUser: 'Testing@Mckesson.com',
    name:'',
    exampleData:'',
    
}




const exampleReducer = (state = initState, action) => {

    console.log(action)

    switch(action.type){
        case 'UPDATE_DATA':
                return Object.assign({}, state, {
                    ...state,
                    exampleData:action.data,

                })
        case 'UPDATE_EXAMPLE_NAME':
            return Object.assign({}, state, {
                ...state,
                name:action.data,

            })

    default: return state

    }

}

export default exampleReducer