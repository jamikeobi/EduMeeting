import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityXComponent } from './security-x.component';

describe('SecurityXComponent', () => {
  let component: SecurityXComponent;
  let fixture: ComponentFixture<SecurityXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityXComponent]
    });
    fixture = TestBed.createComponent(SecurityXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
