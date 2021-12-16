import {IUserAuth} from "./IUserAuth";
import {IAdminAuth} from "./IAdminAuth";

export class User implements IAdminAuth, IUserAuth {
    private _facebookToken: string;
    private _googleToken: string;
    private _password : string = 'user';


    get facebookToken(): string {
        return this._facebookToken;
    }

    get googleToken(): string {
        return this._googleToken;
    }


    set facebookToken(value: string) {
        this._facebookToken = value;
    }

    set googleToken(value: string) {
        this._googleToken = value;
    }
    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }

//Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token: string) {
        this._googleToken = token;
    }

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token: string) {
        this._facebookToken = token;
    }
}