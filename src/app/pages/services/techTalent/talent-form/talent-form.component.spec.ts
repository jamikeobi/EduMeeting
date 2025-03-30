import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentFormComponent } from './talent-form.component';

describe('TalentFormComponent', () => {
  let component: TalentFormComponent;
  let fixture: ComponentFixture<TalentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentFormComponent]
    });
    fixture = TestBed.createComponent(TalentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
