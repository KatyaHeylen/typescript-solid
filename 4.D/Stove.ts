import {IOven} from "./IOven";

export class Stove implements IOven {
    private _isOn : boolean;

    public turnOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE STOVE IS ON!</p>";
        }, 1000);
        console.log("THE STOVE IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE STOVE IS OFF!</p><hr>";
        }, 3000);
        console.log("THE STOVE IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now cooking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}

