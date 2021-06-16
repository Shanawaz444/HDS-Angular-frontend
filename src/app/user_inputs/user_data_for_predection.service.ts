import { Injectable } from '@angular/core'
@Injectable()
export class DataService{
    private  data=new Map();
    setdata(o: any, p: any)
    {
        this.data.set(o,p);
    }
    getdata()
    {
        return this.data;
    }
}