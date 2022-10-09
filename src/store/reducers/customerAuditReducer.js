import moment, { isMoment } from 'moment';
const initState = {
    dates: [moment().add('month', -1),moment().add('day', -1)],
    applyFilter: true,
    dailyReportTable:'',
    dailyReportBarChart:'',
}




const customerAuditReducer = (state = initState, action) => {

    switch(action.type){
        case 'SL_CLEAR_DATA':
            return Object.assign({}, state, {
                ...state,
            })
        case 'SL_GET_DAILY_REPORT_TABLE':
            return Object.assign({}, state, {
                ...state,
                dailyReportTable:action.data,
            })
        case 'SL_GET_DAILY_REPORT_BAR_CHART':
            return Object.assign({}, state, {
                ...state,
                dailyReportBarChart:action.data,
            })
        case 'SL_ON_DATE_CHANGE':
            return Object.assign({}, state, {
                ...state,
                dates:action.data,
            })
    


    default: return state

    }

}

export default customerAuditReducer