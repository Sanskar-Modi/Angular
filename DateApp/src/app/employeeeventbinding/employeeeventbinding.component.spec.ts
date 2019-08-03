import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeventbindingComponent } from './employeeeventbinding.component';

describe('EmployeeeventbindingComponent', () => {
  let component: EmployeeeventbindingComponent;
  let fixture: ComponentFixture<EmployeeeventbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeeventbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeeventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
