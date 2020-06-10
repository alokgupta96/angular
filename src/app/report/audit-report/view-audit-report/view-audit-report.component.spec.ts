import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuditReportComponent } from './view-audit-report.component';

describe('ViewAuditReportComponent', () => {
  let component: ViewAuditReportComponent;
  let fixture: ComponentFixture<ViewAuditReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAuditReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuditReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
