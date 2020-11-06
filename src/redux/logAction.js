import Authentication from "../services/authentication.service";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "./logconstants";


const signin=(username, password)=> async(dispatch)=>{
    dispatch({ type:USER_SIGNIN_REQUEST, payload:{username, password}});
    try{
        const{user} =await Authentication.signIn(username, password);
        dispatch({type:USER_SIGNIN_SUCCESS, payload: user});
    }catch(error){
        dispatch({type:USER_SIGNIN_FAIL, payload:error.message});
    }
} 
export {signin};