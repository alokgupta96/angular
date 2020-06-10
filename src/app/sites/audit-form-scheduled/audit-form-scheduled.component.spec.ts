import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFormScheduledComponent } from './audit-form-scheduled.component';

describe('AuditFormScheduledComponent', () => {
  let component: AuditFormScheduledComponent;
  let fixture: ComponentFixture<AuditFormScheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditFormScheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditFormScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
