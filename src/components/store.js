import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createStore ,combineReducers} from 'redux';
import { userSigninReducer } from '../redux/logreducer';

const userInfo =null;
const auth =false;

const initialState= {userSignin:{userInfo,auth}};
const reducer = combineReducers({
    userSignin:userSigninReducer
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;