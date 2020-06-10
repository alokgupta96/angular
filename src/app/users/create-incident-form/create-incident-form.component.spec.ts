import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncidentFormComponent } from './create-incident-form.component';

describe('CreateIncidentFormComponent', () => {
  let component: CreateIncidentFormComponent;
  let fixture: ComponentFixture<CreateIncidentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIncidentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIncidentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
