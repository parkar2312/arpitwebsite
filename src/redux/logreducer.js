const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } = require("./logconstants");

function userSigninReducer(state={}, action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return{loading:true, auth:false};
        case USER_SIGNIN_SUCCESS:
            return{loading:false, userInfo: action.payload, auth:true};
         case USER_SIGNIN_FAIL:
                return{loading:false, error:action.payload, auth:false};
                default:return state;
    }
}
export  { 
    userSigninReducer
};