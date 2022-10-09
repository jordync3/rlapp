import moment, { isMoment } from 'moment';
const initState = {
    dates: [moment().add('month', -1),moment().add('day', -1)],
    applyFilter: true,
    apAnimals:'',
    apNotes:'',
    apEvents:'',
}




const animalProfileReducer = (state = initState, action) => {

    switch(action.type){
        case 'AP_CLEAR_DATA':
            return Object.assign({}, state, {
                ...state,
            })
        case 'AP_ON_DATE_CHANGE':
            return Object.assign({}, state, {
                ...state,
                dates:action.data,
            })
        case 'AP_GET_ANIMALS':
            return Object.assign({}, state, {
                ...state,
                apAnimals:action.data,
            })
        case 'AP_GET_NOTES':
            return Object.assign({}, state, {
                ...state,
                apNotes:action.data,
            })
        case 'AP_GET_EVENTS':
            return Object.assign({}, state, {
                ...state,
                apEvents:action.data,
            })
    


    default: return state

    }

}

export default animalProfileReducer