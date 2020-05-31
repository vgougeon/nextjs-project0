import { createStore, combineReducers } from 'redux'
import authReducer from './reducers/authReducer';

const reducer = combineReducers({
    auth: authReducer
})

import {createWrapper} from 'next-redux-wrapper';

// create a makeStore function
const makeStore = context => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});