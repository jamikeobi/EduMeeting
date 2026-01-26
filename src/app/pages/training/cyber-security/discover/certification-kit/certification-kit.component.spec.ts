import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationKitComponent } from './certification-kit.component';

describe('CertificationKitComponent', () => {
  let component: CertificationKitComponent;
  let fixture: ComponentFixture<CertificationKitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationKitComponent]
    });
    fixture = TestBed.createComponent(CertificationKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
