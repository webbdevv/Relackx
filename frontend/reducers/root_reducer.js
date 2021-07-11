import { combineReducers } from 'redux'
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer'
import socketsReducer from './sockets_reducer';
const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    sockets: socketsReducer
})


export default rootReducer;