import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFormTableComponent } from './audit-form-table.component';

describe('AuditFormTableComponent', () => {
  let component: AuditFormTableComponent;
  let fixture: ComponentFixture<AuditFormTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditFormTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
