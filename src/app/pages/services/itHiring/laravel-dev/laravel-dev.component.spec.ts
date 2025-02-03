import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelDevComponent } from './laravel-dev.component';

describe('LaravelDevComponent', () => {
  let component: LaravelDevComponent;
  let fixture: ComponentFixture<LaravelDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaravelDevComponent]
    });
    fixture = TestBed.createComponent(LaravelDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
