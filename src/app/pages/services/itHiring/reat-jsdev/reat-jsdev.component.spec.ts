import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatJSDevComponent } from './reat-jsdev.component';

describe('ReatJSDevComponent', () => {
  let component: ReatJSDevComponent;
  let fixture: ComponentFixture<ReatJSDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReatJSDevComponent]
    });
    fixture = TestBed.createComponent(ReatJSDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
