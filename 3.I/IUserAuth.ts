export interface IUserAuth {

    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;

}
