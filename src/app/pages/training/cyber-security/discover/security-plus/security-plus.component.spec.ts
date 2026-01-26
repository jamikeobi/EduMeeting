import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPlusComponent } from './security-plus.component';

describe('SecurityPlusComponent', () => {
  let component: SecurityPlusComponent;
  let fixture: ComponentFixture<SecurityPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityPlusComponent]
    });
    fixture = TestBed.createComponent(SecurityPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
