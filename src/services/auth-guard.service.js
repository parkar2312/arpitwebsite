import { Auth } from 'aws-amplify';




class AuthGuard{


    isAuthenticated = () => {
        return Auth.currentAuthenticatedUser()
        .then(data => {
            console.log({data})
            if(data) return true;
            return false;
        })
        .catch(err => {
            console.log({err})
            return false
        });
    }

}

export default new AuthGuard();