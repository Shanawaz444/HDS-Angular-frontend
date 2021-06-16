import { NgModule } from  '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({

    imports: [
        MatStepperModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatIconModule,MatInputModule,MatFormFieldModule,
        MatButtonModule,MatDialogModule,MatProgressSpinnerModule,MatSnackBarModule
    ],
    exports: [
        MatStepperModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatIconModule,MatInputModule,MatFormFieldModule,
        MatButtonModule,MatDialogModule,MatProgressSpinnerModule,MatSnackBarModule
    ]
})
export class MyMaterialModule {}