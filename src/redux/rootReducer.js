import {combineReducers} from 'redux'

const DEFAULT_REDUCER = (initialState , action) => {
    return {
        key : "HELLO"
    }
}

const rootReducer = combineReducers({
    DEFAULT : DEFAULT_REDUCER
})

export default rootReducer