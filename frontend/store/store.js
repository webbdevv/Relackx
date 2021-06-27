import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

export const configureStore = function(defaultState = {}){
    return createStore(rootReducer, defaultState, applyMiddleware(ReduxThunk, logger))
}