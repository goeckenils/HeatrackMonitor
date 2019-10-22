import { createStore } from 'redux'
import  { tempReducer } from "./reducers"

const store = createStore(tempReducer);

window.store = store

export default store