import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StateChange } from '../global_decisions/global_states_control.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  wait:boolean;
  email:string;
  password:string;
  constructor(private http: HttpClient,private router: Router,private _snc: MatSnackBar, public statechangeobject: StateChange) { 
    this.email="";
    this.password="";
    this.wait=false;

  }

  ngOnInit(): void {
  }
  validate()
  {
    this.wait=true;
    if(this.email.length!=0&&this.password.length>=8)
    {
      try {
        /* this.http.get<boolean>("http://localhost:5000/view_data").subscribe(
           {
             next:data =>{
               this.temp=data.toString();
             },
             error: error => {
              this.temp = error.message;
              console.log('There was an error!', error);
          }
           }
         )*/
  
  
  
  
         this.http.post<{error:number,message:string,name:string}>("https://hds-express-api.herokuapp.com/view_data",{
           "email":this.email,
           "password":this.password
         }).subscribe(
          {
            next:data =>{
              if(data.error==0){
                this.wait=false;
                this.statechangeobject.setdata(data.name.toString());
                this.router.navigate(['main-page'],{replaceUrl:true})
              }else{
                this.wait=false;
               this._snc.open(data.message, "close");
              }
              
            },
            error: error => {
              this._snc.open(error, "close");
             console.log('There was an error!', error);
             this.wait=false;
            
         }
          }
        )
      }
      catch(err)
      {
        this._snc.open(err.message, "close");
        this.wait=false;
      }
    }else{
      this._snc.open("please enter the details correctly","close");
      this.wait=false;
    }
  }
  signup()
  {
    this.router.navigate(['register-page'])

  }
}
