import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateChange } from '../global_decisions/global_states_control.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {MoreDetailsComponent} from '../more-details/more-details.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  asasa:boolean=true;
  islogged:boolean;
  username:string;
  constructor(private router: Router, public _statechangeobject: StateChange,private _snc: MatSnackBar,public dialog: MatDialog){
    this.username=_statechangeobject.getdata_user();
    this.islogged=_statechangeobject.getdata_islogged();

  }

  verify:string ="proceed"

  ngOnInit(): void {
  }

  proceedfun()
  {
    //this.verify="proceeding"
    if(this.islogged==true){
    this.router.navigate(['predect-page'])}
    else
    {
      this._snc.open("login to proceed", "close");
    }
  }
  registerrouting()
  {
    this.router.navigate(['register-page'])
  }
  loginrouting()
  {
    this.router.navigate(['login-page'])
  }
  logout(){
    this._statechangeobject.deletedata();
    this.islogged=false;
    this.username="";
  }

  contactus(){ 

    this._snc.open("any queries contact shanawaz0891@gmail.com", "close");
  }
  more_details(){
    const dialogRef = this.dialog.open(MoreDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      this._snc.open("Thanks for using our services", "close");
    });
  }
}
