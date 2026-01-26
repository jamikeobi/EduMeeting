import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CysaPlusComponent } from './cysa-plus.component';

describe('CysaPlusComponent', () => {
  let component: CysaPlusComponent;
  let fixture: ComponentFixture<CysaPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CysaPlusComponent]
    });
    fixture = TestBed.createComponent(CysaPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
