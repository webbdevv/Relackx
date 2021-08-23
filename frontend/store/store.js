import { createStore } from 'redux'
import rootReducer from '../reducers/root_reducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const configureStore = function(defaultState = {}){
    return createStore(rootReducer, defaultState, applyMiddleware(ReduxThunk))
}

export default configureStore