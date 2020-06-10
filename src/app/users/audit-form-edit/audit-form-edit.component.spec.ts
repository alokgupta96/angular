import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFormEditComponent } from './audit-form-edit.component';

describe('AuditFormEditComponent', () => {
  let component: AuditFormEditComponent;
  let fixture: ComponentFixture<AuditFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
