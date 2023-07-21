import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Observable, map, pipe } from 'rxjs';
import { Visita } from '../models/visita-model';

@Component({
  selector: 'app-read-visitas',
  templateUrl: './read-visitas.component.html',
  styleUrls: ['./read-visitas.component.css']
})
export class ReadVisitasComponent implements OnInit {

  allVisitas: Visita[];
  constructor(private  visitaService: ServiceService) {}
  
  ngOnInit() {
    this.allVisit()
  }
  
  
  allVisit() {
    this.visitaService.readVisita().subscribe(data => {
      this.allVisitas = data
    });
  }

  updateVisita(data: Visita) {
    console.log(data)
  }
}
