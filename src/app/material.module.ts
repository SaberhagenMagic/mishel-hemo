import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Components
import {
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule
 } from "@angular/material";

 @NgModule({
     imports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatSelectModule,
        MatChipsModule,
        MatIconModule,
        MatMenuModule
     ],
     exports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCardModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatSelectModule,
        MatChipsModule,
        MatIconModule,
        MatMenuModule
     ]
 })

 export class MaterialModule {}