import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppDevelopmentComponent } from './mobile-app-development.component';

describe('MobileAppDevelopmentComponent', () => {
  let component: MobileAppDevelopmentComponent;
  let fixture: ComponentFixture<MobileAppDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAppDevelopmentComponent]
    });
    fixture = TestBed.createComponent(MobileAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
