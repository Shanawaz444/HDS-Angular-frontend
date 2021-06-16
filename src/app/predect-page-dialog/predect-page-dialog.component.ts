import { Component, Injectable, OnInit } from '@angular/core';
import {DataService} from '../user_inputs/user_data_for_predection.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-predect-page-dialog',
  templateUrl: './predect-page-dialog.component.html',
  styleUrls: ['./predect-page-dialog.component.css']
})
@Injectable()
export class PredectPageDialogComponent implements OnInit {
  public data;
  gender:string[]=["Male","Female"];
  chestpaintype:string[]=["Typical Angina","Atypical Angina","Non-Angina","Asymptomatic Angina"]
  sugerlevel:string[]=["Greater then 120 mg/dl","Lesser then 120 mg/dl"]
  ecg:string[]=["Normal","St-T wave abnormal","left ventr. hypertrophy"]
  eia:string[]=["Yes","No"]
  slope:string[]=["Upslopping","Flat","Downslopping"]
  thala:string[]=["Normal","Fixed defect","Reversable defect"]
  spinner;
  results;
  constructor(_dataserviceobject: DataService,private http: HttpClient) { 

    this.data = _dataserviceobject.getdata();
    this.spinner=true;
    this.results=false;
  }
  ans="";
  fir=false;
  sec=false;
  erroroccured=false;
  errorMessage="";
  ngOnInit(): void {
    console.log("called the function")
     this.http.get<any>("https://hdsapi-predict.herokuapp.com/predictoutput/"+this.data.get('age')+","+this.data.get('gender')+","+this.data.get('chestpain')+","+this.data.get('restingbloodpressur')+","+233+","+this.data.get('bloodsugerlevels')+","+this.data.get('ecgresults')+","+this.data.get('maximumheartrateachived')+","+this.data.get('exercieinducedagina')+","+this.data.get('STdepressioninducedbyexercise')+","+this.data.get('slopest')+","+this.data.get('majorvesselscolored')+","+this.data.get('Thalassemia')).subscribe({
      next: data =>{this.ans = data
      console.log(data)
      if(this.ans=="[1]")
      {
        this.spinner=false;
        this.results=true;
        this.fir=true;
        this.sec=false;

      }else{
        this.spinner=false;
        this.results=true;
        this.fir=false;
        this.sec=true;
      }
      },
      error: error => {
        this.erroroccured=true;
          this.fir=false;
          this.sec=false;
          this.spinner=false;
          this.results=false;
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
      
      })
  }
  get_https(){
    console.log("called the function")
     this.http.get<any>("https://hdsapi-predict.herokuapp.com/predictoutput/"+this.data.get('age')+","+this.data.get('gender')+","+this.data.get('chestpain')+","+this.data.get('restingbloodpressur')+","+this.data.get("cholostrollevels")+","+this.data.get('bloodsugerlevels')+","+this.data.get('ecgresults')+","+this.data.get('maximumheartrateachived')+","+this.data.get('exercieinducedagina')+","+this.data.get('STdepressioninducedbyexercise')+","+this.data.get('slopest')+","+this.data.get('majorvesselscolored')+","+this.data.get('Thalassemia')).subscribe({
      next: data =>{this.ans = data
      console.log(data)
      if(this.ans=="[1]")
      {
        this.spinner=false;
        this.results=true;
        this.fir=true;
        this.sec=false;

      }else{
        this.spinner=false;
        this.results=true;
        this.fir=false;
        this.sec=true;
      }
      },
      error: error => {
        this.erroroccured=true;
          this.fir=false;
          this.sec=false;
          this.spinner=false;
          this.results=false;
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
      
      })
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
