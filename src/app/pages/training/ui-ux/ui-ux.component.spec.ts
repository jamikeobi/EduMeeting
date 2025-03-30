import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIUXComponent } from './ui-ux.component';

describe('UIUXComponent', () => {
  let component: UIUXComponent;
  let fixture: ComponentFixture<UIUXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UIUXComponent]
    });
    fixture = TestBed.createComponent(UIUXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
