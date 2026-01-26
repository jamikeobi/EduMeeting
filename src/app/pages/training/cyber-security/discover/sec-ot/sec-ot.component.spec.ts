import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecOTComponent } from './sec-ot.component';

describe('SecOTComponent', () => {
  let component: SecOTComponent;
  let fixture: ComponentFixture<SecOTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecOTComponent]
    });
    fixture = TestBed.createComponent(SecOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
