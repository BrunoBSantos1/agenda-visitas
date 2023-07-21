import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitaComponent } from './update-visita.component';

describe('UpdateVisitaComponent', () => {
  let component: UpdateVisitaComponent;
  let fixture: ComponentFixture<UpdateVisitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVisitaComponent]
    });
    fixture = TestBed.createComponent(UpdateVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
