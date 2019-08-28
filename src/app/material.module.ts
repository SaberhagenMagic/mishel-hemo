import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Components
import {
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
 } from "@angular/material";

 @NgModule({
     imports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
     ],
     exports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
     ]
 })

 export class MaterialModule {}