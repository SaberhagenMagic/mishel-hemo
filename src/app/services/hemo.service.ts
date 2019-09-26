import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

import { Hemo } from "../models/hemo-v19.model";

@Injectable({
  providedIn: 'root'
})
export class HemoService {

  private url = 'https://statisticmedic.firebaseio.com/';

  private patients$ = new Subject<Hemo[]>();

  constructor(private http: HttpClient) { }

  savePatient( patient: Hemo) {
    return this.http.post(`${ this.url }hemofilia.json`, patient)
                .pipe(
                  map( (resp: any) => {
                      patient.registroId = resp.name;
                      return patient;
                  })
                );
  }

  updatePatient( patient: Hemo ) {
    const patientInfo = {
      ...patient
    };
    delete patientInfo.registroId;

    return this.http.put(`${ this.url }hemofilia/${ patient.registroId }.json`,patientInfo);
  }

  getPatient(id: string) {
    return this.http.get(`${ this.url }hemofilia/${ id }.json`);
  }

  deletePatients(id: string) {
    return this.http.delete(`${ this.url }hemofilia/${ id }.json`);
  }

  getPatients() {
    return this.http.get(`${ this.url }hemofilia.json`)
            .pipe(
              map(this.toArray)
            );
  }

  private toArray( patientObj: object  ) {
    const resultArray: Hemo[] = [];
    let i = 1;

    Object.keys( patientObj ). forEach( key => {
      const register: Hemo = patientObj[key];
      register.registroId = key;
      register['orden'] = i++;

      resultArray.push(register);
    });

    return resultArray;
  }
}
