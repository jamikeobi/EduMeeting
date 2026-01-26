import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityProComponent } from './security-pro.component';

describe('SecurityProComponent', () => {
  let component: SecurityProComponent;
  let fixture: ComponentFixture<SecurityProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityProComponent]
    });
    fixture = TestBed.createComponent(SecurityProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
