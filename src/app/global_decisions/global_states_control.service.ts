import { Injectable } from '@angular/core'
@Injectable()
export class StateChange{
    private islogged:boolean = false;
    private currentuser:string="";
    setdata(name:string)
    {
        this.currentuser = name;
        this.islogged = true;
    }
    getdata_user()
    {
     return this.currentuser;   
    }
    getdata_islogged()
    {
        return this.islogged;
    }
    deletedata()
    {
        this.currentuser="";
        this.islogged=false;
    }
}