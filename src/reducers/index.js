import { combineReducers}  from 'redux'
import PostReducer from "./PostReducer"
import UsersReducer from "./UsersReducer"

export default combineReducers({
    posts:PostReducer,
    users:UsersReducer
})