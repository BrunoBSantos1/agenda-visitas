import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Visita } from '../models/visita-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-visita',
  templateUrl: './create-visita.component.html',
  styleUrls: ['./create-visita.component.css']
})


export class CreateVisitaComponent implements OnInit{
  visita: Visita
  dataVisita: string

  visitForm = new FormGroup({
    dateVisit: new FormControl(''),
    nameVisitor: new FormControl(''),
    visitorOccupation: new FormControl(''),
    goalVisit: new FormControl('', [Validators.required]),
    descriptionVisit: new FormControl(''),
    tourGuide: new FormControl(''),
    feedbackVisit: new FormControl('')
  })

  constructor(private visitService: ServiceService, private router: Router) {}

  ngOnInit() {
    this.dataVisita = new Date().toDateString()

  }

  onSubmitForm() {
    console.log(this.visitForm.value)
    this.visita = {
      dateVisit: this.dataVisita,
      nameVisitor: 'Bruno',
      visitorOccupation: 'Estudante',
      goalVisit: this.visitForm.value.goalVisit,
      descriptionVisit: this.visitForm.value.descriptionVisit,
      tourGuide: 'Dona Josefa',
      feedbackVisit: this.visitForm.value.feedbackVisit
    }

    this.conectionDb(this.visita)
    
  }

  async conectionDb(data: Visita) {
    const response = await this.visitService.createVisita(data)
    
    if(response.id) {
      this.router.navigate(['read'])
    }
    
  }
}


