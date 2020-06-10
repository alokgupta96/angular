import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropFormComponent } from './drag-drop-form.component';

describe('DragDropFormComponent', () => {
  let component: DragDropFormComponent;
  let fixture: ComponentFixture<DragDropFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
