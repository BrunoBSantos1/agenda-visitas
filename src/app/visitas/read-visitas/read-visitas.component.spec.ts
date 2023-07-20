import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadVisitasComponent } from './read-visitas.component';

describe('ReadVisitasComponent', () => {
  let component: ReadVisitasComponent;
  let fixture: ComponentFixture<ReadVisitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadVisitasComponent]
    });
    fixture = TestBed.createComponent(ReadVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
