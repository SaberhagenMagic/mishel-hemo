import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Hemo } from "../models/hemo-v19.model";

@Injectable({
  providedIn: 'root'
})
export class HemoService {

  private url = 'https://statisticmedic.firebaseio.com/';

  constructor(private http: HttpClient) { }

  savePatient( patient: Hemo) {
    return this.http.post(`${ this.url }/hemofilia.json`, patient)
                .pipe(
                  map( (resp: any) => {
                      patient.registroId = resp.name;
                      return patient;
                  })
                );
  }
}
