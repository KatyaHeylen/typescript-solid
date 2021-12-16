import {IGoogleAuth} from "./IGoogleAuth";

export class GoogleBot implements IGoogleAuth {
    private _googleToken: string;
    private _password : string = 'bot';

    get googleToken(): string {
        return this._googleToken;
    }
    set googleToken(value: string) {
        this._googleToken = value;
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token: string) {
        this._googleToken = token;
    }

}
