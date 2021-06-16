import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PredectPageDialogComponent } from '../predect-page-dialog/predect-page-dialog.component';
import { StateChange } from '../global_decisions/global_states_control.service';
import {DataService} from '../user_inputs/user_data_for_predection.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-predect-page',
  templateUrl: './predect-page.component.html',
  styleUrls: ['./predect-page.component.css']
})
export class PredectPageComponent implements OnInit {

  model_message:string="please fill the form on the left";
  sol:ThemePalette='warn';
  value="";
  genderselect=0;
  chestpaintype=1;
  chestpaintypearray:string[]=["typical angina pain",
"atypical angina pain",
"non-angina pain",
"asymptomatic angina pain"];


fastingbloodsuger=1;


bloodpresure=100;

cholostrollevels=0;



recg=0;
recgarray:string[]=["Normal",
"St-T wave abnormal",
"left ventr. hypertrophy",];
maxheartrateachived=72;
exerciseinducedagena=0;
STdepressioninducedbyexercise=0;

slopeofthepeakexerciseSTsegment=0;
slopeofthepeakexerciseSTsegmentarray:string[]=["Upslopping",
"flat",
"Downslopping"];



majorvesselscolored=0;




Thalassemia=0;
Thalassemiaarray:string[]=["Normal","Fixed defect","Reversable defect"];
dataserviceobject;
constructor(private _snc: MatSnackBar,public dialog: MatDialog,_dataserviceobject:DataService,private router: Router,public _statechangeobject: StateChange) {
  this.dataserviceobject=_dataserviceobject;
}

  ngOnInit(): void {
  }
   openDialog() {
    
    this.dataserviceobject.setdata('age',this.value)
    this.dataserviceobject.setdata('gender',this.genderselect)
    this.dataserviceobject.setdata('chestpain',this.chestpaintype)
    this.dataserviceobject.setdata('restingbloodpressur',this.bloodpresure)
    this.dataserviceobject.setdata('bloodsugerlevels',this.fastingbloodsuger)
    this.dataserviceobject.setdata('ecgresults',this.recg)
    this.dataserviceobject.setdata('maximumheartrateachived',this.maxheartrateachived)
    this.dataserviceobject.setdata('exercieinducedagina',this.exerciseinducedagena)
    this.dataserviceobject.setdata('STdepressioninducedbyexercise',this.STdepressioninducedbyexercise)
    this.dataserviceobject.setdata('slopest',this.slopeofthepeakexerciseSTsegment)
    this.dataserviceobject.setdata('majorvesselscolored',this.majorvesselscolored)
    this.dataserviceobject.setdata('Thalassemia',this.Thalassemia)
    this.dataserviceobject.setdata('cholostrollevels',this.cholostrollevels);
    const dialogRef = this.dialog.open(PredectPageDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout(){
    this._statechangeobject.deletedata();
    this.router.navigate(['main-page'],{replaceUrl:true})
  }
  contactus()
  {
    this._snc.open("any queries contact shanawaz0891@gmail.com", "close");
  }
}





