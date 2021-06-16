import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { StateChange } from '../global_decisions/global_states_control.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  debug:boolean =true;
  login:boolean=true;
  name: string;
  email: string;
  password: string;
  temp="asasas"
  constructor(private http: HttpClient,private router: Router,private _snc: MatSnackBar, public statechangeobject: StateChange) {
    this.name="";
    this.email="";
    this.password="";
   }

  ngOnInit(): void {
  }

  validate_inputs(){
    this.temp="went into function"
    this.login=false;
    if(this.name.length!=0 && this.email.length!=0 && this.password.length!=0)
    {
      let regexp=new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+.[a-z]+$');
      if(!regexp.test(this.email))
      {
        this.login=true;
      this._snc.open("enter a vaild email.", "close");
      return;
      }

      
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
  
  
  
  
         this.http.post<{error:number,message:string}>("https://hds-express-api.herokuapp.com/create_users",{
           "name":this.name,
           "email":this.email,
           "password":this.password
         }).subscribe(
          {
            next:data =>{
              if(data.error==0){
                this.login=true;
                this.statechangeobject.setdata(this.name.toString());
                this.router.navigate(['main-page'],{replaceUrl:true})
              }else{
                this.login=true;
               this._snc.open(data.message, "close");
              }
              
            },
            error: error => {
             this.temp = error.message;
             console.log('There was an error!', error);
             this.login=true;
            
         }
          }
        )
      }
      catch(err)
      {
        this.temp="opps! error connecting to server"+err.message;
        this.login=true;
      }
    }else{
      this.login=true;
      this._snc.open("fill all the details correctly: password length should be atleast 8", "close");
    }
    
    
  }
  redirectToLogin()
  {
    this.router.navigate(['login-page'])
  }
}
