import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2Component } from './course2.component';

describe('Course2Component', () => {
  let component: Course2Component;
  let fixture: ComponentFixture<Course2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Course2Component]
    });
    fixture = TestBed.createComponent(Course2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
