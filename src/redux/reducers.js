import { combineReducers } from 'redux'
import booksSlice from './booksSlice'
import signInSlice from './signInSlice'

const rootReducer = combineReducers({
    signIn: signInSlice,
    books: booksSlice
})

export default rootReducer