import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-visita',
  templateUrl: './create-visita.component.html',
  styleUrls: ['./create-visita.component.css']
})


export class CreateVisitaComponent {
  visitForm = new FormGroup({
    dateVisit: new FormControl(''),
    nameVisitor: new FormControl(''),
    visitorOccupation: new FormControl(''),
    goalVisit: new FormControl('', [Validators.required]),
    descriptionVisit: new FormControl(''),
    tourGuide: new FormControl(''),
    feedbackVisit: new FormControl('')
  })

  onSubmitForm() {
    console.log(this.visitForm.value)
  }
}
