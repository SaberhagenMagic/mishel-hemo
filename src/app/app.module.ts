import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { GridModule } from "ng2-qgrid";
import { ThemeModule } from "ng2-qgrid/theme/material";

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material.module";
// Componets
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HemofiliaV19Component } from './hemofilia-v19/hemofilia-v19.component';
import { HemofiliaPanelComponent } from './hemofilia-panel/hemofilia-panel.component';
import { BussyComponent } from './common/bussy/bussy.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    HemofiliaV19Component,
    HemofiliaPanelComponent,
    BussyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule,
    GridModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
