import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Ng2TableModule } from "ng2-table/ng2-table";
import { AngularFireModule } from "@angular/fire";

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material.module";
// Componets
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HemofiliaV19Component } from './hemofilia-v19/hemofilia-v19.component';
import { HemofiliaPanelComponent } from './hemofilia-panel/hemofilia-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    HemofiliaV19Component,
    HemofiliaPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    Ng2TableModule,
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
