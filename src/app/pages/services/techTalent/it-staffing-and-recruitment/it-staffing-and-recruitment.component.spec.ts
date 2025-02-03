import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStaffingAndRecruitmentComponent } from './it-staffing-and-recruitment.component';

describe('ItStaffingAndRecruitmentComponent', () => {
  let component: ItStaffingAndRecruitmentComponent;
  let fixture: ComponentFixture<ItStaffingAndRecruitmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItStaffingAndRecruitmentComponent]
    });
    fixture = TestBed.createComponent(ItStaffingAndRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
