import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visita } from '../models/visita-model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlBase = collection(this.firestore, 'visitas');

  constructor(
    private http: HttpClient,
    private firestore: Firestore
    ) { }

  createVisita(visita: Visita) {
    return addDoc(this.urlBase, visita);
  }

  readVisita(): Observable<Visita[]> {
    return collectionData(this.urlBase, {idField: 'id'}) as Observable<Visita[]>;
    
  }
}
