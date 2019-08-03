import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp2wayComponent } from './emp2way.component';

describe('Emp2wayComponent', () => {
  let component: Emp2wayComponent;
  let fixture: ComponentFixture<Emp2wayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Emp2wayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
