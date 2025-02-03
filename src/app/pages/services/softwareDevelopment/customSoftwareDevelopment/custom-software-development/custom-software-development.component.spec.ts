import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSoftwareDevelopmentComponent } from './custom-software-development.component';

describe('CustomSoftwareDevelopmentComponent', () => {
  let component: CustomSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<CustomSoftwareDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomSoftwareDevelopmentComponent]
    });
    fixture = TestBed.createComponent(CustomSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
