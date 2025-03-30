import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItHiringInfoComponent } from './it-hiring-info.component';

describe('ItHiringInfoComponent', () => {
  let component: ItHiringInfoComponent;
  let fixture: ComponentFixture<ItHiringInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItHiringInfoComponent]
    });
    fixture = TestBed.createComponent(ItHiringInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
