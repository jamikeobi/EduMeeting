import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechConsultingComponent } from './tech-consulting.component';

describe('TechConsultingComponent', () => {
  let component: TechConsultingComponent;
  let fixture: ComponentFixture<TechConsultingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechConsultingComponent]
    });
    fixture = TestBed.createComponent(TechConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
