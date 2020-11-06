import { Auth } from 'aws-amplify';

class Authentication{

    signUp = async (username, password, email) => {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email 
                }
            });
            return user;
        } catch (error) {
            throw (error)
        }
    }

    signIn = async (username, password) => {
        try {
            const user = await Auth.signIn(username, password);
            return user;
        } catch (error) {
            throw (error)
        }
    }

    signOut = async () => {
        try {
            await Auth.signOut();
            console.log("signed out")
        } catch (error) {
            console.log({error})
            throw (error);
        }
    }


}

export default new Authentication()

