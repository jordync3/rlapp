
import {combineReducers} from 'redux'
import exampleReducer from './exampleReducer'
import customerAuditReducer from './customerAuditReducer'
import authReducer from './authReducer'
import dashboardReducer from './dashboardReducer'
import animalProfileReducer from './animalProfileReducer'


const appReducer = combineReducers({
    exampleReducer: exampleReducer,
    auth: authReducer,
    dashboards: dashboardReducer,
    customeraudit:customerAuditReducer,
    animalprofile:animalProfileReducer
 })
 
  const rootReducer = (state, action) => {
   return appReducer(state, action)
 }

 export default rootReducer;

