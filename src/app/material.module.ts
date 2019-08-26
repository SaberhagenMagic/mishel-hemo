import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Components
import { 
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
 } from "@angular/material";

 @NgModule({
     imports: [
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
     ],
     exports: [
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
     ]
 })

 export class MaterialModule {}