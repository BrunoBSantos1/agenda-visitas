import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visita } from '../models/visita-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    urlBase = environment.baseUrl

  constructor(private http: HttpClient) { }

  createVisita(visita: Visita): Observable<Visita> {
    return this.http.post<Visita>(`${this.urlBase}/visita.json`,visita)
  }
}
