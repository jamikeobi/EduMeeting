import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingWebDevelopmentComponent } from './training-web-development.component';

describe('TrainingWebDevelopmentComponent', () => {
  let component: TrainingWebDevelopmentComponent;
  let fixture: ComponentFixture<TrainingWebDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingWebDevelopmentComponent]
    });
    fixture = TestBed.createComponent(TrainingWebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
