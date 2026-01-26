import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAssistanceComponent } from './virtual-assistance.component';

describe('VirtualAssistanceComponent', () => {
  let component: VirtualAssistanceComponent;
  let fixture: ComponentFixture<VirtualAssistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualAssistanceComponent]
    });
    fixture = TestBed.createComponent(VirtualAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
