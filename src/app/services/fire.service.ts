import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { Hemo } from "../models/hemo-v19.model";

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private db: AngularFirestore) { }

  // getAll(): Observable<firebase.firestore.QuerySnapshot> {
  //  return this.db.collection<any>('', ref => ref.orderBy(''));
  // }
}
