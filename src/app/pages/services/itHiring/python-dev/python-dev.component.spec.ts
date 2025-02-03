import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonDevComponent } from './python-dev.component';

describe('PythonDevComponent', () => {
  let component: PythonDevComponent;
  let fixture: ComponentFixture<PythonDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonDevComponent]
    });
    fixture = TestBed.createComponent(PythonDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
