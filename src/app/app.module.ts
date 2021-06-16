import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from  './material.module';
import { PredectPageComponent } from './predect-page/predect-page.component';
import { FormsModule } from '@angular/forms';
import { PredectPageDialogComponent } from './predect-page-dialog/predect-page-dialog.component';
import {DataService} from './user_inputs/user_data_for_predection.service'
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {StateChange} from './global_decisions/global_states_control.service';
import { MainPageComponent } from './main-page/main-page.component';
import { MoreDetailsComponent } from './more-details/more-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PredectPageComponent,
    PredectPageDialogComponent,
    RegisterPageComponent,
    LoginPageComponent,
    MainPageComponent,
    MoreDetailsComponent
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    HttpClientModule,
  
  
  ],
 
  providers: [DataService,StateChange],
  bootstrap: [AppComponent]
})
export class AppModule { }
