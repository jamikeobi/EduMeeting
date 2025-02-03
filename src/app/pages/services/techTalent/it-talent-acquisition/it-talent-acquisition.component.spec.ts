import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTalentAcquisitionComponent } from './it-talent-acquisition.component';

describe('ItTalentAcquisitionComponent', () => {
  let component: ItTalentAcquisitionComponent;
  let fixture: ComponentFixture<ItTalentAcquisitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItTalentAcquisitionComponent]
    });
    fixture = TestBed.createComponent(ItTalentAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
