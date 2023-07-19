import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVisitaComponent } from './create-visita.component';

describe('CreateVisitaComponent', () => {
  let component: CreateVisitaComponent;
  let fixture: ComponentFixture<CreateVisitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVisitaComponent]
    });
    fixture = TestBed.createComponent(CreateVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
