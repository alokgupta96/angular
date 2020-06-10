import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCrateComponent } from './customer-crate.component';

describe('CustomerCrateComponent', () => {
  let component: CustomerCrateComponent;
  let fixture: ComponentFixture<CustomerCrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
